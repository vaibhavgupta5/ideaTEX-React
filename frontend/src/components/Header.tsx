import { useState } from "react";
import { Menu, X } from "lucide-react"; // For menu and close icons

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 z-40 w-full flex justify-center items-center mt-4">
      <div className="glass flex items-center px-4 md:px-8 py-3 w-[90%] border-solid border-[#26222D] border-2 h-[10vh] md:h-[15vh] rounded-lg">
        <div className="flex items-center justify-between w-full">
          <div className="font-[600] text-[#AE0D61] text-[20px]">IDEATEX</div>

          {/* Desktop Links */}
          <div className="hidden md:flex justify-end items-center gap-6 w-[60%]">
            <a href="/" className="font-[600] text-[18px] hover:text-[#AE0D61]">
              HOME
            </a>
            <a href="#about" className="font-[600] text-[18px] hover:text-[#AE0D61]">
              ABOUT US
            </a>
            <a href="#schedule" className="font-[600] text-[18px] hover:text-[#AE0D61]">
              SCHEDULE
            </a>
            <a href="#faq" className="font-[600] text-[18px] hover:text-[#AE0D61]">
              FAQS
            </a>
            <a href="#sponser" className="font-[600] text-[18px] hover:text-[#AE0D61]">
              SPONSORS
            </a>
            <a href="/register" className="bg-[#AE0D61] font-[600] py-2 px-6 rounded-lg border-2 border-[#AE0D61] hover:bg-transparent hover:border-[#AE0D61]">
            
            Register Now
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-[#AE0D61]">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#26222D] bg-opacity-95 flex flex-col items-center justify-center transition-opacity duration-300">
          <button onClick={toggleMenu} className="absolute top-8 right-8 text-white">
            <X size={28} />
          </button>
          <nav className="flex flex-col items-center space-y-6 mt-8">
            <a href="#" onClick={toggleMenu} className="text-white font-[600] text-[22px] hover:text-[#AE0D61]">
              HOME
            </a>
            <a href="#" onClick={toggleMenu} className="text-white font-[600] text-[22px] hover:text-[#AE0D61]">
              ABOUT US
            </a>
            <a href="#" onClick={toggleMenu} className="text-white font-[600] text-[22px] hover:text-[#AE0D61]">
              SPEAKERS
            </a>
            <a href="#" onClick={toggleMenu} className="text-white font-[600] text-[22px] hover:text-[#AE0D61]">
              EVENTS
            </a>
            <a href="#" onClick={toggleMenu} className="text-white font-[600] text-[22px] hover:text-[#AE0D61]">
              SPONSORS
            </a>
          </nav>
          <button
            onClick={toggleMenu}
            className="mt-8 bg-[#AE0D61] text-white font-[600] py-3 px-10 rounded-lg border-2 border-[#AE0D61] hover:bg-transparent hover:text-[#AE0D61]"
          >
            Register Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;

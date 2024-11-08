import Button from "./components/Button";
import CountdownTimer from "./components/CountdownTimer";
import EventCard from "./components/EventCard";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import MovingText from "./components/MovingText";
import TicketInfo from "./components/Registration";
import Schedule from "./components/Schedule";
import Sponsers from "./components/Sponsers";
import ScrollingGallery from "./components/Scrolling-Gallery";
import FAQSection from "./components/Faq";
import PromoBanner from "./components/OffBanner";
import Maps from "./components/Maps";
import {  IndianRupee, Network, UsersRound } from "lucide-react";
import "./index.css";

export default function Home() {
  return (
    <div className="relative bg-[#04000A] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10 pointer-events-none z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero  />
        <CountdownTimer />

        <div className="w-full pt-8 pb-8 md:pt-0 md:pb-0 flex justify-center items-center">
          <div className="flex flex-col justify-center w-[95%] md:w-[85%] px-4">
            <div className="min-h-[60vh] md:h-[80vh]">
              <Heading top="Ticket" med="IdeaTex" last="ENTRANCE" />
              <TicketInfo />
            </div>
          </div>
        </div>

        <div id="about" className="w-full pt-8 pb-8 md:pt-0 md:pb-0 flex justify-center items-center">
          <div className="flex flex-col justify-center w-[95%] md:w-[85%] px-4">
            <div className="flex flex-col md:flex-row h-auto md:h-[80vh] items-center">
              <div className="w-full md:w-[50%]">
                <Heading top="About The Event" med="Ecell's" last="IDEATEX" />
                <p className="text-[14px] md:text-[16px] mt-8 text-[#838490]">
                  Ecell's IDEATEX is a platform to unleash your creativity,
                  showcase your business insight, and bring your entrepreneurial
                  spirit to life. Join us to present innovative ideas, gain
                  valuable feedback, and connect with mentors and investors.
                  <br />
                  <br />
                  Make your mark, stand out, and drive change—this is your
                  opportunity to turn ideas into impact!
                </p>
                <Button />
              </div>
              <div className="w-full md:w-[50%] flex justify-center items-center mt-8 md:mt-0">
                <div className="w-full md:w-[80%] rounded-lg h-[30vh] md:h-[60vh] bg-white shadow-custom"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[20vh]  md:h-[40vh] flex items-center">
          <MovingText />
        </div>

        <div className="w-full flex pt-8 pb-8 md:pt-0 md:pb-0 justify-center items-center">
          <div className="flex flex-col justify-center w-[95%] md:w-[85%] px-4">
            <div className="h-auto md:h-[100vh] flex flex-col justify-center">
              <div className="w-full flex flex-col md:flex-row items-start md:items-end">
                <div className="w-full md:w-[60%]">
                  <Heading top="Why IdeaTex?" med="Simply" last="BEST" />
                </div>
                <p className="text-[14px] md:text-[16px] w-full md:w-[40%] text-left md:text-right text-[#838490] mt-4 md:mt-0">
                  If you're driven to create a positive impact, IDEATEX is your
                  stage to share ideas, showcase business skills, and ignite
                  change. Present your vision, stand out, and make a difference!
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center w-full gap-6 justify-center mt-8 md:mt-12">
                <EventCard
                  icon={<UsersRound className="w-12 h-12 md:w-16 md:h-16" />}
                  title="Mentorship"
                  description="Receive invaluable feedback on your ideas from experienced mentors."
                />

                <EventCard
                  icon={<IndianRupee className="w-12 h-12 md:w-16 md:h-16" />}
                  title="Funding"
                  description="Boost your chances of gaining financial support for your project."
                />

                <EventCard
                  icon={<Network className="w-12 h-12 md:w-16 md:h-16" />}
                  title="Networking"
                  description="Build connections with seasoned entrepreneurs and investors."
                />
              </div>
            </div>
          </div>
        </div>

        <div id="schedule" className="w-full  pt-8 md:pt-0 md:pb-0 flex justify-center items-center">
          <div className="flex flex-col  justify-center w-[95%] md:w-[85%] px-4">
            <Schedule />
          </div>
        </div>

        <div id="sponser" className="w-full flex pt-8 pb-8 md:pt-0 md:pb-0 justify-center items-center">
          <div className="flex flex-col h-auto md:h-[100vh] justify-center w-[95%] md:w-[85%] px-4">
            <Sponsers />
          </div>
        </div>

        <div className="w-full pt-8 pb-8 md:pt-0 md:pb-0 flex justify-center items-center">
          <div className="flex flex-col h-auto md:h-[80vh] justify-center w-[100%] md:w-[85%] px-4">
            <ScrollingGallery />
          </div>
        </div>

        <div className="w-full pt-8 pb-8 md:pt-0 md:pb-0 flex justify-center items-center">
          <div className="flex flex-col h-auto md:h-[80vh] justify-center w-[95%] md:w-[85%] px-4">
            <FAQSection />
          </div>
        </div>

        <div className="h-[40vh] pt-8 pb-8 md:pt-0 md:pb-0 md:h-[40vh] flex items-center">
          <PromoBanner />
        </div>

        <div className="w-full pt-8 pb-8 md:pt-0 md:pb-0 flex justify-center items-center">
          <div className="flex flex-col h-auto md:h-[100vh] justify-center w-[95%] md:w-[85%] px-4">
            <Maps />
          </div>
        </div>

        <div className="h-[10vh] mb-8 md:h-[30vh] flex items-center">
          <MovingText />
        </div>

        <div className="bg-[#0B0713] h-[10vh] flex justify-center items-center font-bold ">
          Made with ❤️ by ECELL Tech Team
        </div>
      </div>
    </div>
  );
}

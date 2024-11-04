import React, { ReactNode } from 'react';
import Heading from './Heading';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image'

const Maps = () => {
  return (
    <div className='md:h-[70vh] h-[85vh] gap-10 flex flex-col md:flex-row md:p-14 p-4 bg-[#0B0713] rounded-lg border-2 border-[#26222D] justify-center'>
<div className="md:w-[50%] w-full flex flex-col ">
    <div className="w-[100%]">
      <Heading top="Still Any Issues?" med="IdeaTex" last="CONTACT" />
    </div>

    <div className="text-[16px] mt-8 text-[#838490]">
      Immerse in mesmerizing performances,vibrant soundscapes,and
      interactive art at our music extravaganza. Experience a
      festival atmosphere like no other, where unforgettable
      moments.
    </div>

    <input placeholder='Enter Your Email' className='bg-transparent rounded-lg border-2 border-[#26222D] py-5 mt-8 outline-none p-4 '></input>
  </div>

<div className='w-full md:w-[50%] md:m-4 text-black bg-white h-[80%]'>
 MAPS
</div>


    </div>
    
  );
};

export default Maps;

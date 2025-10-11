import React, { useState, useEffect } from 'react';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';
import { Link } from 'react-router-dom';
import AnimatedContent from '../components/animatedcontent.jsx';
import Marquee from "react-fast-marquee";
import Footer from '../components/footer.jsx';

function WorkPage() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
  
    window.scrollTo(0, 0);
    document.title = "Rafael Furlan";
  }, []);

  useEffect(() => {
    
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <>
      {!isTouchDevice && <CustomCursor />}

      <div className='w-full min-h-screen flex flex-col cursor-none bg-gray-50'>
        <TopBar/>

        <div
          id="main"
          className='flex flex-col w-full flex-1 gap-[25px] pt-[160px] pb-0 pr-6 pl-6 sm:pt-52 sm:pl-16 sm:pr-16 sm:pb-[112px] cursor-none'
          data-cursor="scroll"
        >
          <div className='flex flex-col w-full sm:max-w-1/2 gap-4'>
            <p className='text-gray-900 font-sora font-regular text-3xl leading-9'>
            Senior Product Designer and Frontend Enthusiast with 7+ years of experience in Design field.
            </p>
            <p className='text-gray-500 font-sora font-regular text-3xl leading-9'>
            Working across Web and Mobile, UX projects and Design Systems has shaped my belief in Holistic Design - Where designers own the entire journey from strategy to implementation.
            </p>
          </div>
        </div>

        

        <div
          id="grid"
          className='grid grid-cols-1 pt-8 pl-6 pr-6 gap-4 sm:pt-0 sm:grid-cols-2 sm:pr-12 sm:pl-12 sm:gap-4'
          
        >
          
          <Link  to="/project-viplan" className='cursor-none'>
            <div className='bg-[url(/images/project-placeholders/Viplan/viplan-thumb.jpg)] bg-cover w-full aspect-square flex items-center justify-center' data-cursor="view"></div>        
          </Link>

          <Link to="/project-superfiliate-ds" className='cursor-none'>
            <div className='bg-[url(/images/final%20imgs/Superfiliate%20DS/thumb-ds-sf.jpg)] bg-cover w-full aspect-square flex items-center justify-center' data-cursor="view"></div>        
          </Link>

          <Link to="/project-pleez" className='cursor-none'>
            <div className='bg-[url(/images/final%20imgs/pleez/pleez-thumb.jpg)] bg-cover w-full aspect-square flex items-center justify-center' data-cursor="view"></div>
          </Link>

          <Link className='cursor-none'>
            <div className='bg-[url(/images/final%20imgs/Sf-tiktokshop/sf-tiktok-shop-thumb.jpg)] bg-cover w-full aspect-square flex items-center justify-center' data-cursor="soon"></div>        
          </Link>

          
          
        </div>

        <Footer />
          
        
      </div>
    </>
  );
}

export default WorkPage;

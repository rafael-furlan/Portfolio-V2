import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';
import Marquee from "react-fast-marquee";

function WorkPage() {

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detecta se é dispositivo touch
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);


  return (
    <>
    <Helmet>
        <link rel="icon" href="/images/favicon/favicon-fractal.svg" type="image/svg+xml" />
        <title>Rafael Furlan</title>
    </Helmet>

    {!isTouchDevice && <CustomCursor />}

      <div className='w-full min-h-screen flex flex-col overflow-visible cursor-none bg-gray-50 '>
      <TopBar/>
      
      <div id="main" className='flex flex-col w-full flex-1 gap-[25px] pt-[120px] pb-0 pr-6 pl-6 sm:pt-[180px] sm:pl-16 sm:pr-16 sm:pb-8 ' data-cursor="scroll">
        <div className='flex fle-row sm:w-full sm:max-w-[800px]'>
            <p className='text-gray-800 font-sora font-regular text-md sm:text-lg/8'>
            Hey, <strong>I'm Rafa!</strong><br></br>I'm a digital product designer and frontend engineering enthusiast<br></br>
            with 7+ years of design experience. Working across web and mobile design,<br></br>
            UX projects, and design systems has shaped my belief in holistic design<br></br>
            —where designers own the entire journey from strategy to implementation.
            </p>
        </div>
      </div>

        <div id="heading" className='flex flex-col w-fullpt-1 pb-4' data-cursor="scroll">

        <div className='flex flex-row justify-center gap-16'>
            <Marquee>
              <div className='flex flex-row justify-center m-6'>
                  <h1 className='text-gray-800 font-sora text-[100px] sm:text-[150px] font-medium tracking-tighter'>Product</h1>
              </div>
              <div className='flex flex-row justify-center m-6'>
                  <h1 className='text-gray-800 font-sora text-[100px] sm:text-[150px] font-medium tracking-tighter'>Design</h1>
              </div>
              <div className='flex flex-row justify-center m-6'>
                  <h1 className='text-gray-800 font-sora text-[100px] sm:text-[150px] font-medium tracking-tighter'>Engineer</h1>
              </div>
              <div className='flex flex-row justify-center m-6'>
                <svg 
                  width="73"
                  height="75" 
                  viewBox="0 0 73 75" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="fill-gray-800">
                  <path d="M27.15 0H42.3L39.6 27.9L26.4 35.55L0.75 24L8.4 10.95L25.05 23.4L29.7 20.7L27.15 0ZM72.45 48.15L64.95 61.35L42.15 45V29.7L64.95 13.35L72.45 26.4L53.25 34.65V40.05L72.45 48.15ZM8.4 63.75L0.75 50.7L26.4 39L39.6 46.65L42.3 74.7H27.15L29.7 54L25.05 51.3L8.4 63.75Z" />
                </svg>
              </div>
            </Marquee>
        </div>

      </div>
      
     
      <div id="grid" className='grid gri-cols-1 pt-8 pl-6 pr-6 gap-4 sm:grid-cols-2 sm:pl-16 sm:pr-16 sm:gap-4' data-cursor="view">
        <div className='bg-[url(/images/project-placeholders/img-8.png)] w-full aspect-square flex items-center justify-center' ></div>
        <div className='bg-[url(/images/project-placeholders/img-6.png)] w-full aspect-square flex items-center justify-center' ></div>
        <div className='bg-[url(/images/project-placeholders/img-7.png)] w-full aspect-square flex items-center justify-center' ></div>
        <div className='bg-[url(/images/project-placeholders/img-5.png)] w-full aspect-square flex items-center justify-center' ></div>
      </div>
      
     
       <div id="bottom" className='flex flex-col sm:flex-row w-full items-start justify-start pl-6 pr-6 pt-8 pb-[50px] gap-[20px] sm"gap-[40px] sm:pl-16 sm:pr-16 sm:pt-[150px] sm:pb-[100px] sm:gap-[100px]' data-cursor="top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    
          <div className='flex flex-col gap-2 p-2 items-start'>
            <h3 className='text-gray-500 text-lg'>Based</h3>
            <h2 className='text-gray-700 text-xl font-medium'>Barcelona, Spain</h2>
          </div>
          
          <div className='flex flex-col gap-2 p-2 items-start'>
            <h3 className='text-gray-500 text-lg'>Company</h3>
            <h2 className='text-gray-700 text-xl font-medium'>Superfiliate Inc.</h2>
          </div>
          
          <div className='flex flex-col gap-2 p-2 items-start'>
            <h3 className='text-gray-500 text-lg'>Contact</h3>
            <h2 className='text-gray-700 text-xl font-medium'>rafaelfurlan@gmail.com</h2>
          </div>
    
      </div>
        
      </div>
    </>
  );
}

export default WorkPage;

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

function WorkPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <div className='w-full min-h-screen flex flex-col cursor-none bg-gray-50 '>
      <TopBar/>
      
      <div id="main" className='flex flex-col w-full flex-1 gap-[25px] pt-[160px] pb-0 pr-6 pl-6 sm:pt-52 sm:pl-16 sm:pr-16 sm:pb-20 cursor-none ' data-cursor="scroll">
        <div className='flex fle-row w-full sm:max-w-[730px]'>
            <p className='text-gray-800 font-sora font-regular text-lg leading-9 text-justify'>
            Hey, <strong>I'm Rafa!</strong><br></br>I'm a Digital product designer and Frontend enthusiast. 
            I have 7+ years of experience in design field. Working across web and mobile design, 
            user experience projects and design systems has shaped my belief in holistic design 
            — where designers own the entire journey from strategy to implementation.
            </p>
        </div>
      </div>

      <div id="heading" className='flex flex-col w-full pt-9 pb-8 sm:pt-0 sm:pb-20 cursor-none' data-cursor="scroll">

        <div className='flex flex-row justify-center gap-16 items-baseline'>
            <Marquee autoFill={true}>
              <div className='flex flex-row justify-center ml-8 mr-8'>
                  <h1 className='text-gray-800 font-sora text-[102px] sm:text-[102px] font-medium tracking-tighter'>Staff Product Designer</h1>
              </div>
              <div className='flex flex-row justify-center ml-8 mr-8'>
                 
              <svg width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37.6109 0H57.4728L53.9331 37.3494L36.6276 47.5904L3 32.1285L13.0293 14.6586L34.8577 31.3253L40.954 27.7108L37.6109 0ZM97 64.4578L87.1674 82.1285L57.2762 60.241V39.759L87.1674 17.8715L97 35.3414L71.8285 46.3855V53.6145L97 64.4578ZM13.0293 85.3414L3 67.8715L36.6276 52.2088L53.9331 62.4498L57.4728 100H37.6109L40.954 72.2892L34.8577 68.6747L13.0293 85.3414Z" fill="#212936"/>
              </svg>
                  
              </div>
             
            </Marquee>
        </div>

      </div>
      
     
      <div id="grid" className='grid gri-cols-1 pt-8 pl-6 pr-6 gap-4 sm:pt-0 sm:grid-cols-2 sm:pr-12 sm:pl-12 sm:gap-4' data-cursor="view">

        <Link to="/project-pleez" className='cursor-none'>
        <div className='bg-[url(/images/project-placeholders/pleez-cover.jpg)] bg-cover w-full aspect-square flex items-center justify-center rounded-lg'></div>
        </Link>

        <Link to="/project-superfiliate-ds" className='cursor-none'>
          <div className='bg-[url(/images/project-placeholders/superfiliate-cover.jpg)] bg-cover w-full aspect-square flex items-center justify-center rounded-lg'></div>        
        </Link>

        <Link to="/project-pleez" className='cursor-none'>
          <div className='bg-[url(/images/project-placeholders/SF-cover.jpg)] bg-cover w-full aspect-square flex items-center justify-center rounded-lg'></div>        
        </Link>

        <Link to="/project-pleez" className='cursor-none'>
          <div className='bg-[url(/images/project-placeholders/shipify-cover.jpg)] bg-cover w-full aspect-square flex items-center justify-center rounded-lg'></div>        
        </Link>

      </div>
      
     
       <div id="bottom" className='flex flex-col sm:flex-row w-full items-start justify-start pl-6 pr-6 pt-[50px] pb-[100px] gap-[20px] sm:pl-16 sm:pr-16 sm:pt-[150px] sm:pb-[100px] sm:gap-[100px]' data-cursor="top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    
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
            <h2 className='text-gray-700 text-xl font-medium'>rafaelfurlan.design@gmail.com</h2>
          </div>
    
      </div>
        
      </div>
    </>
  );
}

export default WorkPage;
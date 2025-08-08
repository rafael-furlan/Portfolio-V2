import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';

function WorkPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcula a transformação baseada no scroll - começa da esquerda e vai para esquerda
  const translateX = Math.max(-28, Math.min(0, 0 - (scrollY / 7)));

  return (
    <>
    <Helmet>
        <link rel="icon" href="public/images/favicon/favicon-fractal.svg" type="image/svg+xml" />
        <title>my portfolio website</title>
    </Helmet>

    <CustomCursor />
      <div className='w-full min-h-screen flex flex-col overflow-visible cursor-none bg-gray-50 overflow-hidden'>
      <TopBar/>
      
      <div id="main" className='flex flex-col w-full flex-1 gap-[50px] overflow-hidden pt-[200px] pb-0 pr-8 pl-8 sm:pl-16 sm:pr-16 sm:pb-16 ' data-cursor="scroll">
        <div>
            <p className='text-gray-800 font-sora font-regular text-lg max-w-[600px]'>
            Hey, I'm Rafa! I'm a digital product designer and frontend enthusiast.
            I have 150+ years of experience in design. Working across web and mobile design, user experience projects and design systems has shaped my belief in holistic design - where designers own the entire journey from strategy to implementation.
            </p>
        </div>
        <div className='whitespace-nowrap'>
          <div 
            className='flex'
            style={{ 
              transform: `translateX(${translateX}%)`,
              transition: 'transform 0.1s linear'
            }}
          >
            <h1 className='text-gray-800 font-sora text-[150px] font-medium tracking-tighter whitespace-nowrap'>Product Design Engineer</h1>
          </div>
        </div>
        
      </div>
      
     
      <div id="grid" className='grid gri-cols-1 pl-8 pr-8 pb-16 gap-4 sm:grid-cols-2 sm:pl-16 sm:pr-16 sm:pb-16 sm:gap-4' data-cursor="view">
        <div className='bg-[url(/images/project-placeholders/img-8.png)] w-full aspect-square flex items-center justify-center' ></div>
        <div className='bg-[url(public/images/project-placeholders/img-6.png)] w-full aspect-square flex items-center justify-center' ></div>
        <div className='bg-[url(public/images/project-placeholders/img-7.png)] w-full aspect-square flex items-center justify-center' ></div>
        <div className='bg-[url(/images/project-placeholders/img-5.png)] w-full aspect-square flex items-center justify-center' ></div>
      </div>
      
     
      <div  id="bottom" className='flex flex-row w-full flex items-center justify-start pl-16 pr-16 pt-16 pb-[150px] gap-[100px]' data-cursor="top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      
      
        <div className='flex flex-col gap-2 p-2'>
          <h3 className='text-gray-500 text-lg'>Based</h3>
          <h2 className='text-gray-700 text-xl font-medium'>Barcelona, Spain</h2>
        </div>
        <div className='flex flex-col gap-2 p-2'>
          <h3 className='text-gray-500 text-lg'>Company</h3>
          <h2 className='text-gray-700 text-xl font-medium'>Superfiliate Inc.</h2>
        </div>
        <div className='flex flex-col gap-2 p-2'>
          <h3 className='text-gray-500 text-lg'>Contact</h3>
          <h2 className='text-gray-700 text-xl font-medium'>rafaelfurlan@gmail.com</h2>
        </div>
      </div>
      
    </div>
    </>
  );
}

export default WorkPage;

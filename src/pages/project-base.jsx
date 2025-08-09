import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';
import { Link } from 'react-router-dom';
import AnimatedContent from '../components/animatedcontent.jsx'
import Marquee from "react-fast-marquee";

function ProjectBase() {

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
        <title>Project Base page</title>
    </Helmet>

    {!isTouchDevice && <CustomCursor />}

    <div className='w-full min-h-screen flex flex-col cursor-none bg-gray-50 scroll-smooth'>

        <TopBar/>

        <div id="project-heading" className='w-full flex flex-col cursor-none bg-gray-50 sm:pt-[200px] sm:pl-16 sm:pr-16 sm:pb-[120px] sm:gap-[80px]' data-cursor="scroll">
            <h6 className='text-[20px]'>Pleez App</h6>
            <h2 className='text-[56px] w-2/3'>Our biggest challenge at FreshDirect was reimagining the shopping cart experience.</h2>
        </div>

        <div id="img-1" className='w-full flex flex-col pl-16 pr-16 justify-center items-center cursor-none' data-cursor="scroll">
            <img class="aspect-video object-cover" src="/images/project-placeholders/img-small-ret.jpg" /> 
        </div>

        <div className='w-full flex flex-row sm:pt-[250px] sm:pl-16 sm:pr-16 sm:pb-[250px] cursor-none items-center' data-cursor="scroll">
            <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.3}
            >
                <p className='text-[36px] w-2/3'>Our biggest challenge at FreshDirect was reimagining the shopping cart experience.
                Our primary goal was to ensure that customers could receive their selected products quickly and efficiently, especially 
                those that needed to be delivered hot and fresh.</p>
            </AnimatedContent>
        </div>

        <div id="img-2" className='w-full flex flex-col pl-16 pr-16 justify-center items-center cursor-none' data-cursor="scroll">
            <img class="aspect-video object-cover" src="/images/project-placeholders/img-small-ret.jpg" /> 
        </div>

        <div className='w-full min-h-screen flex flex flex-row justify-end sm:pt-[250px] sm:pl-16 sm:pr-16 sm:pb-[250px] cursor-none items-center' data-cursor="scroll">
            <AnimatedContent className="flex w-2/3"
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.3}
            >
                <p className='text-[36px]'>Our biggest challenge at FreshDirect was reimagining the shopping cart experience.
                Our primary goal was to ensure that customers could receive their selected products quickly and efficiently, especially 
                those that needed to be delivered hot and fresh.</p>
            </AnimatedContent>
        </div>

        <div id="img-3" className='w-full flex flex-col pl-16 pr-16 justify-center items-center cursor-none' data-cursor="scroll">
            <img class="aspect-video object-cover" src="/images/project-placeholders/img-small-ret.jpg" /> 
        </div>
        
        <div className='w-full min-h-screen flex flex flex-row sm:pt-[250px] sm:pl-16 sm:pr-16 sm:pb-[100px] cursor-none items-center' data-cursor="scroll">
            <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0.3}
            >
                <p className='text-[36px] w-2/3'>Our biggest challenge at FreshDirect was reimagining the shopping cart experience.
                Our primary goal was to ensure that customers could receive their selected products quickly and efficiently, especially 
                those that needed to be delivered hot and fresh.</p>
            </AnimatedContent>
        </div>

        <div id="img-4" className='w-full flex flex-col pl-16 pr-16 justify-center cursor-none' data-cursor="scroll">
            <img class="aspect-video object-cover" src="/images/project-placeholders/img-small-ret.jpg" /> 
        </div>

        <div className='flex flex-row justify-center gap-16 pt-[250px] pb-[100px] items-baseline' data-cursor="scroll">
            <Marquee autoFill={true}>
              <div className='flex flex-row justify-center ml-6 mr-6'>
                  <h1 className='text-gray-800 font-sora text-[100px] sm:text-[100px] font-medium tracking-tighter'>+</h1>
              </div>
              <div className='flex flex-row justify-center ml-6 mr-6'>
                  <h1 className='text-gray-800 font-sora text-[100px] sm:text-[100px] font-medium tracking-tighter'>More</h1>
              </div>
              <div className='flex flex-row justify-center ml-6 mr-6'>
                  <h1 className='text-gray-800 font-sora text-[100px] sm:text-[100px] font-medium tracking-tighter'>projects</h1>
              </div>
            
            </Marquee>
        </div>

        <div className='grid gri-cols-1 pl-6 pr-6 gap-4 sm:grid-cols-3 sm:pb-[150px] sm:pl-16 sm:pr-16 sm:gap-4' data-cursor="view">

            <Link to="/project-base" className='cursor-none'>
            <div className='bg-[url(/images/project-placeholders/img-6.png)] w-full aspect-square flex items-center justify-center' ></div>
            </Link>

            <Link to="/project-base" className='cursor-none'>
            <div className='bg-[url(/images/project-placeholders/img-7.png)] w-full aspect-square flex items-center justify-center cursor-none' ></div>
            </Link>
            
            <Link to="/project-base" className='cursor-none'>
            <div className='bg-[url(/images/project-placeholders/img-5.png)] w-full aspect-square flex items-center justify-center cursor-none' ></div>
            </Link>
            
        </div>









    </div>
    </>
);

    








}

export default ProjectBase;


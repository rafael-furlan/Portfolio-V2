import React, { useState, useEffect } from 'react';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';
import { Link } from 'react-router-dom';
import AnimatedContent from '../components/animatedcontent.jsx'
import Marquee from "react-fast-marquee";

function ProjectPleez() {

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

    {!isTouchDevice && <CustomCursor />}

    <div className='w-full min-h-screen flex flex-col cursor-none bg-gray-50 scroll-smooth'>

        <TopBar/>

        <div id="project-heading" className='w-full flex flex-col cursor-none bg-gray-50 pt-44 pb-20 pl-6 pr-6 gap-[40px] sm:pt-44 sm:pl-12 sm:pr-12 sm:pb-20 sm:gap-6 cursor-none' data-cursor="scroll">
            <h6 className='text-[20px]'>Pleez App</h6>
            <h2 className='text-[36px] sm:text-[56px] sm:w-4/5'>Designed the Startup’s First MVP</h2>
        </div>
        <AnimatedContent
                distance={20}
                direction="vertical"
                reverse={false}
                duration={1.3}
                ease="power1.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1}
                threshold={0.0}
                delay={0.3}
            >
                <div id="img-1" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    <img className="hidden sm:block sm:aspect-video object-cover rounded-xl" src="/images/project-placeholders/pleez-img-1.jpg" /> 
                    <img className="block sm:hidden aspect-[4/5] object-cover rounded-xl" src="/images/project-placeholders/pleez-img-1.jpg" /> 
                </div>
            </AnimatedContent>

        

        <div className='w-full flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:h-screen sm:pt-[250px] sm:pl-12 sm:pr-12 sm:pb-[250px] cursor-none items-center' data-cursor="scroll">
            <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power2.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={0.8}
            >
                <p className='text-[24px] leading-[150%] sm:text-[36px] sm:w-2/3'>At Pleez app, the main goal was to simplify the ordering experience,
                 removing the dependence on human attendants for simple requests, 
                 so customers could place their orders quickly and restaurants could scale more efficiently.</p>
            </AnimatedContent>
        </div>

        <div id="img-2" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                <video autoPlay loop muted className='w-full sm:aspect-video object-cover rounded-xl'>
                    <source src="/images/project-placeholders/pleez-app-interaction.mp4" type="video/mp4" />
                </video>
                
        </div>

        <div className='w-full flex flex-row-reverse pt-[80px] pl-6 pr-6 pb-[80px] sm:h-screen sm:pt-[250px] sm:pl-12 sm:pr-12 sm:pb-[250px] cursor-none items-center' data-cursor="scroll">
            <AnimatedContent className="w-2/3"
                distance={50}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power2.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={0.8}
                

            >
                <p className='text-[24px] leading-[150%] sm:text-[36px] '>We designed a seamless flow that gave customers full control of 
                their purchase journey inside the restaurant — from browsing the menu and selecting products to completing the 
                payment, without depending on staff.</p>
            </AnimatedContent>
        </div>

        <div id="img-3" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                <img className="hidden sm:block sm:aspect-video object-cover rounded-xl" src="/images/project-placeholders/pleez-img-3.jpg" /> 
                <img className="block sm:hidden aspect-[4/5] object-cover rounded-xl" src="/images/project-placeholders/pleez-img-3.jpg" /> 
        </div>
        
        <div className='w-full flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:h-screen sm:pt-[250px] sm:pl-12 sm:pr-12 sm:pb-[250px] cursor-none items-center' data-cursor="scroll">
            <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power2.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={0.8}
            >
                <p className='text-[24px] leading-[150%] sm:text-[36px] sm:w-2/3'>Operators gained clear visibility into every stage of 
                the process, making it easier to track, prioritize, and complete requests in real time. This improved speed and accuracy,
                 allowing restaurants to provide efficient service while scaling operations.</p>
            </AnimatedContent>
        </div>

        <div id="img-4" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                <video autoPlay loop muted className='w-full sm:aspect-video object-cover rounded-xl'>
                    <source src="/images/project-placeholders/pleez-animation-fixed.mp4" type="video/mp4" />
                </video>
                
        </div>

        <div className='w-full flex flex-row-reverse pt-[80px] pl-6 pr-6 pb-[80px] sm:h-screen sm:pt-[250px] sm:pl-12 sm:pr-12 sm:pb-[250px] cursor-none items-center' data-cursor="scroll">
            <AnimatedContent className="w-2/3"
                distance={50}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power2.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={0.8}
                

            >
                <p className='text-[24px] leading-[150%] sm:text-[36px] '>Branding was a core value for our target restaurants, 
                    so customization was built in from the start. Both the app and platform adapted to each restaurant's 
                    identity, making the experience feel unique and boosting adoption.</p>
            </AnimatedContent>
        </div>

        <div className='flex flex-row justify-center gap-16 pt-[160px] pb-[80px] sm:pt-[250px] sm:pb-[100px] items-baseline' data-cursor="scroll">
            <Marquee autoFill={true}>
              <div className='flex flex-row justify-center ml-3 mr-3 sm:ml-4 sm:mr-4'>
                  <h1 className='text-gray-800 font-sora text-[60px] sm:text-[56px] font-medium tracking-tighter'>+</h1>
              </div>
              <div className='flex flex-row justify-center ml-3 mr-3 sm:ml-4 sm:mr-4'>
                  <h1 className='text-gray-800 font-sora text-[60px] sm:text-[56px] font-medium tracking-tighter'>More</h1>
              </div>
              <div className='flex flex-row justify-center ml-3 mr-3 sm:ml-4 sm:mr-4'>
                  <h1 className='text-gray-800 font-sora text-[60px] sm:text-[56px] font-medium tracking-tighter'>projects</h1>
              </div>
            
            </Marquee>
        </div>

        <div className='grid gri-cols-1 pl-6 pr-6 gap-4 sm:grid-cols-3 pb-[80px] sm:pb-[150px] sm:pl-12 sm:pr-12 sm:gap-4' data-cursor="view">

            <Link to="/project-base" className='cursor-none'>
            <div className='bg-[url(/images/project-placeholders/img-6.png)] w-full aspect-square flex items-center justify-center bg-cover rounded-xl cursor-none' ></div>
            </Link>

            <Link to="/project-base" className='cursor-none'>
            <div className='bg-[url(/images/project-placeholders/img-7.png)] w-full aspect-square flex items-center justify-center bg-cover rounded-xl cursor-none' ></div>
            </Link>
            
            <Link to="/project-base" className='cursor-none'>
            <div className='bg-[url(/images/project-placeholders/img-5.png)] w-full aspect-square flex items-center justify-center bg-cover rounded-xl cursor-none' ></div>
            </Link>
            
        </div>

    </div>
    </>
);
}

export default ProjectPleez;
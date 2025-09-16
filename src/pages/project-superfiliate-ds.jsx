import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';
import { Link } from 'react-router-dom';
import AnimatedContent from '../components/animatedcontent.jsx'
import Marquee from "react-fast-marquee";

function ProjectSuperfiliate() {

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
        <title>Superfiliate Design System</title>
    </Helmet>

    {!isTouchDevice && <CustomCursor />}

    <div className='w-full min-h-screen flex flex-col cursor-none bg-gray-50 scroll-smooth'>

        <TopBar/>

        <div id="project-heading" className='w-full flex flex-col cursor-none bg-gray-50 pt-44 pb-20 pl-6 pr-6 gap-[40px] sm:pt-44 sm:pl-12 sm:pr-12 sm:pb-20 sm:gap-6 cursor-none' data-cursor="scroll">
            <h6 className='text-[20px]'>Superfiliate Design System</h6>
            <h2 className='text-[36px] sm:text-[56px] sm:w-4/5'>From Tokens to Dark Mode — How I Led First Design System Initiatives</h2>
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
                    <img className="hidden sm:block sm:aspect-video object-cover rounded-xl" src="/images/project-placeholders/superfiliate-img-1.jpg" /> 
                    <img className="block sm:hidden aspect-[4/5] object-cover rounded-xl" src="/images/project-placeholders/superfiliate-img-1.jpg" /> 
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
                <p className='text-[24px] leading-[150%] sm:text-[36px] sm:w-2/3'>At Superfiliate, I led the initiative to build the company’s design 
                system from the ground up. My work spanned from defining the initial token structure to establishing component standards and extending 
                the system to support dark mode. This foundation not only improved design consistency but also created a scalable framework for 
                future design work.</p>
            </AnimatedContent>
        </div>

        <div id="img-2" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                <video autoPlay loop muted className='w-full sm:aspect-video object-cover rounded-xl'>
                    <source src="public/images/project-placeholders/superfiliate-img-2.2.mp4" type="video/mp4" />
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
                <p className='text-[24px] leading-[150%] sm:text-[36px] '>Building on the core style foundation we had at the start of
                     the company, I defined a semantic structure that allowed the design team to scale the product with consistency. 
                     I introduced a global token system covering color and spacing, and from there established a semantic layer 
                     with surface, typography, border, and icon tokens. For spacing, I separated tokens into gap and padding 
                     to ensure clarity and reusability.</p>
            </AnimatedContent>
        </div>

        <div id="img-3" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                <video autoPlay loop muted className='w-full sm:aspect-video object-cover rounded-xl'>
                    <source src="public/images/project-placeholders/superfiliate-dark-light.mp4" type="video/mp4" />
                </video>
                
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
                <p className='text-[24px] leading-[150%] sm:text-[36px] sm:w-2/3'>Using Figma’s variable theming system, I created a framework
                 that made dark mode implementation almost automatic. After aligning with the engineering team, we introduced a set of specific 
                 tokens for overlay components, which had been overlooked in the UI and required special attention.</p>
            </AnimatedContent>
        </div>

        <div id="img-4" className=' hidden w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                <video autoPlay loop muted className='w-full sm:aspect-video object-cover rounded-xl'>
                    <source src="/images/project-placeholders/pleez-animation-fixed.mp4" type="video/mp4" />
                </video>
                
        </div>

        <div className=' hidden w-full flex flex-row-reverse pt-[80px] pl-6 pr-6 pb-[80px] sm:h-screen sm:pt-[250px] sm:pl-12 sm:pr-12 sm:pb-[250px] cursor-none items-center' data-cursor="scroll">
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
                <p className='hidden text-[24px] leading-[150%] sm:text-[36px] '>Since video and images are key in the creator ecosystem, 
                    I created, designed, and documented the media card component for the new social listing feature. The component 
                    was later scaled and updated to support multiple other features across the app.</p>
            </AnimatedContent>
        </div>

        <div id="img-5" className=' w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    <img className="hidden sm:block sm:aspect-video object-cover rounded-xl" src="public/images/project-placeholders/superfiliate-final-img.jpg" /> 
                    <img className="block sm:hidden aspect-[4/5] object-cover rounded-xl" src="public/images/project-placeholders/superfiliate-final-img.jpg" /> 
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
                <p className='text-[24px] leading-[150%] sm:text-[36px] sm:w-2/3'>With over 500 active brands using our app, 
                the design team had started creating different page layouts while engineering continued relying on the patterns
                 defined early in the company. To bridge this gap, I audited the entire product, mapped all existing layouts, 
                 and consolidated them into a set of core layouts. These were then documented as design standards, giving the 
                 whole team a clear starting point when building new features.</p>
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

export default ProjectSuperfiliate;
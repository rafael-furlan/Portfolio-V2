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

        <div id="project-heading" className='w-full flex flex-col cursor-none bg-gray-50 pt-44 pb-20 pl-6 pr-6 gap-[40px] sm:pt-44 sm:pl-20 sm:pr-20 sm:pb-20 sm:gap-6 cursor-none' data-cursor="scroll">
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

            <div className='w-full flex flex-col pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-9 cursor-none' data-cursor="scroll">
                
                <h2 className='text-[36px]'>The Challenge</h2>
                <p className='text-[24px] leading-[150%] sm:w-2/3'>
                Restaurants were struggling with scaling their service while maintaining speed and accuracy. Simple requests like ordering drinks or small items still required staff involvement, creating bottlenecks during busy hours.
                <br></br><br></br>
                For customers, this meant delays and friction in their dining experience. For operators, it meant reduced efficiency and limited ability to scale without hiring more staff.
                <br></br><br></br>
                The challenge was clear: how do we create a system that allows customers to order independently while giving restaurants full visibility and control?
                </p>

            </div>

        

        <div id="img-2" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                <video autoPlay loop muted className='w-full sm:aspect-video object-cover rounded-xl'>
                    <source src="/images/project-placeholders/pleez-app-interaction.mp4" type="video/mp4" />
                </video>
                
        </div>

         <div className='w-full flex flex-col pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-9 cursor-none' data-cursor="scroll">
            <h2 className='text-[36px]'>Designing the Flow</h2>
                <p className='text-[24px] leading-[150%] sm:w-2/3'>
                We designed a seamless ordering journey that put customers in control:<br></br><br></br>
                • Browse the restaurant’s menu<br></br>
                • Select products<br></br>
                • Place orders and complete payments<br></br><br></br>
                All without needing to depend on staff. This reduced waiting times and gave customers a sense of autonomy inside the restaurant.The challenge was clear: how do we create a system that allows customers to order independently while giving restaurants full visibility and control?
                </p>

         </div>

        <div id="img-3" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                <img className="hidden sm:block sm:aspect-video object-cover rounded-xl" src="/images/project-placeholders/pleez-img-3.jpg" /> 
                <img className="block sm:hidden aspect-[4/5] object-cover rounded-xl" src="/images/project-placeholders/pleez-img-3.jpg" /> 
        </div>
        
        <div className='w-full flex flex-col pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-9 cursor-none' data-cursor="scroll">
            <h2 className='text-[36px]'>Empowering Operators</h2>
                <p className='text-[24px] leading-[150%] sm:w-2/3'>
                On the operator side, we built a real-time view into every stage of the order journey. Staff could:<br></br><br></br>
                • Track incoming requests<br></br>
                • Prioritize them efficiently<br></br>
                • Complete them with higher speed and accuracy<br></br><br></br>
                This visibility turned the ordering process into a scalable workflow, allowing restaurants to handle more customers without extra overhead.
                </p>

         </div>

        <div id="img-4" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                <video autoPlay loop muted className='w-full sm:aspect-video object-cover rounded-xl'>
                    <source src="/images/project-placeholders/pleez-animation-fixed.mp4" type="video/mp4" />
                </video>
                
        </div>

        <div className='w-full flex flex-col pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-9 cursor-none' data-cursor="scroll">
            <h2 className='text-[36px]'>Customization as a Core Feature</h2>
                <p className='text-[24px] leading-[150%] sm:w-2/3'>
                Branding was central for our target restaurants. To address this, we designed the MVP to be fully customizable. Both the app and platform could adapt to each restaurant’s identity — from colors and logos to the overall look and feel.<br></br><br></br>
                This not only boosted adoption but also made the experience feel authentic to each brand, a critical factor in the hospitality industry.
                </p>

         </div>

         <div id="img-1" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    <img className="hidden sm:block sm:aspect-video object-cover rounded-xl" src="/images/project-placeholders/pleez-img-1.jpg" /> 
                    <img className="block sm:hidden aspect-[4/5] object-cover rounded-xl" src="/images/project-placeholders/pleez-img-1.jpg" /> 
                </div>
            

            <div className='w-full flex flex-col pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-9 cursor-none' data-cursor="scroll">
                
                <h2 className='text-[36px]'>The Impact</h2>
                <p className='text-[24px] leading-[150%] sm:w-2/3'>
                Built and launched Pleez’s first MVP, enabling real-world validation of the core value proposition.
                <br></br><br></br>
                Delivered a frictionless customer experience, reducing wait times and dependency on staff.
                <br></br><br></br>
                Empowered operators with real-time visibility and prioritization, improving efficiency and accuracy.
                <br></br><br></br>

                Created a customizable system, strengthening brand adoption and differentiation in the market.The challenge was clear: how do we create a system that allows customers to order independently while giving restaurants full visibility and control?
                </p>

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

        <div className='hidden grid gri-cols-1 pl-6 pr-6 gap-4 sm:grid-cols-3 pb-[80px] sm:pb-[150px] sm:pl-12 sm:pr-12 sm:gap-4' data-cursor="view">

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
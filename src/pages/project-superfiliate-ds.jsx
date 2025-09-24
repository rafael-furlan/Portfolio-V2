import React, { useState, useEffect } from 'react';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';
import AnimatedContent from '../components/animatedcontent.jsx';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';


function ProjectSuperfiliate() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [lottieData1, setLottieData1] = useState(null);
    const [lottieData2, setLottieData2] = useState(null);
    const [lottieData3, setLottieData3] = useState(null);

  useEffect(() => {
    
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    
    // Carregar múltiplas animações Lottie
    const loadLottieAnimations = async () => {
      try {
        // Animação 1
        const response1 = await fetch('/images/project-placeholders/superfiliate/sf-ds-bw-img.json');
        const data1 = await response1.json();
        setLottieData1(data1);

        // Animação 2 
        const response2 = await fetch('/images/project-placeholders/superfiliate/Scene (1).json');
        const data2 = await response2.json();
        setLottieData2(data2);

        // Animação 3 (exemplo - substitua pelo seu arquivo)
        const response3 = await fetch('/images/project-placeholders/superfiliate/media-card.json');
        const data3 = await response3.json();
        setLottieData3(data3);

      } catch (error) {
        console.error('Error loading Lottie animations:', error);
      }
    };

    loadLottieAnimations();
    
    }, []);

    

return (
    <>
    {!isTouchDevice && <CustomCursor />}

    <div className='w-full min-h-screen flex flex-col cursor-none bg-gray-50 scroll-smooth'>

        <TopBar/>

        <div id="project-heading" className='w-full flex flex-col cursor-none bg-gray-50 pt-44 pb-20 pl-6 pr-6 gap-[40px] sm:pt-44 sm:pl-20 sm:pr-20 sm:pb-20 sm:gap-6 cursor-none' data-cursor="scroll">
            <h6 className='text-[20px]'>Superfiliate Design System</h6>
            <h2 className='text-[36px] sm:text-[56px]'>Building the Superfiliate Design System</h2>
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
                    <img className="hidden sm:block sm:aspect-video object-cover rounded-xl" src="/images/project-placeholders/superfiliate/sf-ds-img-1.jpg" /> 
                    <img className="block sm:hidden aspect-[4/5] object-cover rounded-xl" src="/images/project-placeholders/superfiliate/sf-ds-img-1.jpg" /> 
                </div>
            </AnimatedContent>

        

        <div className='w-full flex flex-col pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-9 cursor-none' data-cursor="scroll">
            <h2 className='text-[36px]'>The Challenge</h2>
            <p className='text-[24px] leading-[150%] sm:w-2/3'>
            When I joined Superfiliate, the company had no design system in place. Early styles existed, but there was no scalable framework to ensure consistency as the product grew.<br></br><br></br>
            With over 500 active brands using the app, designers were creating different page layouts while engineers continued relying on outdated patterns from the company’s early days. This created friction, inconsistencies, and a lack of clarity across the product experience.
            </p>
        </div>


        <div id="img-2" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                <video autoPlay loop muted className='w-full sm:aspect-video object-cover rounded-xl'>
                    <source src="/images/project-placeholders/superfiliate-img-2.2.mp4" type="video/mp4" />
                </video>
                
        </div>

        <div className='w-full flex flex-col pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-9 cursor-none' data-cursor="scroll">
            <h2 className='text-[36px]'>Defining the Foundation</h2>
            <p className='text-[24px] leading-[150%] sm:w-2/3'>I set out to build the design system from the ground up, starting with a token-based foundation.<br></br><br></br>
                • Introduced a global token system covering color and spacing.<br></br>
                • Added a semantic layer with surface, typography, border, and icon tokens.<br></br>
                • Split spacing into gap and padding tokens for clarity and reusability.<br></br><br></br>
                This structure created the flexibility needed to support multiple features while maintaining a consistent design language.
            </p>
        </div>

        <div id="img-3" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                {lottieData1 ? (
                            <div className='w-full sm:aspect-video rounded-xl overflow-hidden'>
                                <Lottie 
                                    animationData={lottieData1}
                                    loop={true}
                                    autoplay={true}
                                    className='w-full h-full'
                                />
                            </div>
                        ) : (
                    <div className='w-full sm:aspect-video bg-gray-200 rounded-xl flex items-center justify-center'>
                        <p className='text-gray-500'>Loading animation...</p>
                    </div>
                )}
                
        </div>
        
        <div className='w-full flex flex-col pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-9 cursor-none' data-cursor="scroll">
            <h2 className='text-[36px]'>Designing for Dark Mode</h2>
            <p className='text-[24px] leading-[150%] sm:w-2/3'>With theming becoming a product priority, I leveraged Figma’s variable system to make dark mode implementation almost automatic.<br></br><br></br>

                Working closely with engineering, I introduced dedicated tokens for overlay components, a previously overlooked area that required extra attention for accessibility and usability.
            </p>
        </div>

        <div id="img-4" className=' hidden w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                {lottieData2 ? (
                    <div className='w-full sm:aspect-video rounded-xl overflow-hidden'>
                        <Lottie 
                            animationData={lottieData2}
                            loop={true}
                            autoplay={true}
                            className='w-full h-full'
                        />
                    </div>
                ) : (
                    <div className='w-full sm:aspect-video bg-gray-200 rounded-xl flex items-center justify-center'>
                        <p className='text-gray-500'>Loading animation 2...</p>
                    </div>
                )}
                
        </div>

        <div className='hidden w-full flex flex-col pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-9 cursor-none' data-cursor="scroll">
            <h2 className='text-[36px]'>Scaling Layouts Across the Platform</h2>
            <p className='text-[24px] leading-[150%] sm:w-2/3'>To address the growing divide between design and engineering, I audited the entire product and mapped all existing layouts. From this, I consolidated them into a set of core layouts that were then documented as standards.
                <br></br><br></br>
                This gave both teams a clear single source of truth, reducing inconsistencies and speeding up new feature development.
            </p>
        </div>

        <div id="img-5" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
        {lottieData3 ? (
                            <div className='w-full sm:aspect-video rounded-xl overflow-hidden'>
                                <Lottie 
                                    animationData={lottieData3}
                                    loop={true}
                                    autoplay={true}
                                    className='w-full h-full'
                                />
                            </div>
                        ) : (
                    <div className='w-full sm:aspect-video bg-gray-200 rounded-xl flex items-center justify-center'>
                        <p className='text-gray-500'>Loading animation...</p>
                    </div>
                )}                </div>

         <div className='w-full flex flex-col pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-9 cursor-none' data-cursor="scroll">
            <h2 className='text-[36px]'>Components Built for Scale</h2>
            <p className='text-[24px] leading-[150%] sm:w-2/3'>In the creator ecosystem, video and images play a central role. To support this, I created and documented the media card component for the new social listing feature.
                <br></br><br></br>
                The component later scaled across multiple other features, proving the value of building with flexibility and reusability in mind.
            </p>
        </div>

        <div id="img-6" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                {lottieData2 ? (
                     <div className='w-full sm:aspect-video rounded-xl overflow-hidden'>
                         <Lottie 
                                            animationData={lottieData2}
                                            loop={true}
                                            autoplay={true}
                                            className='w-full h-full'
                                        />
                                    </div>
                                ) : (
                            <div className='w-full sm:aspect-video bg-gray-200 rounded-xl flex items-center justify-center'>
                                <p className='text-gray-500'>Loading animation...</p>
                            </div>
                        )}
                
                </div>

            <div className='w-full flex flex-col pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-9 cursor-none' data-cursor="scroll">
            <h2 className='text-[36px]'>The Impact</h2>
            <p className='text-[24px] leading-[150%] sm:w-2/3'>
            Established Superfiliate’s first scalable design system, enabling the team to design with speed and consistency.
            <br></br><br></br>
            Created a dark mode-ready framework, ensuring theming could be implemented without friction.
            <br></br><br></br>
            Consolidated 500+ brand experiences into a unified layout system, aligning design and engineering.
            <br></br><br></br>

            Built reusable components that powered new features and scaled across the product.
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

        <div className='hidden grid grid-cols-1 pl-6 pr-6 gap-4 sm:grid-cols-3 pb-[80px] sm:pb-[150px] sm:pl-12 sm:pr-12 sm:gap-4' data-cursor="view">

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
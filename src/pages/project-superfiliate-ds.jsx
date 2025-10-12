import React, { useState, useEffect } from 'react';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';
import AnimatedContent from '../components/animatedcontent.jsx';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Footer from '../components/footer.jsx';

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
                const response1 = await fetch('/images/final-imgs/Superfiliate DS/light-to-dark-new.json');
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

                <div id="project-heading" className='w-full flex flex-col cursor-none bg-gray-50 pt-44 pb-20 pl-6 pr-6 gap-[80px] sm:pt-56 sm:pl-20 sm:pr-20 sm:pb-[80px] sm:gap-[80px]' data-cursor="scroll">
                    <div className='flex flex-col w-full gap-[40px]'> 
                        <h6 className='text-gray-900 text-[18px] uppercase'>SUPERFILIATE</h6>
                        <h2 className='text-gray-900 text-[30px] sm:text-[48px] max-w-2/3'>Building the Superfiliate<br></br>Design System</h2>
                    </div>
                    <div className='w-full flex flex-row flex-start gap-[100px]'>
                        <div className='flex flex-col gap-2 items-start'>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>creators econ</h2>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>B2B</h2>
                        </div>
                        
                        <div className='flex flex-col gap-2 items-start'>
                            <h3 className='text-gray-500 text-xs'>WORK</h3>     
                            <h2 className='text-gray-900 text-base font-medium uppercase'>design system</h2>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>UI DESIGN</h2>
                        </div>
                        
                        <div className='flex flex-col gap-2 items-start'>
                            <h3 className='text-gray-500 text-xs'>DELIVERABLES</h3>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>component library</h2>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>tokens table</h2>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>figma docs</h2>
                        </div>
                    </div>
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
                        <img className="hidden sm:block sm:aspect-video object-cover" src="/images/final-imgs/Superfiliate DS/first-cover.jpg" /> 
                        <img className="block sm:hidden aspect-[4/5] object-cover" src="/images/final-imgs/Superfiliate DS/first-cover.jpg" /> 
                    </div>
                </AnimatedContent>

                <div className='w-full max-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>The Challenge</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        When I joined Superfiliate, the company had no design system in place. Early styles existed, but there was no scalable framework to ensure consistency as the product grew.
                        <br></br>
                        With over 500 active brands using the app, designers were creating different page layouts while engineers continued relying on outdated patterns from the company's early days. This created friction, inconsistencies, and a lack of clarity across the product experience.
                    </p>
                </div>

                {/* Serie de imagens 1 */}
                <div className='w-full flex flex-col pl-6 pr-6 gap-[24px] sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    {/* Double image */}
                    <div className='flex flex-row gap-[24px]'>
                        <div className='aspect-square max-w-1/4'> 
                            <img className="object-fill" src="/images/final-imgs/Superfiliate DS/tokens-1.jpg" alt="Viplan project thumbnail" />
                        </div>
                        <div className='max-w-3/4 bg-sky-500'> 
                            <img className="block object-cover h-[100%]" src="/images/final-imgs/Superfiliate DS/tokens-2.jpg" alt="Viplan project thumbnail" />
                        </div>
                    </div>

                    {/* Single image */}
                    <div className='w-full bg-cover aspect-5/2 bg-[url(/images/final-imgs/Superfiliate%20DS/tokens-3.jpg)]'>    
                    </div>

                    {/* Triple image */}
                    <div className='flex flex-row gap-[24px]'>
                        <div className='aspect-square max-w-1/3'> 
                            <img className="object-fill" src="/images/final-imgs/Superfiliate DS/tokens-4.jpg" alt="Viplan project thumbnail" />
                        </div>
                        <div className='aspect-square max-w-1/3'> 
                            <img className="object-fill" src="/images/final-imgs/Superfiliate DS/tokens-5.jpg" alt="Viplan project thumbnail" />
                        </div>
                        <div className='aspect-square max-w-1/3'> 
                            <img className="object-fill" src="/images/final-imgs/Superfiliate DS/tokens-6.jpg" alt="Viplan project thumbnail" />
                        </div>
                    </div>
                </div>

                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>Defining the Foundation</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        I set out to build the design system from the ground up, starting with a token-based foundation.
                        <br></br>
                        Introduced a global token system covering color and spacing.
                        <br></br>
                        Added a semantic layer with surface, typography, border, and icon tokens.
                        <br></br>
                        Split spacing into gap and padding tokens for clarity and reusability.
                        <br></br>
                        This structure created the flexibility needed to support multiple features while maintaining a consistent design language.
                    </p>
                </div>

                <div id="img-3" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    {lottieData1 ? (
                        <div className='w-full'>
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
                
                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>Designing for Dark Mode</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        With theming becoming a product priority, I leveraged Figma's variable system to make dark mode implementation almost automatic.
                        <br></br>
                        Working closely with engineering, I introduced dedicated tokens for overlay components, a previously overlooked area that required extra attention for accessibility and usability.                
                    </p>
                </div>

               {/* Serie de imagens 2 */}
               <div className='w-full flex flex-col pl-6 pr-6 gap-[24px] sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    
                    {/* Double image */}
                    <div className='flex flex-row gap-[24px] w-full h-auto'>
                        <div className='w-1/2 bg-sky-500 aspect-4/5 bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/comp-1.jpg)]'> 
                        </div>
                        <div className='w-1/2 bg-sky-500 aspect-4/5 bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/comp-2.jpg)]'> 
                        </div>
                    </div>

                    {/* Double image 2 */}
                    <div className='flex flex-row gap-[24px] w-full h-[660px]'>
                        <div className='w-1/3 bg-sky-500 bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/comp-3.jpg)]'> 
                        </div>
                        <div className='w-2/3 bg-sky-500 bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/comp-4.jpg)]'> 
                        </div>
                    </div>

                    {/* Single image */}
                    <div className='w-full bg-cover aspect-video bg-[url(/images/final-imgs/Superfiliate%20DS/comp-5.jpg)]'>    
                    </div>
                </div>

                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>Components Built for Scale</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        In the creator ecosystem, video and images play a central role. To support this, I created and documented the media card component for the new social listing feature.
                        <br></br>
                        The component later scaled across multiple other features, proving the value of building with flexibility and reusability in mind.
                    </p>
                </div>

                {/* Serie de imagens 3 */}
               <div className='w-full flex flex-col pl-6 pr-6 gap-[24px] sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    {/* Double image 2 */}
                    <div className='flex flex-row gap-[24px] w-full h-[660px]'>
                        <div className='w-2/3 bg-sky-500 bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/finale-1.jpg)]'> 
                        </div>
                        <div className='w-1/3 bg-sky-500 bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/finale-2.jpg)]'> 
                        </div>
                    </div>
                    
                    {/* Double image */}
                    <div className='flex flex-row gap-[24px] w-full h-auto'>
                        <div className='w-1/2 bg-sky-500 aspect-square bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/finale-3.jpg)]'> 
                        </div>
                        <div className='w-1/2 bg-sky-500 aspect-square bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/finale-4.jpg)]'> 
                        </div>
                    </div>

                    

                </div>

                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>The Impact</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        Established Superfiliate's first scalable design system, enabling the team to design with speed and consistency.
                        <br></br><br></br>
                        Created a dark mode-ready framework, ensuring theming could be implemented without friction.
                        <br></br><br></br>
                        Consolidated 500+ brand experiences into a unified layout system, aligning design and engineering.
                        <br></br>
                        Built reusable components that powered new features and scaled across the product.
                    </p>
                </div>

                <div className='flex flex-row justify-center gap-16 pb-[80px] sm:pb-[100px] items-baseline' data-cursor="scroll">
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

                <div className='grid grid-cols-1 pl-6 pr-6 gap-4 sm:grid-cols-3 pb-[80px] sm:pb-[150px] sm:pl-12 sm:pr-12 sm:gap-4' data-cursor="view">
                    <Link to="/project-pleez" className='cursor-none'>
                        <div className="bg-[url(/images/final-imgs/pleez/pleez-thumb-main.jpg)] w-full aspect-square flex items-center justify-center bg-cover cursor-none"></div>
                    </Link>

                    <Link to="/project-viplan" className='cursor-none'>
                        <div className='bg-[url(/images/final-imgs/viplan/viplan-thumb-main.jpg)] w-full aspect-square flex items-center justify-center bg-cover cursor-none'></div>
                    </Link>
                    
                    <Link to="/" className='cursor-none'>
                        <div className='bg-[url(/images/final-imgs/Sf-tiktokshop/tts-thumb-main.jpg)] w-full aspect-square flex items-center justify-center bg-cover cursor-none'></div>
                    </Link>
                </div>

                <Footer/>
            </div>
        </>
    );
}

export default ProjectSuperfiliate;
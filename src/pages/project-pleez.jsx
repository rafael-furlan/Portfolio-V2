import React, { useState, useEffect } from 'react';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';
import AnimatedContent from '../components/animatedcontent.jsx';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Footer from '../components/footer.jsx'


function ProjectPleez() {

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
        const response1 = await fetch('/images/final-imgs/pleez/customer-ui.json');
        const data1 = await response1.json();
        setLottieData1(data1);

        const response2 = await fetch('/images/final-imgs/pleez/customization-lean.json');
        const data2 = await response2.json();
        setLottieData2(data2);


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
                        <h6 className='text-gray-900 text-[18px] uppercase'>pleez app</h6>
                        <h2 className='text-gray-900 text-[30px] sm:text-[48px] max-w-2/3'>Designed & Launched MVP for Market Validation</h2>
                    </div>
                    <div className='w-full flex flex-row flex-start gap-[100px] uppercase'>
                        <div className='flex flex-col gap-2 items-start'>
                            <h2 className='text-gray-900 text-base font-medium'>food-tech</h2>
                            <h2 className='text-gray-900 text-base font-medium'>B2b</h2>
                            <h2 className='text-gray-900 text-base font-medium'>B2C</h2>
                        </div>
                        
                        <div className='flex flex-col gap-2 items-start uppercase'>
                            <h3 className='text-gray-500 text-xs'>WORK</h3>
                            <h2 className='text-gray-900 text-base font-medium'>PRODUCT DESIGN</h2>
                            <h2 className='text-gray-900 text-base font-medium'>UX DESIGN</h2>
                            <h2 className='text-gray-900 text-base font-medium'>UI DESIGN</h2>
                        </div>
                        
                        <div className='flex flex-col gap-2 items-start uppercase'>
                            <h3 className='text-gray-500 text-xs'>DELIVERABLES</h3>
                            <h2 className='text-gray-900 text-base font-medium'>MOBILE APP</h2>
                            <h2 className='text-gray-900 text-base font-medium'>WEB APP</h2>
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
                    <img className="hidden sm:block sm:aspect-video object-cover" src="/images/final-imgs/pleez/pleez-cover.jpg" /> 
                    <img className="block sm:hidden aspect-[4/5] object-cover" src="/images/final-imgs/pleez/pleez-cover.jpg" /> 
                </div>
            </AnimatedContent>

            <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>The Chalenge</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                    Restaurants were struggling with scaling their service while maintaining speed and accuracy. Simple requests like ordering drinks or small items still required staff involvement, creating bottlenecks during busy hours.
                    <br></br><br></br>
                    For customers, this meant delays and friction in their dining experience. For operators, it meant reduced efficiency and limited ability to scale without hiring more staff.
                    <br></br><br></br>
                    The challenge was clear: how do we create a system that allows customers to order independently while giving restaurants full visibility and control?
                    </p>
                </div>

        

        <div id="img-2" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                
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
            <h2 className='w-1/2 text-gray-900 text-[30px]'>Customer Flow
            </h2>
            <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                We designed a seamless ordering journey that put customers in control:
                <br></br><br></br>
                Browse the restaurant’s menu
                Select products
                Place orders and complete payments
                <br></br><br></br>
                All without needing to depend on staff. This reduced waiting times and gave customers a sense of autonomy inside the restaurant.
            </p>
        </div>

        {/* Serie de imagens 1 */}
        <div className='w-full flex flex-col pl-6 pr-6 gap-[24px] sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
            {/* Single image */}
            <div className='aspect-video'> 
                <img className="aspect-video block object-cover" src="/images/final-imgs/pleez/operators-1.jpg" alt="Viplan project thumbnail" />
            </div>
                    
            {/* Double image */}
            <div className='flex flex-row gap-[24px]'>
                <div className='aspect-square max-w-1/2'> 
                    <img className="object-cover" src="/images/final-imgs/pleez/operators-2.jpg" alt="Viplan project thumbnail" />
                </div>
                <div className='aspect-square max-w-1/2'> 
                    <img className="block object-cover" src="/images/final-imgs/pleez/operators-3.jpg" alt="Viplan project thumbnail" />
                </div>
            </div>
        </div>

        
        <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>Empowering Operators</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                    On the operator side, we built a real-time view into every stage of the order journey. Staff could:<br></br><br></br>
                    • Track incoming requests<br></br>
                    • Prioritize them efficiently<br></br>
                    • Complete them with higher speed and accuracy<br></br><br></br>
                    This visibility turned the ordering process into a scalable workflow, allowing restaurants to handle more customers without extra overhead.                    </p>
                </div>

        <div id="img-4" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
        {lottieData2 ? (
                            <div className='w-full'>
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

        <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>Customization as a Core Feature</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                    Branding was central for our target restaurants. To address this, we designed the MVP to be fully customizable. Both the app and platform could adapt to each restaurant’s identity — from colors and logos to the overall look and feel.
                    This not only boosted adoption but also made the experience feel authentic to each brand, a critical factor in the hospitality industry.
                    </p>
                </div>

         <div id="img-1" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    <img className="hidden sm:block sm:aspect-video object-cover " src="/images/final-imgs/pleez/pleez-cover.jpg" /> 
                    <img className="block sm:hidden aspect-[4/5] object-cover " src="/images/final-imgs/pleez/pleez-cover.jpg" /> 
                </div>
            

                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>The Impact</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                    Built and launched Pleez’s first MVP, enabling real-world validation of the core value proposition.
                    <br></br><br></br>
                    Delivered a frictionless customer experience, reducing wait times and dependency on staff.
                    <br></br><br></br>
                    Empowered operators with real-time visibility and prioritization, improving efficiency and accuracy.
                    <br></br><br></br>
                    Created a customizable system, strengthening brand adoption and differentiation in the market.
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

        <div className='grid gri-cols-1 pl-6 pr-6 gap-4 sm:grid-cols-3 pb-[80px] sm:pb-[150px] sm:pl-12 sm:pr-12 sm:gap-4' data-cursor="view">

        <Link to="/" className='cursor-none'>
                        <div className='bg-[url(/images/final-imgs/Sf-tiktokshop/tts-thumb-main.jpg)] w-full aspect-square flex items-center justify-center bg-cover cursor-none'></div>
                    </Link>

        <Link to="/project-viplan" className='cursor-none'>
                        <div className='bg-[url(/images/final-imgs/viplan/viplan-thumb-main.jpg)] w-full aspect-square flex items-center justify-center bg-cover cursor-none'></div>
                    </Link>

            
                    <Link to="/project-superfiliate-ds" className='cursor-none'>
                        <div className="bg-[url(/images/final-imgs/Superfiliate%20DS/thumb-ds-sf.jpg)] w-full aspect-square flex items-center justify-center bg-cover cursor-none"></div>
                    </Link>

            
        </div>

        <Footer />

    </div>
    </>
);
}

export default ProjectPleez;
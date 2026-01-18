import React, { useState, useEffect } from 'react';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';
import { Link } from 'react-router-dom';
import AnimatedContent from '../components/animatedcontent.jsx';
import Marquee from "react-fast-marquee";
import Lottie from 'lottie-react';
import Footer from '../components/footer.jsx';

function ProjectViplan() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [lottieData1, setLottieData1] = useState(null);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        
        // Load Lottie animation
        const loadLottieAnimation = async () => {
            try {
                const response = await fetch('/images/final-imgs/viplan/image-1-background.json');
                const data = await response.json();
                setLottieData1(data);
            } catch (error) {
                console.error('Error loading Lottie animation:', error);
            }
        };

        loadLottieAnimation();
    }, []);

    return (
        <>
            {!isTouchDevice && <CustomCursor />}

            <div className='w-full min-h-screen flex flex-col cursor-none bg-gray-50 scroll-smooth'>
                <TopBar/>

                <div id="project-heading" className='w-full flex flex-col cursor-none bg-gray-50 pt-44 pb-20 pl-6 pr-6 gap-[80px] sm:pt-56 sm:pl-20 sm:pr-20 sm:pb-[80px] sm:gap-[80px]' data-cursor="scroll">
                    <div className='flex flex-col w-full gap-[40px]'> 
                        <h6 className='text-gray-900 text-[18px]'>Viplan Construction company</h6>
                        <h2 className='text-gray-900 text-[30px] sm:text-[48px] max-w-2/3'>Transforming a spreadsheet workflow into a scalable platform</h2>
                    </div>
                    <div className='w-full flex flex-row flex-start gap-[100px]'>
                        <div className='flex flex-col gap-2 items-start'>
                            <h2 className='text-gray-900 text-base font-medium'>B2B</h2>
                            <h2 className='text-gray-900 text-base font-medium'>B2C</h2>
                        </div>
                        
                        <div className='flex flex-col gap-2 items-start'>
                            <h3 className='text-gray-500 text-xs'>WORK</h3>
                            <h2 className='text-gray-900 text-base font-medium'>PRODUCT DESIGN</h2>
                            <h2 className='text-gray-900 text-base font-medium'>UX DESIGN</h2>
                            <h2 className='text-gray-900 text-base font-medium'>UI DESIGN</h2>
                        </div>
                        
                        <div className='flex flex-col gap-2 items-start'>
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
                        <img className="hidden sm:block object-cover" src="/images/project-placeholders/Viplan/viplan-img-1.jpg" alt="Viplan project overview" /> 
                        <img className="block sm:hidden aspect-[4/5] object-cover" src="/images/project-placeholders/Viplan/viplan-img-1.jpg" alt="Viplan project overview mobile" /> 
                    </div>
                </AnimatedContent>

                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>The Challenge</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        At a Viplan constructions, apartment buyers reached a stage where they needed to select finishing products — such as flooring, wall colors, and bathroom or kitchen configurations.
                        <br></br><br></br>
                        This process was managed entirely through spreadsheets and email exchanges between the company and its clients. The workflow quickly became problematic:
                        <br></br><br></br>
                        <ul>
                            <li>• Clients often struggled to understand the spreadsheet.</li>
                            <li>• They couldn't see the final cost of their selections in real time.</li>
                            <li>• Misalignments led to frequent renegotiations and frustration.</li>
                            <li>• The construction company's team wasted time on back-and-forth communication, making it difficult to meet deadlines and manage requests at scale.</li>
                        </ul>
                        <br></br><br></br>
                        The challenge was to make customization clear and simple for clients, while giving the company a streamlined way to manage orders and avoid costly delays.
                    </p>
                </div>

                

                {/* Serie de imagens 1 */}
                <div className='w-full flex flex-col pl-6 pr-6 gap-[24px] sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    {/* Single image */}
                    <div id="img-2" className='w-full flex flex-col justify-center items-center cursor-none' data-cursor="scroll">
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
                        <div className='w-full sm:aspect-video bg-gray-200 flex items-center justify-center'>
                            <p className='text-gray-500'>Loading animation...</p>
                        </div>
                    )}
                    </div>
                    <div className='aspect-video'> 
                        <img className="aspect-video block object-cover" src="/images/final-imgs/viplan/customer-1.jpg" alt="Viplan project thumbnail" />
                    </div>

                    <div className='aspect-video'> 
                        <img className="aspect-video block object-cover" src="/images/final-imgs/viplan/customer-2.jpg" alt="Viplan project thumbnail" />
                    </div>

                    <div className='aspect-video'> 
                        <img className="block object-cover" src="/images/final-imgs/viplan/customer-3.jpg" alt="Viplan project thumbnail" />
                    </div>
                    
                    {/* Double image */}
                    <div className='flex flex-row gap-[24px]'>
                        <div className='aspect-square max-w-1/2'> 
                            <img className="object-cover" src="/images/final-imgs/viplan/customer-4.jpg" alt="Viplan project thumbnail" />
                        </div>
                        <div className='aspect-square max-w-1/2'> 
                            <img className="block object-cover" src="/images/final-imgs/viplan/customer-5.jpg" alt="Viplan project thumbnail" />
                        </div>
                    </div>
                </div>

                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>The solution <br></br>for the end customers</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        I designed a portal that brought the entire customization process into a single, intuitive space. They could log in, see their available apartments, browse through each environment, and preview how different finishes would look in context. 
                        <br></br><br></br>
                        Every choice was tied to real-time cost feedback, giving clients full transparency over their budget. Once their selections were complete, they could finalize and submit everything directly through the platform, removing the need for endless email exchanges.
                    </p>
                </div>

                {/* Serie de imagens 2 */}
                <div className='w-full flex flex-col pl-6 pr-6 gap-[24px] sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    {/* Single image */}
                    <div className='aspect-video'> 
                        <img className="aspect-video block object-cover" src="/images/final-imgs/viplan/company-1.jpg" alt="Viplan project thumbnail" />
                    </div>

                    <div className='aspect-video'> 
                        <img className="aspect-video block object-cover" src="/images/final-imgs/viplan/company-2.jpg" alt="Viplan project thumbnail" />
                    </div>

                    <div className='aspect-video'> 
                        <img className="block object-cover" src="/images/final-imgs/viplan/company-3.jpg" alt="Viplan project thumbnail" />
                    </div>
                    
                    {/* Double image */}
                    <div className='flex flex-row gap-[24px]'>
                        <div className='aspect-square max-w-1/2'> 
                            <img className="object-fill" src="/images/final-imgs/viplan/company-4.jpg" alt="Viplan project thumbnail" />
                        </div>
                        <div className='aspect-square max-w-1/2'> 
                            <img className="block object-cover" src="/images/final-imgs/viplan/company-5.jpg" alt="Viplan project thumbnail" />
                        </div>
                    </div>
                </div>
        
                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>The solution <br></br>for the Company</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        On the company side, the platform acted as a centralized hub to manage the entire operation. Teams could upload and organize finishing products, configure the structures of each apartment, and receive completed submissions from clients in one place. This structure streamlined internal workflows, removed the reliance on spreadsheets, and created a more scalable process that ensured deadlines were met while maintaining alignment with client expectations.
                    </p>
                </div>


                {/* Serie de imagens finais */}
                <div className='w-full flex flex-col pl-6 pr-6 gap-[24px] sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    {/* Double image */}
                    <div className='flex flex-row gap-[24px]'>
                        <div className='aspect-square max-w-1/2'> 
                            <img className="object-fill" src="/images/final-imgs/viplan/finale-1.jpg" alt="Viplan project thumbnail" />
                        </div>
                        <div className='aspect-square max-w-1/2'> 
                            <img className="block object-cover" src="/images/final-imgs/viplan/finale-2.jpg" alt="Viplan project thumbnail" />
                        </div>
                    </div>

                    {/* Single image */}
                    <div className='aspect-video'> 
                        <img className="aspect-video block object-cover" src="/images/final-imgs/viplan/finale-3.jpg" alt="Viplan project thumbnail" />
                    </div>
                </div>
                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>The Impact</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        When launched with the company's new apartment line, the platform immediately validated its value:
                        <br></br><br></br>
                        The internal workflow for managing apartments and budgets became faster, clearer, and far more scalable;
                        <br></br><br></br>
                        90% of clients customized and submitted their apartments without asking for readjustments afterward;
                        <br></br><br></br>
                        Client satisfaction improved significantly, as they could now see, understand, and trust the cost of their choices upfront.
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
                    <Link to="/project-superfiliate-ds" className='cursor-none'>
                        <div className="bg-[url(/images/final-imgs/Superfiliate%20DS/thumb-ds-sf.jpg)] w-full aspect-square flex items-center justify-center bg-cover cursor-none"></div>
                    </Link>

                    <Link to="/project-pleez" className='cursor-none'>
                        <div className='bg-[url(/images/final-imgs/pleez/pleez-thumb-main.jpg)] w-full aspect-square flex items-center justify-center bg-cover cursor-none'></div>
                    </Link>
                    
                    <Link to="/" className='cursor-none'>
                        <div className='bg-[url(/images/final-imgs/Sf-tiktokshop/tts-thumb-main.jpg)] w-full aspect-square flex items-center justify-center bg-cover cursor-none'></div>
                    </Link>
                </div>

                
            </div>
        </>
    );
}

export default ProjectViplan;
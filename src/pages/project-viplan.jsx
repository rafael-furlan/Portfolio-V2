import React, { useState, useEffect } from 'react';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';
import { Link } from 'react-router-dom';
import AnimatedContent from '../components/animatedcontent.jsx'
import Marquee from "react-fast-marquee";

function ProjectViplan() {

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
            <h6 className='text-[20px]'>Viplan Construction company</h6>
            <h2 className='text-[36px] sm:text-[56px] '>Transforming a spreadsheet workflow<br></br>
            into a scalable platform</h2>
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
                    <img className="hidden sm:block sm:aspect-video object-cover rounded-xl" src="/images/project-placeholders/Viplan/viplan-img-1.jpg" /> 
                    <img className="block sm:hidden aspect-[4/5] object-cover rounded-xl" src="public/images/project-placeholders/Viplan/viplan-img-1.jpg" /> 
                </div>
            </AnimatedContent>

            <div className='w-full flex flex-col pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-9 cursor-none' data-cursor="scroll">
                
                <h2 className='text-[36px]'>The Challenge</h2>
                <p className='text-[24px] leading-[150%] sm:w-2/3'>
                At a Viplan constructions, apartment buyers reached a stage where they needed to select finishing products — such as flooring, wall colors, and bathroom or kitchen configurations.
                <br></br><br></br>
                This process was managed entirely through spreadsheets and email exchanges between the company and its clients. The workflow quickly became problematic:
                <br></br><br></br>
                <ul>
                    <li>• Clients often struggled to understand the spreadsheet.</li>
                    <li>• They couldn’t see the final cost of their selections in real time.</li>
                    <li>• Misalignments led to frequent renegotiations and frustration.</li>
                    <li>• The construction company’s team wasted time on back-and-forth communication, making it difficult to meet deadlines and manage requests at scale.</li>
                </ul>

                <br></br><br></br>
                The challenge was to make customization clear and simple for clients, while giving the company a streamlined way to manage orders and avoid costly delays.
                </p>

            </div>

        

        <div id="img-2" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
        <img className="hidden sm:block sm:aspect-video object-cover rounded-xl" src="/images/project-placeholders/Viplan/viplan-img-1.jpg" /> 
                    <img className="block sm:hidden aspect-[4/5] object-cover rounded-xl" src="public/images/project-placeholders/Viplan/viplan-img-1.jpg" /> 
        </div>

         <div className='w-full flex flex-col pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-9 cursor-none' data-cursor="scroll">
            <h2 className='text-[36px]'>The solution for the end customers</h2>
                <p className='text-[24px] leading-[150%] sm:w-2/3'>
                I designed a portal that brought the entire customization process into a single, intuitive space. They could log in, see their available apartments, browse through each environment, and preview how different finishes would look in context. 
                <br></br><br></br>
                Every choice was tied to real-time cost feedback, giving clients full transparency over their budget. Once their selections were complete, they could finalize and submit everything directly through the platform, removing the need for endless email exchanges.
                </p>

         </div>

        <div id="img-3" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                <img className="hidden sm:block sm:aspect-video object-cover rounded-xl" src="/images/project-placeholders/Viplan/viplan-img-1.jpg" /> 
                <img className="block sm:hidden aspect-[4/5] object-cover rounded-xl" src="/images/project-placeholders/Viplan/viplan-img-1.jpgg" /> 
        </div>
        
        <div className='w-full flex flex-col pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-9 cursor-none' data-cursor="scroll">
            <h2 className='text-[36px]'>The solution for the Company</h2>
                <p className='text-[24px] leading-[150%] sm:w-2/3'>
                On the company side, the platform acted as a centralized hub to manage the entire operation. Teams could upload and organize finishing products, configure the structures of each apartment, and receive completed submissions from clients in one place. This structure streamlined internal workflows, removed the reliance on spreadsheets, and created a more scalable process that ensured deadlines were met while maintaining alignment with client expectations.
                </p>

         </div>


         <div id="img-1" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    <img className="hidden sm:block sm:aspect-video object-cover rounded-xl" src="/images/project-placeholders/Viplan/viplan-img-1.jpg" /> 
                    <img className="block sm:hidden aspect-[4/5] object-cover rounded-xl" src="/images/project-placeholders/Viplan/viplan-img-1.jpg" /> 
                </div>
            

        <div className='w-full flex flex-col pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-9 cursor-none' data-cursor="scroll">
                
                <h2 className='text-[36px]'>The Impact</h2>
                <p className='text-[24px] leading-[150%] sm:w-2/3'>
                When launched with the company’s new apartment line, the platform immediately validated its value:
                <br></br><br></br>
                The internal workflow for managing apartments and budgets became faster, clearer, and far more scalable;
                <br></br><br></br>
                90% of clients customized and submitted their apartments without asking for readjustments afterward;
                <br></br><br></br>
                Client satisfaction improved significantly, as they could now see, understand, and trust the cost of their choices upfront.
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

export default ProjectViplan;
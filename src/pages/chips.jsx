import React, { useState, useEffect } from 'react';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';
import { Link } from 'react-router-dom'; 

function ChipsPage() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
  
    window.scrollTo(0, 0);
    document.title = "Rafael Furlan";
  }, []);

  useEffect(() => {
    
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
   <>
    {!isTouchDevice && <CustomCursor />}
    <div className='w-full min-h-screen flex flex-col cursor-none bg-gray-50'> 
        
        <TopBar/>

        <div className='flex flex-col w-full gap-[25px] pt-[160px] pb-0 pr-6 pl-6 sm:pt-52 sm:pl-16 sm:pr-16 sm:pb-20 cursor-none' data-cursor="scroll">
            <p className='text-gray-800 font-sora font-regular text-[36px] leading-[1.5] max-w-3/4'>
            Chips are UI components and micro-interactions <br></br>that may never step into the light of day
            </p>
        </div>

        <div className='w-full flex flex-col gap-4 sm:pl-16 sm:pr-16'>

            {/* Row 1*/}
            <div className='flex flex-row gap-4  '>

                {/* Left column*/}
                <div className='bg-gray-200 aspect-9/16 w-1/3 rounded-lg'>01
                </div>

                {/* Right column*/} 
                <div className='flex flex-col gap-4 w-2/3'>

                    {/* upper row*/}
                    <div className='flex flex-row gap-4 w-full h-full'>
                        <div className='bg-gray-200 w-full h-full rounded-lg'>02</div>
                        <div className='bg-gray-200 aspect-square h-full rounded-lg'>03</div>
                    </div>

                    {/* lower row*/}
                    <div className='flex flex-row gap-4 w-full h-full'>
                        <div className='bg-gray-200 aspect-square h-full rounded-lg'>03</div>
                        <div className='bg-gray-200 w-full h-full rounded-lg'>02</div>
                    </div>

                </div>

            </div>

            
        

        </div>

        

        
        


    </div>
        












    
    </>
  );
}

export default ChipsPage;
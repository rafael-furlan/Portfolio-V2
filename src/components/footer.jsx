import React from 'react';
import Marquee from 'react-fast-marquee';

function Footer() {
    return (
        <>
        <div
        id="bottom"
        className='flex flex-col sm:flex-row w-full items-start justify-start pl-6 pr-6 pt-[50px] pb-[100px] gap-[20px] sm:pl-16 sm:pr-16 sm:pt-[150px] sm:pb-[100px] sm:gap-[100px]'
        data-cursor="scroll"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className='flex flex-col gap-2 p-2 items-start'>
          <h3 className='text-gray-500 text-xs'>BASED`</h3>
          <h2 className='text-gray-900 text-base font-medium'>Barcelona, Spain</h2>
        </div>
        
        <div className='flex flex-col gap-2 p-2 items-start'>
          <h3 className='text-gray-500 text-xs'>COMPANY</h3>
          <h2 className='text-gray-900 text-base font-medium'>Superfiliate Inc.</h2>
        </div>
        
        <div className='flex flex-col gap-2 p-2 items-start'>
          <h3 className='text-gray-500 text-xs'>CONTACT</h3>
          <h2 className='text-gray-900 text-base font-medium'>rafaelfurlan.design@gmail.com</h2>
        </div>
      </div>
      <div
        id="heading"
        className='flex flex-col w-full pt-9 pb-8 sm:pt-20 sm:pb-4 cursor-none'
        data-cursor="scroll"
      >
        <div className='flex flex-row justify-center gap-16 items-baseline'>
          <Marquee autoFill={true}>
            <div className='flex flex-row justify-center ml-8 mr-8'>
              <h1 className='text-gray-900 font-sora text-[102px] sm:text-[102px] font-medium tracking-tighter'>
                RAFAEL FURLAN
              </h1>
            </div>
            <div className='flex flex-row justify-center ml-8 mr-8'>
              <svg width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.6109 0H57.4728L53.9331 37.3494L36.6276 47.5904L3 32.1285L13.0293 14.6586L34.8577 31.3253L40.954 27.7108L37.6109 0ZM97 64.4578L87.1674 82.1285L57.2762 60.241V39.759L87.1674 17.8715L97 35.3414L71.8285 46.3855V53.6145L97 64.4578ZM13.0293 85.3414L3 67.8715L36.6276 52.2088L53.9331 62.4498L57.4728 100H37.6109L40.954 72.2892L34.8577 68.6747L13.0293 85.3414Z" fill="#111827"/>
              </svg>
            </div>
          </Marquee>
        </div>
      </div>
        </>
    )
    
}

export default Footer;
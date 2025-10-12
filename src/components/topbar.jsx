import React from 'react';
import Avatar from './avatar.jsx'
import HeaderButton1 from './headerbutton1.jsx';
import HeaderButton2 from './headerbutton2.jsx';
import NavButton from './nav-button.jsx';
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <div className='flex max-w-full pb-0 pr-4 pt-4 pl-4 sm:pb-0 sm:pr-8 sm:pt-8 sm:pl-8 justify-between items-center fixed top-0 left-0 right-0 z-50 cursor-none' data-cursor="scroll">
      
      <div className='flex flex-row gap-[24px] items-center justify-start' data-cursor="hidden">

        <Avatar /> 

        <nav className='flex flex-row gap-[8px] items-center justify-start cursor-none' data-cursor="hidden">
          <NavButton><Link  to="/" className='text-gray-900  text-[18px]'>Work</Link></NavButton>
          
          <NavButton><Link  to="/Chips" className='text-gray-900 text-[18px]'>Chips</Link></NavButton>
        </nav>

      </div> 

      <div className='flex flex-row-reverse gap-[15px] items-center justify-end' data-cursor = "hidden">
        <HeaderButton1 />
        <HeaderButton2 />
      </div>
        
    </div>
  );
}

export default TopBar;
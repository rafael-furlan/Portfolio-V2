import React from 'react';
import { Link } from 'react-router-dom';

function Avatar() {
  return (
    <div className='p-[4px] rounded-full bg-gray-600/20 backdrop-blur-md hover:bg-gray-600/40 
    transition-all duration-300 border border-gray-50/20' data-cursor="hidden">

    <Link to="/" className='cursor-none'>
      <div className="min-w-[46px] min-h-[46px] max-w-[46px] max-h-[46px] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[60px] 
      sm:max-h-[60px] bg-[url('/images/portrait/fractal-portrait.jpg')] bg-cover bg-center rounded-full "></div>
    </Link>
    
    </div>
  );
}

export default Avatar;
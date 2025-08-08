import React from 'react';

function Avatar() {
  return (
    <div className='p-[4px] rounded-full bg-gray-600/20 backdrop-blur-md hover:bg-gray-600/40 transition-all duration-300' data-cursor="hidden">
    <div className="min-w-[46px] min-h-[46px] max-w-[46px] max-h-[46px] sm:min-w-[60px] sm:min-h-[60px] sm:max-w-[60px] sm:max-h-[60px] bg-[url('/images/portrait/fractal-portrait.jpg')] bg-cover bg-center rounded-full"></div>
    </div>
  );
}

export default Avatar;
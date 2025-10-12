import React from 'react';

function NavButton({ children, onClick }) {
  return (
    <div 
      onClick={onClick} 
      className="flex items-center justify-center min-h-56px] max-h-[56px] pl-[20px] pr-[20px]
      
      sm:min-h-[56px] sm:max-h-[56px] sm:pl-[20px] sm:pr-[20px] rounded-full border border-transparent bg-transparent transition Hover:transition-opacity
      
      hover:bg-gray-600/10 hover:backdrop-blur-md hover:border hover:border-gray-50/30
      
      active:bg-gray-600/30 transition-all duration-300 cursor-none" data-cursor="hidden">
      {children}
    </div>
  );
}

export default NavButton;
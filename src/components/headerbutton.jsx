import React from 'react';

function HeaderButton({ children, className = '', ...props }) {
    return (
        <div 
          className={`flex items-center justify-center min-w-[70px] max-w-[70px] min-h-[70px] max-h-[70px] rounded-full bg-gray-600/30 backdrop-blur-md hover:bg-gray-700/40 active:bg-gray-700/50 transition-all duration-300 ${className}`}
          
          {...props}
        >
          {children}
        </div>
      );
}

export default HeaderButton;
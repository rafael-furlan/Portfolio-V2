import React from 'react';

function HeaderButton({ children, className = '', ...props }) {
    return (
        <div 
          className={`flex items-center justify-center min-w-[56px] max-w-[56px] min-h-[56px] max-h-[56px] rounded-full bg-gray-600/30 backdrop-blur-md hover:bg-gray-700/40 active:bg-gray-700/50 transition-all duration-300 ${className}`}
          
          {...props}
        >
          {children}
        </div>
      );
}

export default HeaderButton;
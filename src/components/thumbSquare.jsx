import React from 'react';
import { Link } from 'react-router-dom';

function ThumbSquare({ children, title, subtitle  }) {
    return (
        <div className='w-full aspect-square flex flex-col gap-4 cursor-none'>
            <div className='w-full aspect-square flex overflow-hidden'>
                <div className='w-full h-full transition-transform duration-300 ease-in-out hover:scale-103'>
                    {children}
                </div>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <div className='text-lg text-gray-900'>{title}</div>
                <div className='text-sm text-gray-500'>{subtitle}</div>
            </div>
        </div>

    );
}

export default ThumbSquare;
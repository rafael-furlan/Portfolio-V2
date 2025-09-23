import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const LottieAnimation = ({ 
  src, 
  className = 'w-full h-full', 
  containerClassName = 'w-full sm:aspect-video rounded-xl overflow-hidden',
  loadingText = 'Loading animation...',
  loop = true,
  autoplay = true,
  ...props 
}) => {
  const [animationData, setAnimationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.statusText}`);
        }
        const data = await response.json();
        setAnimationData(data);
      } catch (err) {
        console.error('Error loading Lottie animation:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (src) {
      loadAnimation();
    }
  }, [src]);

  if (loading) {
    return (
      <div className={`${containerClassName} bg-gray-200 flex items-center justify-center`}>
        <p className='text-gray-500'>{loadingText}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${containerClassName} bg-red-100 flex items-center justify-center`}>
        <p className='text-red-500'>Error: {error}</p>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className={`${containerClassName} bg-gray-200 flex items-center justify-center`}>
        <p className='text-gray-500'>No animation data</p>
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        className={className}
        {...props}
      />
    </div>
  );
};

export default LottieAnimation;

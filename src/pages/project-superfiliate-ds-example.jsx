import React, { useState, useEffect } from 'react';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';
import AnimatedContent from '../components/animatedcontent.jsx';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import LottieAnimation from '../components/LottieAnimation.jsx';

function ProjectSuperfiliateExample() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detecta se é dispositivo touch
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

return (
    <>
    {!isTouchDevice && <CustomCursor />}

    <div className='w-full min-h-screen flex flex-col cursor-none bg-gray-50 scroll-smooth'>

        <TopBar/>

        {/* Exemplo 1: Animação simples */}
        <div className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
            <LottieAnimation 
                src="/images/project-placeholders/superfiliate/sf-ds-bw-img.json"
                loadingText="Carregando animação 1..."
            />
        </div>

        {/* Exemplo 2: Animação com configurações customizadas */}
        <div className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
            <LottieAnimation 
                src="/images/project-placeholders/superfiliate/sf-ds-bw-img.json"
                containerClassName="w-full h-96 rounded-xl overflow-hidden"
                className="w-full h-full"
                loop={false}
                autoplay={true}
                loadingText="Carregando animação 2..."
            />
        </div>

        {/* Exemplo 3: Múltiplas animações com diferentes arquivos */}
        <div className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
            <LottieAnimation 
                src="/images/project-placeholders/superfiliate/animation3.json"
                loadingText="Carregando animação 3..."
            />
        </div>

    </div>
    </>
);
}

export default ProjectSuperfiliateExample;

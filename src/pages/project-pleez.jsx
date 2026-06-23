import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';

function ProjectPleez() {
  const [lottieData1, setLottieData1] = useState(null);
  const [lottieData2, setLottieData2] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Self-ordering system — Rafael Furlan';

    const loadLottieAnimations = async () => {
      try {
        const response1 = await fetch('/images/final-imgs/pleez/customer-ui.json');
        const data1 = await response1.json();
        setLottieData1(data1);

        const response2 = await fetch('/images/final-imgs/pleez/customization-lean.json');
        const data2 = await response2.json();
        setLottieData2(data2);
      } catch (error) {
        console.error('Error loading Lottie animations:', error);
      }
    };

    loadLottieAnimations();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <div className="w-full max-w-[610px] mx-auto px-6 pt-16 pb-24 flex flex-col">

        <Link to="/" className="text-gray-400 text-sm mb-8 hover:text-[#3D3D3D] transition-colors">← Pleez / Mobile design</Link>

        <h1 className="text-gray-900 text-2xl font-medium mb-6">Designed & Launched MVP for Market Validation</h1>

        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          Restaurants were struggling with scaling their service while maintaining speed and accuracy. Simple requests like ordering drinks or small items still required staff involvement, creating bottlenecks during busy hours.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          For customers, this meant delays and friction in their dining experience. For operators, it meant reduced efficiency and limited ability to scale without hiring more staff.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          The challenge was clear: how do we create a system that allows customers to order independently while giving restaurants full visibility and control?
        </p>

        <div className="w-[980px] max-w-[calc(100vw-48px)] relative left-1/2 -translate-x-1/2 aspect-video mb-12">
          <img className="w-full h-full rounded-[5px] object-cover" src="/images/final-imgs/pleez/pleez-cover.jpg" />
        </div>

        {lottieData1 ? (
          <div className="w-full mb-12">
            <Lottie animationData={lottieData1} loop={true} autoplay={true} className="w-full h-full" />
          </div>
        ) : (
          <div className="w-full aspect-video bg-gray-100 rounded-[5px] flex items-center justify-center mb-12">
            <p className="text-gray-400">Loading...</p>
          </div>
        )}

        <h2 className="text-gray-900 text-lg font-medium mt-12 mb-4">Customer Flow</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          We designed a seamless ordering journey that put customers in control:
          <br /><br />
          Browse the restaurant's menu
          Select products
          Place orders and complete payments
          <br /><br />
          All without needing to depend on staff. This reduced waiting times and gave customers a sense of autonomy inside the restaurant.
        </p>

        <img className="w-full rounded-[5px] object-cover mb-4" src="/images/final-imgs/pleez/operators-1.jpg" />

        <div className="flex gap-4 mb-12">
          <img className="flex-1 min-w-0 rounded-[5px] object-cover" src="/images/final-imgs/pleez/operators-2.jpg" />
          <img className="flex-1 min-w-0 rounded-[5px] object-cover" src="/images/final-imgs/pleez/operators-3.jpg" />
        </div>

        <h2 className="text-gray-900 text-lg font-medium mt-12 mb-4">Empowering Operators</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          On the operator side, we built a real-time view into every stage of the order journey. Staff could:
          <br /><br />
          • Track incoming requests<br />
          • Prioritize them efficiently<br />
          • Complete them with higher speed and accuracy
          <br /><br />
          This visibility turned the ordering process into a scalable workflow, allowing restaurants to handle more customers without extra overhead.
        </p>

        {lottieData2 ? (
          <div className="w-full mb-12">
            <Lottie animationData={lottieData2} loop={true} autoplay={true} className="w-full h-full" />
          </div>
        ) : (
          <div className="w-full aspect-video bg-gray-100 rounded-[5px] flex items-center justify-center mb-12">
            <p className="text-gray-400">Loading...</p>
          </div>
        )}

        <h2 className="text-gray-900 text-lg font-medium mt-12 mb-4">Customization as a Core Feature</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          Branding was central for our target restaurants. To address this, we designed the MVP to be fully customizable. Both the app and platform could adapt to each restaurant's identity — from colors and logos to the overall look and feel.
          This not only boosted adoption but also made the experience feel authentic to each brand, a critical factor in the hospitality industry.
        </p>

        <img className="w-full rounded-[5px] object-cover mb-12" src="/images/final-imgs/pleez/pleez-cover.jpg" />

        <h2 className="text-gray-900 text-lg font-medium mt-12 mb-4">The Impact</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          Built and launched Pleez's first MVP, enabling real-world validation of the core value proposition.
          <br /><br />
          Delivered a frictionless customer experience, reducing wait times and dependency on staff.
          <br /><br />
          Empowered operators with real-time visibility and prioritization, improving efficiency and accuracy.
          <br /><br />
          Created a customizable system, strengthening brand adoption and differentiation in the market.
        </p>

      </div>
    </div>
  );
}

export default ProjectPleez;

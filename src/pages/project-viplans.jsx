import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';

function ProjectViplans() {
  const [lottieData1, setLottieData1] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'From spreadsheet to platform — Rafael Furlan';

    const loadLottieAnimation = async () => {
      try {
        const response = await fetch('/images/final-imgs/viplan/image-1-background.json');
        const data = await response.json();
        setLottieData1(data);
      } catch (error) {
        console.error('Error loading Lottie animation:', error);
      }
    };
    loadLottieAnimation();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <div className="w-full max-w-[610px] mx-auto px-6 pt-16 pb-24 flex flex-col">

        <Link to="/" className="text-gray-400 text-sm mb-8 hover:text-[#3D3D3D] transition-colors">← Viplan / Product design</Link>

        <h1 className="text-gray-900 text-2xl font-medium mb-6">Transforming a spreadsheet workflow into a scalable platform</h1>

        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          Viplan's apartment buyers were selecting finishes — flooring, wall colors, kitchen configurations — through spreadsheets and email chains.
          Clients didn't understand what they were choosing, couldn't see what it would cost, and kept requesting changes after submitting their final
          selections. The construction team was absorbing all of that friction manually, and it was threatening their ability to hit deadlines at scale.
        </p>

        {/* Hero image */}
        <div className="w-[980px] max-w-[calc(100vw-48px)] relative left-1/2 -translate-x-1/2 aspect-video mb-4">
          <img className="w-full h-full rounded-[5px] object-cover" src="/images/project-placeholders/Viplan/viplan-img-1.jpg" alt="Viplan project overview" />
        </div>

        {/* Lottie animation */}
        {lottieData1 ? (
          <div className="w-full mb-4">
            <Lottie
              animationData={lottieData1}
              loop={true}
              autoplay={true}
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className="w-full aspect-video bg-gray-200 rounded-[5px] flex items-center justify-center mb-4">
            <p className="text-gray-500">Loading animation...</p>
          </div>
        )}

        {/* Customer images */}
        <img className="w-full rounded-[5px] object-cover mb-4" src="/images/final-imgs/viplan/customer-2.jpg" alt="Viplan customer view" />
        <img className="w-full rounded-[5px] object-cover mb-4" src="/images/final-imgs/viplan/customer-3.jpg" alt="Viplan customer view" />

        <div className="flex gap-4 mb-4">
          <img className="flex-1 min-w-0 rounded-[5px] object-cover" src="/images/final-imgs/viplan/customer-4.jpg" alt="Viplan customer view" />
          <img className="flex-1 min-w-0 rounded-[5px] object-cover" src="/images/final-imgs/viplan/customer-5.jpg" alt="Viplan customer view" />
        </div>

        {/* Impact section */}
        <h2 className="text-gray-900 text-lg font-medium mt-12 mb-4">Impact</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          The construction team described their workflow as faster, clearer, and finally scalable — managing apartments, products, and submissions
          in one place instead of across spreadsheets and inboxes. On the client side, nearly everyone completed the flow and delivered their final
          quotation through the platform without coming back to renegotiate. A couple did — but the exception proved the rule.
        </p>

        {/* Company images */}
        <img className="w-full rounded-[5px] object-cover mb-4" src="/images/final-imgs/viplan/company-1.jpg" alt="Viplan company view" />
        <img className="w-full rounded-[5px] object-cover mb-4" src="/images/final-imgs/viplan/company-2.jpg" alt="Viplan company view" />
        <img className="w-full rounded-[5px] object-cover mb-4" src="/images/final-imgs/viplan/company-3.jpg" alt="Viplan company view" />

        <div className="flex gap-4 mb-4">
          <img className="flex-1 min-w-0 rounded-[5px] object-cover" src="/images/final-imgs/viplan/company-4.jpg" alt="Viplan company view" />
          <img className="flex-1 min-w-0 rounded-[5px] object-cover" src="/images/final-imgs/viplan/company-5.jpg" alt="Viplan company view" />
        </div>

        {/* The solution for the Company */}
        <h2 className="text-gray-900 text-lg font-medium mt-12 mb-4">The solution for the Company</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          On the company side, the platform acted as a centralized hub to manage the entire operation. Teams could upload and organize finishing products, configure the structures of each apartment, and receive completed submissions from clients in one place. This structure streamlined internal workflows, removed the reliance on spreadsheets, and created a more scalable process that ensured deadlines were met while maintaining alignment with client expectations.
        </p>

        {/* Finale images */}
        <div className="flex gap-4 mb-4">
          <img className="flex-1 min-w-0 rounded-[5px] object-cover" src="/images/final-imgs/viplan/finale-1.jpg" alt="Viplan finale" />
          <img className="flex-1 min-w-0 rounded-[5px] object-cover" src="/images/final-imgs/viplan/finale-2.jpg" alt="Viplan finale" />
        </div>
        <img className="w-full rounded-[5px] object-cover mb-4" src="/images/final-imgs/viplan/finale-3.jpg" alt="Viplan finale" />

        {/* The Impact */}
        <h2 className="text-gray-900 text-lg font-medium mt-12 mb-4">The Impact</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          When launched with the company's new apartment line, the platform immediately validated its value:
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          The internal workflow for managing apartments and budgets became faster, clearer, and far more scalable;
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          90% of clients customized and submitted their apartments without asking for readjustments afterward;
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          Client satisfaction improved significantly, as they could now see, understand, and trust the cost of their choices upfront.
        </p>

      </div>
    </div>
  );
}

export default ProjectViplans;

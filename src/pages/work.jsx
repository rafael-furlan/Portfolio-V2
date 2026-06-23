import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Discovery on autopilot',
    company: 'Superfiliate',
    category: 'Product design',
    image: '/images/final-imgs/creator-discovery/creator-discovery-1.jpg',
    link: '/project-tiktok',
  },
  {
    title: 'From spreadsheet to platform',
    company: 'Viplan',
    category: 'Product design',
    image: '/images/final-imgs/viplan/viplan-thumb-main.jpg',
    link: '/project-viplan',
  },
  {
    title: 'From tokens to UI',
    company: 'Superfiliate',
    category: 'Design system',
    image: '/images/final-imgs/Superfiliate%20DS/thumb-ds-sf.jpg',
    link: '/project-superfiliate-ds-presentation',
  },
  {
    title: 'Self-ordering system',
    company: 'Pleez',
    category: 'Mobile design',
    image: '/images/final-imgs/pleez/pleez-thumb-main.jpg',
    link: '/project-pleez',
  },
];

function WorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Rafael Furlan';
  }, []);

  return (
    <>
      <div className="w-full min-h-screen flex flex-col bg-white">
        <div className="w-full max-w-[610px] mx-auto px-6 pt-16 pb-24 flex flex-col">

          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            <div className="flex flex-col gap-2">
              <div
                className="w-[44px] h-[44px] rounded-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images/portrait/fractal-portrait.jpg')" }}
              />
              <div className="mt-1">
                <h1 className="text-gray-900 font-medium text-base">Rafael Furlan</h1>
                <p className="text-gray-500 text-sm">
                  Staff Product Designer | Design engineer in progress...
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-3 items-center pt-1">
              <a
                href="https://www.linkedin.com/in/rafaelfurlan98/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-md bg-[#F2F2F2] hover:bg-[#E8E8E8] transition-colors"
               
              >
                <svg width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="fill-[#3D3D3D]">
                  <path d="M0 1.14614C0 0.513313 0.526012 0 1.17491 0H14.8251C15.474 0 16 0.513315 16 1.14614V14.8539C16 15.4869 15.474 16 14.8251 16L1.17491 16C0.526012 16 0 15.4869 0 14.8539V1.14614ZM4.94338 13.3937V6.16876H2.54196V13.3937H4.94338ZM3.74266 5.18232C4.58008 5.18232 5.10131 4.62753 5.10131 3.9342C5.0857 3.22527 4.58008 2.68587 3.75854 2.68587C2.93709 2.68587 2.4 3.22527 2.4 3.9342C2.4 4.62753 2.92112 5.18232 3.72701 5.18232H3.74266ZM8.6514 13.3937V9.35897C8.6514 9.14304 8.667 8.92732 8.73042 8.77296C8.90401 8.34153 9.29915 7.89471 9.96255 7.89471C10.8315 7.89471 11.1791 8.55725 11.1791 9.52851V13.3937H13.5803V9.251C13.5803 7.03184 12.3956 5.99922 10.8156 5.99922C9.54177 5.99922 8.9706 6.69937 8.65146 7.19167V7.21656H8.63543C8.6407 7.20832 8.64605 7.20003 8.65146 7.19167V6.16876H6.25007C6.28158 6.8467 6.25007 13.3937 6.25007 13.3937H8.6514Z" />
                </svg>
              </a>
              <a
                href="https://github.com/rafael-furlan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-md bg-[#F2F2F2] hover:bg-[#E8E8E8] transition-colors"
               
              >
                <svg width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="fill-[#3D3D3D]">
                  <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1381 15.0539 13.5182 14.0332 14.4958 12.6716C15.4735 11.3101 15.9996 9.6762 16 8C16 3.58 12.42 0 8 0Z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-md bg-[#F2F2F2] hover:bg-[#E8E8E8] transition-colors"
               
              >
                <svg width="13" height="13" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-[#3D3D3D]">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bio */}
          <div className="mb-16">
            <p className="text-gray-900 text-[15px] leading-relaxed">
              My name is Rafael, but everyone calls me Rafa.<br />Staff Product Designer at <a href="https://superfiliate.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#3D3D3D] transition-colors">Superfiliate</a>, leading the Meta partnership vertical and building the design system as a design engineer. Trained as a designer, spending the last two years learning to build. Before this: tried to start a food-tech company, learned more from the failure than I expected. Moved into fintech as a design consultant. Then joined a logistics startup as the only designer and built the design foundation from zero.<br />Currently building the system that ships the product.
            </p>
          </div>

          {/* Project List */}
          <h2 className="text-[#3D3D3D] text-sm font-normal mb-4">Projects</h2>
          <div className="flex flex-col">
            {projects.map((project, index) => (
              <Link
                key={index}
                to={project.link}
                className="flex items-center gap-4 py-4 -mx-3 px-3 rounded-lg transition-colors group"
               
              >
                <div className="w-[56px] min-w-[56px] aspect-[5/4] rounded-[5px] overflow-hidden">
                  <img src={project.image} className="w-full h-full object-cover object-left-top" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-gray-900 text-sm font-medium">{project.title}</span>
                  <span className="text-gray-400 text-sm">{project.company}</span>
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap group-hover:text-[#3D3D3D] transition-colors">{project.category}</span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default WorkPage;

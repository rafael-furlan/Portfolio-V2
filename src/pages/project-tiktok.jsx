import React, { useState, useEffect } from 'react';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';
import AnimatedContent from '../components/animatedcontent.jsx';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Footer from '../components/footer.jsx';

function ProjectTiktok() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [lottieData1, setLottieData1] = useState(null);
    const [lottieData2, setLottieData2] = useState(null);
    const [lottieData3, setLottieData3] = useState(null);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

        // Carregar múltiplas animações Lottie
        const loadLottieAnimations = async () => {
            try {
                // Animação 1
                const response1 = await fetch('/images/final-imgs/Superfiliate DS/light-to-dark-new.json');
                const data1 = await response1.json();
                setLottieData1(data1);

                // Animação 2
                const response2 = await fetch('/images/project-placeholders/superfiliate/Scene (1).json');
                const data2 = await response2.json();
                setLottieData2(data2);

                // Animação 3 (exemplo - substitua pelo seu arquivo)
                const response3 = await fetch('/images/project-placeholders/superfiliate/media-card.json');
                const data3 = await response3.json();
                setLottieData3(data3);

            } catch (error) {
                console.error('Error loading Lottie animations:', error);
            }
        };

        loadLottieAnimations();
    }, []);

    return (
        <>
            {!isTouchDevice && <CustomCursor />}

            <div className='w-full min-h-screen flex flex-col cursor-none bg-gray-50 scroll-smooth'>
                <TopBar />

                <div id="project-heading" className='w-full flex flex-col cursor-none bg-gray-50 pt-44 pb-20 pl-6 pr-6 gap-[80px] sm:pt-56 sm:pl-20 sm:pr-20 sm:pb-[80px] sm:gap-[80px]' data-cursor="scroll">
                    <div className='flex flex-col w-full gap-[40px]'>
                        <h6 className='text-gray-500 text-[18px] uppercase'>Superfiliate / TikTok Shop vertical</h6>
                        <h2 className='text-gray-900 text-[30px] sm:text-[48px] max-w-2/3'>From buzz to $33M GMV</h2>
                    </div>
                    <div className='w-full flex flex-row flex-start gap-[100px]'>
                        <div className='flex flex-col gap-2 items-start'>
                            <h3 className='text-gray-500 text-xs'>ROLE</h3>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>Lead Product Designer</h2>
                        </div>
                        <div className='flex flex-col gap-2 items-start'>
                            <h3 className='text-gray-500 text-xs'>SCOPE</h3>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>Strategy</h2>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>Research</h2>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>Product Design</h2>
                        </div>

                        <div className='flex flex-col gap-2 items-start'>
                            <h3 className='text-gray-500 text-xs'>TEAM</h3>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>Lead Engineer</h2>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>Product Manager</h2>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>Chief Product Officer</h2>
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[80px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>Context</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                    Superfiliate helps brands run creator and affiliate programs at scale. When TikTok Shop launched its Beta API in the US, there was a real opportunity to become one of the first official partners.
                    <br></br><br></br>
                    The problem was that the API was incomplete, the user workflow was entirely unknown, and we had under two months to make it happen.
                       </p>
                </div>

                <div id="img-1" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                        <img className="hidden sm:block sm:aspect-video object-cover" src="/images/final-imgs/Sf-tiktokshop/tw-bet-3.png" />
                        <img className="block sm:hidden aspect-[4/5] object-cover" src="/images/final-imgs/Sf-tiktokshop/tw-bet-3.png" />
                </div>


                <div className='w-full flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>The bet</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                    Before anything else, I needed to understand what we were actually dealing with. I mapped the internal TikTok Shop flow, ran secondary research through YouTube and creator blogs, and went deep on the API documentation alongside the engineers.
                    <br></br><br></br>
                    That work surfaced something important: the API was more incomplete than it first appeared. Key endpoints were missing, the full user workflow was unclear, and some of what we'd assumed we could build wasn't confirmed yet.
                    </p>

                </div>

                <div id="img-1" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                        <img className="hidden sm:block sm:aspect-video object-cover" src="/images/final-imgs/Sf-tiktokshop/product-invetory.png" />
                        <img className="block sm:hidden aspect-[4/5] object-cover" src="/images/final-imgs/Sf-tiktokshop/product-invetory.png" />
                </div>

                <div className='w-full flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'></h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                    Which put us in front of a real decision. Wait for the API to mature — or ship something now. Waiting would give us conversations. Shipping would give us something real to put in people's hands.
                    <br></br><br></br>
                    The engineer had a legitimate concern: we still couldn't fully scope the project. But the PM and I pushed to launch anyway. I mapped the full platform against what the API could actually support and shared both views side by side with the CPO — not to sell the vision, but to make the gap intentional.
                    </p>
                </div>



                <div id="img-1" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    <img className="hidden sm:block sm:aspect-video object-cover" src="/images/final-imgs/Sf-tiktokshop/bot.jpg" />
                    <img className="block sm:hidden aspect-[4/5] object-cover" src="/images/final-imgs/Sf-tiktokshop/bot.jpg" />                </div>

                <div className='w-full flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[80px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>The discovery</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                    After launch, the PM and I booked calls with influencer agencies that were actively running TikTok Shop programs. We wanted to watch how they actually worked — which tools they used, where they started.
                    <br></br><br></br>
                    We went in expecting spreadsheets. That's the default for influencer marketers. We were wrong about what mattered most.
                    <br></br><br></br>
                    </p>
                </div>

                <div id="img-1" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                        <img className="hidden sm:block sm:aspect-video object-cover" src="/images/final-imgs/Sf-tiktokshop/research.png" />
                        <img className="block sm:hidden aspect-[4/5] object-cover" src="/images/final-imgs/Sf-tiktokshop/research.png" />
                </div>

                <div className='w-full flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'></h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                    The first thing that stopped us: they showed us the software they used to find and invite creators. Not a spreadsheet. A bot — scraping TikTok data, no official API access. But it had good UX. Someone had invested real effort into building it. One agency used a third-party version. Another brand had built their own from scratch.
                    <br></br><br></br>
                    That's not a workaround. That's a signal.
                    <br></br><br></br>
                    Not every agency was using the same tool, so the pattern didn't click in a single call. The PM and I would sync after each session. And across those conversations the same logic kept emerging: TikTok Shop wasn't a relationship game like Instagram. It was a volume game. The funnel looked like this — 1,000 invites sent, 100 accepted, maybe 10 would actually perform. To win, you needed to send thousands of invitations. Continuously.
                    <br></br><br></br>
                    </p>
                </div>


                <div id="img-1" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                        <img className="hidden sm:block sm:aspect-video object-cover" src="/images/final-imgs/Sf-tiktokshop/telas-v1.jpg" />
                        <img className="block sm:hidden aspect-[4/5] object-cover" src="/images/final-imgs/Sf-tiktokshop/telas-v1.jpg" />
                </div>

                <div className='w-full flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[80px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>The pivot</h2>
                    <div className='w-1/2 flex flex-col gap-4 sm:w-2/3'>
                        <p className='text-gray-500 text-[16px] leading-[150%]'>
                        This reframed everything we'd built. Our MVP was structured around TikTok's native Target Collaboration model — hard-capped at 50 creators. Against a workflow that required thousands of invitations, that wasn't a minor gap. It was a fundamental mismatch.
                        <br></br><br></br>
                        If we don't solve the scale problem, they will never see the rest of our value — because they will never be fully inside the platform.
                        <br></br><br></br>
                        We reprioritized the entire roadmap. 100% of engineering focus went to the volume problem. Two hard constraints to solve:                        </p>

                        <div className='flex gap-4'>
                            <div className='flex-1 bg-gray-100 rounded-xl p-6 space-y-2'>
                                <p className='text-xs tracking-widest text-gray-600'>Constraint 1</p>
                                <h3 className='text-lg text-gray-800'>50 creator cap per collaboration</h3>
                                <p className='text-sm text-gray-400 leading-relaxed'>
                                    Inviting thousands meant creating hundreds of separate Target Collaborations, with no way to track them in one place.
                                </p>
                            </div>
                            <div className='flex-1 bg-gray-100 rounded-xl p-6 space-y-2'>
                                <p className='text-xs tracking-widest text-gray-600'>Constraint 2</p>
                                <h3 className='text-lg text-gray-800'>400 invitation send limit per day</h3>
                                <p className='text-sm text-gray-400 leading-relaxed'>
                                    For agencies trying to reach thousands of creators, that meant days of manual work or continued bot usage outside the platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="img-1" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                        <img className="hidden sm:block sm:aspect-video object-cover" src="/images/final-imgs/Sf-tiktokshop/v2.jpg" />
                        <img className="block sm:hidden aspect-[4/5] object-cover" src="/images/final-imgs/Sf-tiktokshop/v2.jpg" />
                </div>

                <div className='w-full flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[80px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>The design</h2>
                    <div className='w-1/2 flex flex-col gap-4 sm:w-2/3'>
                        <p className='text-gray-500 text-[16px] leading-[150%]'>
                        Both constraints needed the same thing: the user should experience scale without experiencing complexity.
                        <br></br><br></br>
                        For the 50 creator cap — during a working session with the lead engineer, we flagged the obvious problem: inviting thousands of creators would mean creating hundreds of separate collaborations on the backend with no way to track them in one place. I proposed creating those collaborations under the hood but surfacing them as one. I asked if it was technically feasible. It was. The pain was clear enough that it didn't need much convincing.
                        <br></br><br></br>
                        For the 400 daily send limit — we turned it into a background process. Configure the criteria once. The system sends continuously until the target is reached. From the user's perspective: set it, and scale happens.
                        <br></br><br></br>
                        </p>
                        <div className='flex gap-4'>
                            <div className='flex-1 bg-gray-100 rounded-xl p-6 space-y-2'>
                                <p className='text-xs tracking-widest text-gray-600'>Solution 1</p>
                                <h3 className='text-lg text-gray-800'>The wrapper</h3>
                                <p className='text-sm text-gray-400 leading-relaxed'>
                                    Multiple Target Collaborations created under the hood, surfaced as one. A user inviting 500 creators sees a single collaboration with aggregated status. Ten running in the backend — completely invisible.
                                </p>
                            </div>
                            <div className='flex-1 bg-gray-100 rounded-xl p-6 space-y-2'>
                                <p className='text-xs tracking-widest text-gray-600'>Solution 2</p>
                                <h3 className='text-lg text-gray-800'>Auto-Pilot</h3>
                                <p className='text-sm text-gray-400 leading-relaxed'>
                                    The daily send limit becomes a background process. Configure the criteria once. The system sends continuously until the target is reached — respecting the API limit automatically.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="img-1" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                        <img className="hidden sm:block sm:aspect-video object-cover" src="images/final-imgs/Sf-tiktokshop/marketing.png" />
                        <img className="block sm:hidden aspect-[4/5] object-cover" src="/images/final-imgs/Sf-tiktokshop/marketing.png" />
                </div>

                <div className='w-full flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[80px] sm:pl-20 sm:pr-20 sm:pb-[290px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>Outcome</h2>
                    <div className='w-1/2 flex flex-col gap-4 sm:w-2/3'>
                        <p className='text-gray-500 text-[16px] leading-[150%]'>
                        TikTok Shop stopped being a feature. It became one of three core strategic channels Superfiliate supports.
                        </p>
                        <br></br>
                        <div className='flex gap-4'>
                            <div className='flex-1 bg-gray-100 rounded-xl p-6 space-y-2'>
                                <h3 className='text-2xl text-gray-800'>$33M</h3>
                                <p className='text-sm text-gray-400 leading-relaxed'>
                                    GMV from creator conversions in the first year
                                </p>
                            </div>
                            <div className='flex-1 bg-gray-100 rounded-xl p-6 space-y-2'>
                                <h3 className='text-2xl text-gray-800'>187</h3>
                                <p className='text-sm text-gray-400 leading-relaxed'>
                                    Active brands, nearly 1/3 of all customer
                                </p>
                            </div>
                            <div className='flex-1 bg-gray-100 rounded-xl p-6 space-y-2'>
                                <h3 className='text-2xl text-gray-800'>2M</h3>
                                <p className='text-sm text-gray-400 leading-relaxed'>
                                    Active creators generating conversions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-center gap-16 pb-[80px] sm:pb-[100px] items-baseline' data-cursor="scroll">
                    <Marquee autoFill={true}>
                        <div className='flex flex-row justify-center ml-3 mr-3 sm:ml-4 sm:mr-4'>
                            <h1 className='text-gray-800 font-sora text-[60px] sm:text-[56px] font-medium tracking-tighter'>+</h1>
                        </div>
                        <div className='flex flex-row justify-center ml-3 mr-3 sm:ml-4 sm:mr-4'>
                            <h1 className='text-gray-800 font-sora text-[60px] sm:text-[56px] font-medium tracking-tighter'>More</h1>
                        </div>
                        <div className='flex flex-row justify-center ml-3 mr-3 sm:ml-4 sm:mr-4'>
                            <h1 className='text-gray-800 font-sora text-[60px] sm:text-[56px] font-medium tracking-tighter'>projects</h1>
                        </div>
                    </Marquee>
                </div>

                <div className='grid grid-cols-1 pl-6 pr-6 gap-4 sm:grid-cols-3 pb-[80px] sm:pb-[150px] sm:pl-12 sm:pr-12 sm:gap-4' data-cursor="view">
                    <Link to="/project-pleez" className='cursor-none'>
                        <div className="bg-[url(/images/final-imgs/pleez/pleez-thumb-main.jpg)] w-full aspect-square flex items-center justify-center bg-cover cursor-none"></div>
                    </Link>

                    <Link to="/project-viplan" className='cursor-none'>
                        <div className='bg-[url(/images/final-imgs/viplan/viplan-thumb-main.jpg)] w-full aspect-square flex items-center justify-center bg-cover cursor-none'></div>
                    </Link>
                    <Link to="/" className='cursor-none'>
                        <div className='bg-[url(/images/final-imgs/Sf-tiktokshop/tts-thumb-main.jpg)] w-full aspect-square flex items-center justify-center bg-cover cursor-none'></div>
                    </Link>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default ProjectTiktok;


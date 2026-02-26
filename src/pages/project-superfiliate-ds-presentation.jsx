import React, { useState, useEffect } from 'react';
import TopBar from '../components/topbar.jsx';
import CustomCursor from '../components/customcursor.jsx';
import AnimatedContent from '../components/animatedcontent.jsx';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Footer from '../components/footer.jsx';

function ProjectSuperfiliateDsPresentation() {

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
                <TopBar/>

                <div id="project-heading" className='w-full flex flex-col cursor-none bg-gray-50 pt-44 pb-20 pl-6 pr-6 gap-[80px] sm:pt-56 sm:pl-20 sm:pr-20 sm:pb-[80px] sm:gap-[80px]' data-cursor="scroll">
                    <div className='flex flex-col w-full gap-[40px]'> 
                        <h6 className='text-gray-900 text-[18px] uppercase'>SUPERFILIATE</h6>
                        <h2 className='text-gray-900 text-[30px] sm:text-[48px] max-w-2/3'>Building the Superfiliate<br></br>Design System</h2>
                    </div>
                    <div className='w-full flex flex-row flex-start gap-[100px]'>
                        <div className='flex flex-col gap-2 items-start'>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>creators econ</h2>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>B2B</h2>
                        </div>
                        
                        <div className='flex flex-col gap-2 items-start'>
                            <h3 className='text-gray-500 text-xs'>WORK</h3>     
                            <h2 className='text-gray-900 text-base font-medium uppercase'>design system</h2>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>UI DESIGN</h2>
                        </div>
                        
                        <div className='flex flex-col gap-2 items-start'>
                            <h3 className='text-gray-500 text-xs'>DELIVERABLES</h3>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>component library</h2>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>tokens table</h2>
                            <h2 className='text-gray-900 text-base font-medium uppercase'>figma docs</h2>
                        </div>
                    </div>
                </div>

                <AnimatedContent
                    distance={20}
                    direction="vertical"
                    reverse={false}
                    duration={1.3}
                    ease="power1.out"
                    initialOpacity={0.0}
                    animateOpacity
                    scale={1}
                    threshold={0.0}
                    delay={0.3}
                >
                    <div id="img-1" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                        <img className="hidden sm:block sm:aspect-video object-cover" src="/images/final-imgs/Superfiliate DS/first-cover.jpg" /> 
                        <img className="block sm:hidden aspect-[4/5] object-cover" src="/images/final-imgs/Superfiliate DS/first-cover.jpg" /> 
                    </div>
                </AnimatedContent>

                <div className='w-full max-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>The Problem Worth Solving</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        We had a Figma component library with primitive tokens and basic components, but the engineering team had their own separate system — not aligned with ours. We started to notice designers making small changes to components without using tokens properly, with no rules for interactions or any thought around scalability for more complex components.
                        <br></br>
                        <br></br>
                        Engineers could go in two paths: get slowed down making those small changes, considering the designer was the source of truth, or use a similar token from their own library — they were using Tailwind at the time. We were running into chaos, right as we were entering a high growth moment as a company. The things that were simple to create design parity at that time would become a huge design debt.
                    </p>
                </div>

                {/* Serie de imagens 1 */} 
                <div id="img-1" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                        <img className="hidden sm:block sm:aspect-video object-cover" src="/images/final-imgs/Superfiliate DS/opportunity.jpg" /> 
                    </div>
               

                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>The Opportunity</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        That was the moment I saw the great opportunity to start thinking about scaling our design within a design system. The team was still small — 3 designers. The implemented component library wasn't that big yet. It would be the ideal moment to grow not only the components themselves, but design patterns and principles alongside as we hired more designers.
                        <br></br>
                        <br></br>
                        The first thing I did, alongside the Head of Design, was to gather with the engineering team leader and raise the conversation on why we should think about this at that moment. Our Head of Design was sold on the idea and helped us articulate the decision making. The funny thing is, when you talk with other designers about design systems, they usually know what you mean — but with engineers, at least ours, the concept wasn't clear at the beginning.
                        <br></br>
                        <br></br>
                        Their initial pushback was around effort — as an early-stage startup, they had a lot of work packed into small sprints, and no dedicated engineer could be assigned to the design system without losing capacity on product work. So before anything else, I had to frame the concept itself. I put together a presentation covering what a design system actually is, brought in real-world references like the Wise and Shopify design systems, and laid out an MVP vision for where we could start — tokens and basic components first.
                        <br></br>
                        <br></br>
                        A design system, in practice, is a synced component library and a set of design patterns used to scale design across the product — and eventually the whole organization. From there, the conversation shifted to trade-offs: the effort we put in now versus the smoother workflow we'd unlock in the future, and how that investment would let engineers move faster and designers work with more consistency. What shifted for them was the understanding that the system wasn't extra work — it was the thing that would eventually remove work. We weren't going to build the world, but we left that conversation aligned on what was possible, and with both teams bought in.
                    </p>
                </div>

                <div className='w-full flex flex-col pl-6 pr-6 gap-[24px] sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    {/* Double image */}
                    <div className='flex flex-row gap-[24px]'>
                        <div className='aspect-square max-w-2/5'> 
                            <img className="object-fill" src="/images/final-imgs/Superfiliate DS/image-governance.jpg" alt="Viplan project thumbnail" />
                        </div>
                        <div className='max-w-3/4 bg-sky-500'> 
                            <img className="block object-cover h-[100%]" src="/images/final-imgs/Superfiliate DS/image-storrybook.jpg" alt="Viplan project thumbnail" />
                        </div>
                    </div>
                </div>

                
                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>How We Began</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        Once they were sold on the idea, I was the one in charge of taking the design system from 0 to 1. I proposed a council structure — a weekly meeting where I would lead the design strategy, define the token architecture, and own all Figma deliverables, while the engineering lead would own the Storybook implementation. I served as the bridge between both worlds. The council was made up of the Head of Design, myself, and the lead engineer.
                        <br></br>
                        <br></br>
                        We had challenges and questions ahead: Where to start designing the system? How would we guarantee design-to-code parity? Who would be able to evolve the design system?
                    </p>
                </div>

               {/* Serie de imagens 2 */}

                <div className='w-full flex flex-col pl-6 pr-6 gap-[24px] sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    {/* Double image */}
                    <div className='flex flex-row gap-[24px]'>
                        <div className='aspect-square max-w-1/4'> 
                            <img className="object-fill" src="/images/final-imgs/Superfiliate DS/tokens-1.jpg" alt="Viplan project thumbnail" />
                        </div>
                        <div className='max-w-3/4 bg-sky-500'> 
                            <img className="block object-cover h-[100%]" src="/images/final-imgs/Superfiliate DS/tokens-2.jpg" alt="Viplan project thumbnail" />
                        </div>
                    </div>

                    {/* Single image */}
                    <div className='w-full bg-cover aspect-5/2 bg-[url(/images/final-imgs/Superfiliate%20DS/tokens-3.jpg)]'>    
                    </div>

                    {/* Triple image */}
                    <div className='flex flex-row gap-[24px]'>
                        <div className='aspect-square max-w-1/3'> 
                            <img className="object-fill" src="/images/final-imgs/Superfiliate DS/tokens-4.jpg" alt="Viplan project thumbnail" />
                        </div>
                        <div className='aspect-square max-w-1/3'> 
                            <img className="object-fill" src="/images/final-imgs/Superfiliate DS/tokens-5.jpg" alt="Viplan project thumbnail" />
                        </div>
                        <div className='aspect-square max-w-1/3'> 
                            <img className="object-fill" src="/images/final-imgs/Superfiliate DS/tokens-6.jpg" alt="Viplan project thumbnail" />
                        </div>
                    </div>
                </div>

                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>The Token Foundation</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        The design strategy was to consolidate a token structure first. The design strategy was to consolidate a token structure first. I started by defining the primitive layer — the raw values for colors and spacing that would serve as the foundation. From there, I built a semantic layer on top, where designers could use tokens intentionally rather than picking arbitrary values. This allowed us to create a more consistent and scalable design system.
                        <br></br>
                        <br></br>
                        A color like blue-300 became surface-info-1. A spacing value like spacing-8 became border-radius-rounded-lg. This naming contract was what made the system meaningful — instead of a library of values, it became a shared language. We also set it up deliberately in Figma Variables, so that when applying colors to a frame, only surface tokens would be available to use. That constraint alone solved a significant part of the consistency problem we were facing. Without this intentional setup, designers would still have room for ambiguity — and design-to-code parity would be coincidental, not structural.
                    </p>
                </div>

                {/* Serie de imagens 3 */}
                <div className='w-full flex flex-col pl-6 pr-6 gap-[24px] sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    
                    {/* Double image */}
                    <div className='flex flex-row gap-[24px] w-full h-auto'>
                        <div className='w-1/2 bg-sky-500 aspect-4/5 bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/comp-1.jpg)]'> 
                        </div>
                        <div className='w-1/2 bg-sky-500 aspect-4/5 bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/comp-2.jpg)]'> 
                        </div>
                    </div>

                    {/* Double image 2 */}
                    <div className='flex flex-row gap-[24px] w-full h-[660px]'>
                        <div className='w-1/3 bg-sky-500 bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/comp-3.jpg)]'> 
                        </div>
                        <div className='w-2/3 bg-sky-500 bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/comp-4.jpg)]'> 
                        </div>
                    </div>

                    {/* Single image */}
                    <div className='w-full bg-cover aspect-video bg-[url(/images/final-imgs/Superfiliate%20DS/comp-5.jpg)]'>    
                    </div>
                </div>

                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>Building the Components and Documentation</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        We had some basic components already in code, so we audited those and made our Figma file match that. We also needed a place where developers would consume these components — we decided to use Storybook for them and Figma for us, so each team could keep documentation in the tool they were most used to. When designing new components, engineers would be able to inspect the Figma and use it as the source of truth, since we were building with the same design tokens.
                        <br></br>
                        <br></br>
                        We defined components using the atomic design approach — tokens as atoms, basic components as molecules, and more complex components as organisms — guaranteeing modularity. We also made sure our components would follow a basic standard of accessibility: color contrast following WCAG, focus states always visible, and touch areas within the minimum of 44px, as we also supported mobile for customers.                    </p>
                </div>

                {/* Serie de imagens 3 */}
                <div id="img-3" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    {lottieData1 ? (
                        <div className='w-full'>
                            <Lottie 
                                animationData={lottieData1}
                                loop={true}
                                autoplay={true}
                                className='w-full h-full'
                            />
                        </div>
                    ) : (
                        <div className='w-full sm:aspect-video bg-gray-200 rounded-xl flex items-center justify-center'>
                            <p className='text-gray-500'>Loading animation...</p>
                        </div>
                    )}
                </div>

                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>How We Evolved the Design</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        Once we had the tokens defined and largely adopted by both teams, the component library naturally started to grow with the product. But growth also revealed new pressure points. As feature volume increased and the design team expanded, the cracks became visible — new designers onboarding would make their own visual decisions, the same UI patterns would end up built differently across features, and engineering kept rebuilding similar components from scratch sprint after sprint. And as new feature requirements came in, designers were having to break existing patterns to make things fit — a sign that what we had was too rigid to scale.
                        <br></br>
                        <br></br>
                        Those observations shaped the three pillars we built the system around. Consistency — creating a cohesive experience that feels familiar across different screens and interactions, defining copy and icon semantic values. Scalability — ensuring components and patterns could grow and evolve alongside the product, by understanding the main user flows across features and solving for the main ones, which made it easier to solve for the new ones appearing. Flexibility — balancing rigid standards with the ability for components to adapt to various needs and contexts, avoiding overly complex components and instead combining smaller ones, always considering responsivity. We also went beyond components and defined page templates, so designers could save time deciding how to start their designs.
                    </p>
                </div>

                {/* Serie de imagens 3 */}
                <div id="img-1" className='w-full flex flex-col pl-6 pr-6 sm:pl-12 gap-[24px] sm:pr-12 gap-[24px] justify-center items-center cursor-none' data-cursor="scroll">
                        <img className="hidden sm:block sm:aspect-video object-cover" src="/images/final-imgs/Superfiliate DS/board.jpg" /> 
                        <img className="hidden sm:block w-full object-cover" src="/images/final-imgs/Superfiliate DS/governance.jpg" /> 
                </div>

                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>Governance & How the System Stayed Alive</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                    The design system council met once a week, bringing together all designers and any engineers who wanted to be involved in evolving the system. Every designer participated by default. The contribution model was open — anyone could bring a proposal to the table, whether it was a new component need or a change to an existing one.
                        <br></br>
                        <br></br>
                        For new components, we would evaluate whether the pattern could scale and be applied consistently across the product before committing to building it. For existing components, we assessed through three lenses: uniqueness — whether the existing component already solved the problem; consistency — whether we could evolve it to solve the problem without breaking other uses; and reusability — whether the solution could serve other parts of the product beyond the original request.
                        <br></br>
                        <br></br>
                        Once approved by the council, the designer responsible would make the changes in Figma and create the documentation, while the engineer from that project would implement it and document it in Storybook. To keep everything visible, I created and maintained a Kanban board that we reviewed at every council meeting — so nothing got lost between sprints and priorities stayed clear for both teams
                    </p>
                </div>

                {/* Serie de imagens 3  ta certo */} 
               <div className='w-full flex flex-col pl-6 pr-6 gap-[24px] sm:pl-12 sm:pr-12 justify-center items-center cursor-none' data-cursor="scroll">
                    {/* Double image 2 */}
                    <div className='flex flex-row gap-[24px] w-full h-[660px]'>
                        <div className='w-2/3 bg-sky-500 bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/finale-1.jpg)]'> 
                        </div>
                        <div className='w-1/3 bg-sky-500 bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/finale-2.jpg)]'> 
                        </div>
                    </div>
                    
                    {/* Double image */}
                    <div className='flex flex-row gap-[24px] w-full h-auto'>
                        <div className='w-1/2 bg-sky-500 aspect-square bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/finale-3.jpg)]'> 
                        </div>
                        <div className='w-1/2 bg-sky-500 aspect-square bg-cover bg-[url(/images/final-imgs/Superfiliate%20DS/finale-4.jpg)]'> 
                        </div>
                    </div>

                </div>



                <div className='w-full min-h-[800px] flex flex-row pt-[80px] pl-6 pr-6 pb-[80px] sm:pt-[200px] sm:pl-20 sm:pr-20 sm:pb-[200px] gap-[80px] cursor-none' data-cursor="scroll">
                    <h2 className='w-1/2 text-gray-900 text-[30px]'>Impact and Results</h2>
                    <p className='w-1/2 h-100% text-gray-500 text-[16px] leading-[150%] sm:w-2/3'>
                        Our design system is far from perfect. It is ongoing work and a daily effort to make sure people believe in and engage with the design system proposal — even more so with a large product that connects many different user flows.
                        <br></br><br></br>
                        Created a dark mode-ready framework, ensuring theming could be implemented without friction.
                        <br></br><br></br>
                        <ul>
                            <li>• We doubled the design team from 3 to 6 designers without accumulating design debt. </li>
                            <li>• 20 engineers were actively consuming components through Storybook. </li>
                            <li>• The Figma library was averaging 12.4K monthly inserts across projects, a signal of real, ongoing adoption, not just initial buy-in. </li>
                            <li>• The system grew to 192 components, covering the full range from tokens to complex organisms. </li>    
                            <li>• We evolved the product from 1 vertical to 3, serving users across three distinct personas, and the design system supported that entire evolution without needing to be rebuilt from scratch. </li>
                        </ul>
                        <br></br>
                        Designers engaged in design system contribution, so it was no longer a fight every time someone wanted to evolve or make changes. Engineers didn't need to guess anymore — on sprint projects, the tokens and basic components enabled them to develop without doubting the design proposition. We hit adoption easily because the benefits were clear for both teams, and we could hold people accountable because they were participating in the process.                    
                        </p>
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

                <Footer/>
            </div>
        </>
    );
}

export default ProjectSuperfiliateDsPresentation;
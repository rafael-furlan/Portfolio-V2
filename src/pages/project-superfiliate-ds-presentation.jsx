import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';

const DS_IMG = '/images/final-imgs/Superfiliate%20DS';

function ProjectImg({ src, className = '' }) {
    return (
        <img
            className={`w-full rounded-[5px] object-cover ${className}`}
            src={`${DS_IMG}/${src}`}
            alt=""
        />
    );
}

function ProjectSuperfiliateDsPresentation() {

    const [lottieData1, setLottieData1] = useState(null);
    const [lottieData2, setLottieData2] = useState(null);
    const [lottieData3, setLottieData3] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Superfiliate Design System — Rafael Furlan';

        const loadLottieAnimations = async () => {
            try {
                const response1 = await fetch(`${DS_IMG}/light-to-dark-new.json`);
                const data1 = await response1.json();
                setLottieData1(data1);

                const response2 = await fetch('/images/project-placeholders/superfiliate/Scene (1).json');
                const data2 = await response2.json();
                setLottieData2(data2);

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
        <div className="w-full min-h-screen flex flex-col bg-white">
            <div className="w-full max-w-[680px] mx-auto px-6 pt-16 pb-24 flex flex-col">

                {/* Back link */}
                <Link to="/" className="text-gray-400 text-sm mb-8 hover:text-[#3D3D3D] transition-colors">← Superfiliate / Design system</Link>

                {/* Title */}
                <h1 className="text-gray-900 text-2xl font-medium mb-6">Building the Superfiliate Design System V1</h1>

                {/* Intro text */}
                <div className="flex flex-col gap-4 mb-12">
                    <p className="text-gray-900 text-[15px] leading-relaxed">
                        We had a Figma component library with primitive tokens and basic components, but the engineering team had their own separate system — not aligned with ours. We started to notice designers making small changes to components without using tokens properly, with no rules for interactions or any thought around scalability for more complex components.
                    </p>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                        Engineers could go in two paths: get slowed down making those small changes, considering the designer was the source of truth, or use a similar token from their own library — they were using Tailwind at the time. We were running into chaos, right as we were entering a high growth moment as a company. The things that were simple to create design parity at that time would become a huge design debt.
                    </p>
                </div>

                {/* Cover image */}
                <div className="project-media aspect-video mb-12">
                  <ProjectImg src="first-cover.jpg" className="h-full" />
                </div>

                {/* The Opportunity */}
                <ProjectImg src="opportunity.jpg" className="project-media block mb-12" />
                <h2 className="text-gray-900 text-lg font-medium mt-12 mb-4">The Opportunity</h2>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
                    That was the moment I saw the great opportunity to start thinking about scaling our design within a design system. The team was still small — 3 designers. The implemented component library wasn't that big yet. It would be the ideal moment to grow not only the components themselves, but design patterns and principles alongside as we hired more designers.
                    <br /><br />
                    The first thing I did, alongside the Head of Design, was to gather with the engineering team leader and raise the conversation on why we should think about this at that moment. Our Head of Design was sold on the idea and helped us articulate the decision making. The funny thing is, when you talk with other designers about design systems, they usually know what you mean — but with engineers, at least ours, the concept wasn't clear at the beginning.
                    <br /><br />
                    Their initial pushback was around effort — as an early-stage startup, they had a lot of work packed into small sprints, and no dedicated engineer could be assigned to the design system without losing capacity on product work. So before anything else, I had to frame the concept itself. I put together a presentation covering what a design system actually is, brought in real-world references like the Wise and Shopify design systems, and laid out an MVP vision for where we could start — tokens and basic components first.
                    <br /><br />
                    A design system, in practice, is a synced component library and a set of design patterns used to scale design across the product — and eventually the whole organization. From there, the conversation shifted to trade-offs: the effort we put in now versus the smoother workflow we'd unlock in the future, and how that investment would let engineers move faster and designers work with more consistency. What shifted for them was the understanding that the system wasn't extra work — it was the thing that would eventually remove work. We weren't going to build the world, but we left that conversation aligned on what was possible, and with both teams bought in.
                </p>

                {/* Double image: governance + storybook */}
                <div className="project-media flex gap-4 mb-12 items-start">
                    <div className="w-[33%] min-w-0 shrink-0">
                        <ProjectImg src="image-governance.jpg" className="aspect-square" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <ProjectImg src="image-storrybook.jpg" />
                    </div>
                </div>

                {/* How We Began */}
                <h2 className="text-gray-900 text-lg font-medium mt-12 mb-4">How We Began</h2>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
                    Once they were sold on the idea, I was the one in charge of taking the design system from 0 to 1. I proposed a council structure — a weekly meeting where I would lead the design strategy, define the token architecture, and own all Figma deliverables, while the engineering lead would own the Storybook implementation. I served as the bridge between both worlds. The council was made up of the Head of Design, myself, and the lead engineer.
                    <br /><br />
                    We had challenges and questions ahead: Where to start designing the system? How would we guarantee design-to-code parity? Who would be able to evolve the design system?
                </p>

                {/* Token images: double */}
                <div className="project-media flex gap-4 mb-4 items-start">
                    <div className="w-1/4 min-w-0 shrink-0">
                        <ProjectImg src="tokens-1.jpg" className="aspect-square" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <ProjectImg src="tokens-2.jpg" />
                    </div>
                </div>

                {/* Token images: single */}
                <ProjectImg src="tokens-3.jpg" className="project-media block mb-4 aspect-[2688/1128]" />

                {/* Token images: triple */}
                <div className="project-media flex gap-4 mb-12">
                    <div className="flex-1 min-w-0">
                        <ProjectImg src="tokens-4.jpg" className="aspect-square" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <ProjectImg src="tokens-5.jpg" className="aspect-square" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <ProjectImg src="tokens-6.jpg" className="aspect-square" />
                    </div>
                </div>

                {/* The Token Foundation */}
                <h2 className="text-gray-900 text-lg font-medium mt-12 mb-4">The Token Foundation</h2>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
                    The design strategy was to consolidate a token structure first. The design strategy was to consolidate a token structure first. I started by defining the primitive layer — the raw values for colors and spacing that would serve as the foundation. From there, I built a semantic layer on top, where designers could use tokens intentionally rather than picking arbitrary values. This allowed us to create a more consistent and scalable design system.
                    <br /><br />
                    A color like blue-300 became surface-info-1. A spacing value like spacing-8 became border-radius-rounded-[5px]. This naming contract was what made the system meaningful — instead of a library of values, it became a shared language. We also set it up deliberately in Figma Variables, so that when applying colors to a frame, only surface tokens would be available to use. That constraint alone solved a significant part of the consistency problem we were facing. Without this intentional setup, designers would still have room for ambiguity — and design-to-code parity would be coincidental, not structural.
                </p>

                {/* Component images: double 1 */}
                <div className="project-media flex gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                        <ProjectImg src="comp-1.jpg" className="aspect-[4/5]" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <ProjectImg src="comp-2.jpg" className="aspect-[4/5]" />
                    </div>
                </div>

                {/* Component images: double 2 */}
                <div className="project-media flex gap-4 mb-4 aspect-[1080/660]">
                    <div className="w-1/3 min-w-0 h-full">
                        <ProjectImg src="comp-3.jpg" className="h-full" />
                    </div>
                    <div className="w-2/3 min-w-0 h-full">
                        <ProjectImg src="comp-4.jpg" className="h-full" />
                    </div>
                </div>

                {/* Component images: single */}
                <ProjectImg src="comp-5.jpg" className="project-media block mb-12 aspect-video" />

                {/* Building the Components and Documentation */}
                <h2 className="text-gray-900 text-lg font-medium mt-12 mb-4">Building the Components and Documentation</h2>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
                    We had some basic components already in code, so we audited those and made our Figma file match that. We also needed a place where developers would consume these components — we decided to use Storybook for them and Figma for us, so each team could keep documentation in the tool they were most used to. When designing new components, engineers would be able to inspect the Figma and use it as the source of truth, since we were building with the same design tokens.
                    <br /><br />
                    We defined components using the atomic design approach — tokens as atoms, basic components as molecules, and more complex components as organisms — guaranteeing modularity. We also made sure our components would follow a basic standard of accessibility: color contrast following WCAG, focus states always visible, and touch areas within the minimum of 44px, as we also supported mobile for customers.
                </p>

                {/* Lottie animation 1 */}
                {lottieData1 ? (
                    <div className="project-media mb-12">
                        <Lottie
                            animationData={lottieData1}
                            loop={true}
                            autoplay={true}
                            className="w-full h-full"
                        />
                    </div>
                ) : (
                    <div className="project-media aspect-video bg-gray-100 rounded-[5px] flex items-center justify-center mb-12">
                        <p className="text-gray-400 text-sm">Loading animation...</p>
                    </div>
                )}

                {/* How We Evolved the Design */}
                <h2 className="text-gray-900 text-lg font-medium mt-12 mb-4">How We Evolved the Design</h2>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
                    Once we had the tokens defined and largely adopted by both teams, the component library naturally started to grow with the product. But growth also revealed new pressure points. As feature volume increased and the design team expanded, the cracks became visible — new designers onboarding would make their own visual decisions, the same UI patterns would end up built differently across features, and engineering kept rebuilding similar components from scratch sprint after sprint. And as new feature requirements came in, designers were having to break existing patterns to make things fit — a sign that what we had was too rigid to scale.
                    <br /><br />
                    Those observations shaped the three pillars we built the system around. Consistency — creating a cohesive experience that feels familiar across different screens and interactions, defining copy and icon semantic values. Scalability — ensuring components and patterns could grow and evolve alongside the product, by understanding the main user flows across features and solving for the main ones, which made it easier to solve for the new ones appearing. Flexibility — balancing rigid standards with the ability for components to adapt to various needs and contexts, avoiding overly complex components and instead combining smaller ones, always considering responsivity. We also went beyond components and defined page templates, so designers could save time deciding how to start their designs.
                </p>

                {/* Board and governance images */}
                <ProjectImg src="board.jpg" className="project-media block mb-4" />
                <ProjectImg src="governance.jpg" className="project-media block mb-12" />

                {/* Governance & How the System Stayed Alive */}
                <h2 className="text-gray-900 text-lg font-medium mt-12 mb-4">Governance & How the System Stayed Alive</h2>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
                    The design system council met once a week, bringing together all designers and any engineers who wanted to be involved in evolving the system. Every designer participated by default. The contribution model was open — anyone could bring a proposal to the table, whether it was a new component need or a change to an existing one.
                    <br /><br />
                    For new components, we would evaluate whether the pattern could scale and be applied consistently across the product before committing to building it. For existing components, we assessed through three lenses: uniqueness — whether the existing component already solved the problem; consistency — whether we could evolve it to solve the problem without breaking other uses; and reusability — whether the solution could serve other parts of the product beyond the original request.
                    <br /><br />
                    Once approved by the council, the designer responsible would make the changes in Figma and create the documentation, while the engineer from that project would implement it and document it in Storybook. To keep everything visible, I created and maintained a Kanban board that we reviewed at every council meeting — so nothing got lost between sprints and priorities stayed clear for both teams
                </p>

                {/* Finale images: double 1 (2/3 + 1/3) */}
                <div className="project-media flex gap-4 mb-4 aspect-[1080/660]">
                    <div className="w-2/3 min-w-0 h-full">
                        <ProjectImg src="finale-1.jpg" className="h-full" />
                    </div>
                    <div className="w-1/3 min-w-0 h-full">
                        <ProjectImg src="finale-2.jpg" className="h-full" />
                    </div>
                </div>

                {/* Finale images: double 2 */}
                <div className="project-media flex gap-4 mb-12">
                    <div className="flex-1 min-w-0">
                        <ProjectImg src="finale-3.jpg" className="aspect-square" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <ProjectImg src="finale-4.jpg" className="aspect-square" />
                    </div>
                </div>

                {/* Impact and Results */}
                <h2 className="text-gray-900 text-lg font-medium mt-12 mb-4">Impact and Results</h2>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
                    Our design system is far from perfect. It is ongoing work and a daily effort to make sure people believe in and engage with the design system proposal — even more so with a large product that connects many different user flows.
                </p>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
                    Created a dark mode-ready framework, ensuring theming could be implemented without friction.
                </p>
                <ul className="text-gray-500 text-[15px] leading-relaxed mb-4 flex flex-col gap-1">
                    <li>• We doubled the design team from 3 to 6 designers without accumulating design debt.</li>
                    <li>• 20 engineers were actively consuming components through Storybook.</li>
                    <li>• The Figma library was averaging 12.4K monthly inserts across projects, a signal of real, ongoing adoption, not just initial buy-in.</li>
                    <li>• The system grew to 192 components, covering the full range from tokens to complex organisms.</li>
                    <li>• We evolved the product from 1 vertical to 3, serving users across three distinct personas, and the design system supported that entire evolution without needing to be rebuilt from scratch.</li>
                </ul>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                    Designers engaged in design system contribution, so it was no longer a fight every time someone wanted to evolve or make changes. Engineers didn't need to guess anymore — on sprint projects, the tokens and basic components enabled them to develop without doubting the design proposition. We hit adoption easily because the benefits were clear for both teams, and we could hold people accountable because they were participating in the process.
                </p>

            </div>
        </div>
    );
}

export default ProjectSuperfiliateDsPresentation;

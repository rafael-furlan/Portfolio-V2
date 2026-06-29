import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function PlaceholderImage() {
  return (
    <div className="project-media aspect-video bg-gray-100 rounded-[5px] flex items-center justify-center mb-12">
      <p className="text-gray-400 text-sm">Image placeholder</p>
    </div>
  );
}

function ProjectVideo({ src }) {
  return (
    <div className="project-media aspect-video mb-12">
      <video
        className="w-full h-full rounded-[5px] object-cover border border-black/10"
        src={src}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}

function ProjectCreatorDiscovery() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Discovery on autopilot — Rafael Furlan';
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <div className="w-full max-w-[680px] mx-auto px-6 pt-16 pb-24 flex flex-col">
        <Link to="/" className="text-gray-400 text-sm mb-8 hover:text-[#3D3D3D] transition-colors">← Superfiliate / Product design</Link>

        <h1 className="text-gray-900 text-2xl font-medium mb-6">Discovery on autopilot</h1>

        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          Influencer marketers had a discovery tool. It returned creators. It didn't help them decide which ones were worth their time.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          Results came from Meta's API — too broad or too narrow depending on the day. No signal separated a good fit from noise. Marketers spent hours scrolling through profiles, manually evaluating content, saving names to lists, and starting over when the list missed the mark. When the API failed, there was no way to explain why or fix it. The tool ran on infrastructure we couldn't monitor or control, and it was buried inside a Meta Ads channel built for a different persona entirely.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          The problem didn't go away because the tool existed.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          I chose to build within that constraint rather than wait for the infrastructure to change. That decision turned out to surface a larger one: discovery didn't belong inside the Ads channel at all. The work made that visible at the roadmap level. Discovery is now moving into its own hub, with separate pricing.
        </p>

        <PlaceholderImage />

        <h2 className="text-gray-900 text-lg font-medium mb-4">Approach</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          In Sprint 1, engineering tested AI creator scoring. I tested the creation flow: filters plus a free-text prompt describing the creator vibe. The AI would score creators against it.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          It broke in two ways. The full analysis took up to four hours with no reference point — users expected a search. And users didn't know how to write a useful prompt. Vague inputs, vague results, nothing to help them do better.
        </p>

        <PlaceholderImage />

        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          In Sprint 2, the CPO added a requirement: delightful enough for product marketing videos. I read it as a structural constraint, not a visual one. Delight requires something to happen in front of you. That reframe changed the direction. The chat pattern solves the prompt problem without adding engineering complexity — it teaches you how to interact with it as you go. A form doesn't.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          The important detail: I didn't build a real conversational AI interface. Engineering capacity didn't exist for that. Instead, a guided creation flow that borrows the structure of AI chat — the system speaks, the user responds, the system confirms and advances — while the underlying mechanics are structured inputs. The chat is the UI. The guidance is real. The conversation is simulated.
        </p>

        <ProjectVideo src="/images/final-imgs/disocvery-autopilot/creator-disc-1.mov" />

        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          Creator Discovery lives inside the Meta Ads channel — accessible from the left nav, one level below Ad Partners. From here, marketers can run a keyword search or launch the Autopilot. The entry point stays the same either way; the Autopilot surfaces as a prompt at the top of the table, inviting the marketer to describe what they're looking for. The results land in a named list — scoped to a campaign, reviewable immediately.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          The Autopilot opens to a blank canvas. No filters to configure, no prompt field waiting for input. The guided flow starts when the marketer is ready — the system leads from there.
        </p>

        <ProjectVideo src="/images/final-imgs/disocvery-autopilot/creator-disc-chat.mov" />

        <h2 className="text-gray-900 text-lg font-medium mb-4">Time approach</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          The four-hour wait from Sprint 1 became twelve to fifteen minutes. Still long enough to lose someone. I treated it as three separate problems. The first was transparency: named progress stages with real numbers — "200 creators matched," "6,000 videos scanned" — so the system reads as working, not frozen. The second was expectation alignment: an estimated completion time shown before the autopilot launches, so the marketer has a reference point instead of an open-ended wait. The third was the sharpest call: changing when value is delivered. Results previously appeared only after the full analysis completed. I restructured it so creators surface round by round — the moment one clears the scoring threshold, they appear in the table. The wait becomes productive rather than passive.
        </p>

        <ProjectVideo src="/images/final-imgs/disocvery-autopilot/creator-discovery-time.mov" />

        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          The PromptInput component was built into the design system — documented in Storybook with its full state set: default, thinking, and thinking transition. The Reasoning column follows the same logic. The previous tool returned a list with no explanation behind it. Marketers either trusted it or verified it manually. Making the AI's judgment auditable — readable, disagreeable, actionable — was the accountability layer the tool was missing. Approve and dismiss decisions feed an auto-improve loop that refines future searches.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          The component exists in the system. The reasoning exists in the results. Both are there so the next version has something to build on.
        </p>

        <ProjectVideo src="/images/final-imgs/disocvery-autopilot/storybook.mov" />

        <h2 className="text-gray-900 text-lg font-medium mb-4">The completed state</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          6,000 posts scanned across 200 creators, 18 shortlisted. The left panel summarizes what ran; the right panel shows who made it and why.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          Every row in the results table has a Reasoning column and two actions: approve or dismiss. Those decisions aren't just review — they feed back into the autopilot. Each approve or dismiss refines the next search, so the brief improves without the marketer having to rewrite it. The system learns from judgment, not just from inputs.
        </p>

        <ProjectVideo src="/images/final-imgs/disocvery-autopilot/finale.mov" />
      </div>
    </div>
  );
}

export default ProjectCreatorDiscovery;

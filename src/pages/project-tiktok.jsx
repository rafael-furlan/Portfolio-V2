import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProjectTiktok() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Discovery on autopilot — Rafael Furlan';
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <div className="w-full max-w-[610px] mx-auto px-6 pt-16 pb-24 flex flex-col">
        <Link to="/" className="text-gray-400 text-sm mb-8 hover:text-[#3D3D3D] transition-colors">← Superfiliate / Product design</Link>

        <h1 className="text-gray-900 text-2xl font-medium mb-6">From buzz to $33M GMV</h1>

        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          Superfiliate helps brands run creator and affiliate programs at scale. When TikTok Shop launched its Beta API in the US, there was a real opportunity to become one of the first official partners.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          The problem was that the API was incomplete, the user workflow was entirely unknown, and we had under two months to make it happen.
        </p>

        <div className="w-[980px] max-w-[calc(100vw-48px)] relative left-1/2 -translate-x-1/2 aspect-video mb-12">
          <img className="w-full h-full rounded-[5px] object-cover" src="/images/final-imgs/Sf-tiktokshop/tw-bet-3.png" />
        </div>

        <h2 className="text-gray-900 text-lg font-medium mb-4">The bet</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          Before anything else, I needed to understand what we were actually dealing with. I mapped the internal TikTok Shop flow, ran secondary research through YouTube and creator blogs, and went deep on the API documentation alongside the engineers.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          That work surfaced something important: the API was more incomplete than it first appeared. Key endpoints were missing, the full user workflow was unclear, and some of what we'd assumed we could build wasn't confirmed yet.
        </p>

        <img className="w-full rounded-[5px] object-cover mb-12" src="/images/final-imgs/Sf-tiktokshop/product-invetory.png" />

        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          Which put us in front of a real decision. Wait for the API to mature — or ship something now. Waiting would give us conversations. Shipping would give us something real to put in people's hands.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          The engineer had a legitimate concern: we still couldn't fully scope the project. But the PM and I pushed to launch anyway. I mapped the full platform against what the API could actually support and shared both views side by side with the CPO — not to sell the vision, but to make the gap intentional.
        </p>

        <img className="w-full rounded-[5px] object-cover mb-12" src="/images/final-imgs/Sf-tiktokshop/bot.jpg" />

        <h2 className="text-gray-900 text-lg font-medium mb-4">The discovery</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          After launch, the PM and I booked calls with influencer agencies that were actively running TikTok Shop programs. We wanted to watch how they actually worked — which tools they used, where they started.
          <br /><br />
          We went in expecting spreadsheets. That's the default for influencer marketers. We were wrong about what mattered most.
        </p>

        <img className="w-full rounded-[5px] object-cover mb-12" src="/images/final-imgs/Sf-tiktokshop/research.png" />

        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          The first thing that stopped us: they showed us the software they used to find and invite creators. Not a spreadsheet. A bot — scraping TikTok data, no official API access. But it had good UX. Someone had invested real effort into building it. One agency used a third-party version. Another brand had built their own from scratch.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          That's not a workaround. That's a signal.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
          Not every agency was using the same tool, so the pattern didn't click in a single call. The PM and I would sync after each session. And across those conversations the same logic kept emerging: TikTok Shop wasn't a relationship game like Instagram. It was a volume game. The funnel looked like this — 1,000 invites sent, 100 accepted, maybe 10 would actually perform. To win, you needed to send thousands of invitations. Continuously.
        </p>

        <img className="w-full rounded-[5px] object-cover mb-12" src="/images/final-imgs/Sf-tiktokshop/telas-v1.jpg" />

        <h2 className="text-gray-900 text-lg font-medium mb-4">The pivot</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          This reframed everything we'd built. Our MVP was structured around TikTok's native Target Collaboration model — hard-capped at 50 creators. Against a workflow that required thousands of invitations, that wasn't a minor gap. It was a fundamental mismatch.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          If we don't solve the scale problem, they will never see the rest of our value — because they will never be fully inside the platform.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
          We reprioritized the entire roadmap. 100% of engineering focus went to the volume problem. Two hard constraints to solve:
        </p>

        <div className="flex gap-4 mb-12">
          <div className="flex-1 bg-gray-100 rounded-xl p-6 space-y-2">
            <p className="text-xs tracking-widest text-gray-600">Constraint 1</p>
            <h3 className="text-lg text-gray-800">50 creator cap per collaboration</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Inviting thousands meant creating hundreds of separate Target Collaborations, with no way to track them in one place.
            </p>
          </div>
          <div className="flex-1 bg-gray-100 rounded-xl p-6 space-y-2">
            <p className="text-xs tracking-widest text-gray-600">Constraint 2</p>
            <h3 className="text-lg text-gray-800">400 invitation send limit per day</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              For agencies trying to reach thousands of creators, that meant days of manual work or continued bot usage outside the platform.
            </p>
          </div>
        </div>

        <img className="w-full rounded-[5px] object-cover mb-12" src="/images/final-imgs/Sf-tiktokshop/v2.jpg" />

        <h2 className="text-gray-900 text-lg font-medium mb-4">The design</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          Both constraints needed the same thing: the user should experience scale without experiencing complexity.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-4">
          For the 50 creator cap — during a working session with the lead engineer, we flagged the obvious problem: inviting thousands of creators would mean creating hundreds of separate collaborations on the backend with no way to track them in one place. I proposed creating those collaborations under the hood but surfacing them as one. I asked if it was technically feasible. It was. The pain was clear enough that it didn't need much convincing.
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
          For the 400 daily send limit — we turned it into a background process. Configure the criteria once. The system sends continuously until the target is reached. From the user's perspective: set it, and scale happens.
        </p>

        <div className="flex gap-4 mb-12">
          <div className="flex-1 bg-gray-100 rounded-xl p-6 space-y-2">
            <p className="text-xs tracking-widest text-gray-600">Solution 1</p>
            <h3 className="text-lg text-gray-800">The wrapper</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Multiple Target Collaborations created under the hood, surfaced as one. A user inviting 500 creators sees a single collaboration with aggregated status. Ten running in the backend — completely invisible.
            </p>
          </div>
          <div className="flex-1 bg-gray-100 rounded-xl p-6 space-y-2">
            <p className="text-xs tracking-widest text-gray-600">Solution 2</p>
            <h3 className="text-lg text-gray-800">Auto-Pilot</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              The daily send limit becomes a background process. Configure the criteria once. The system sends continuously until the target is reached — respecting the API limit automatically.
            </p>
          </div>
        </div>

        <img className="w-full rounded-[5px] object-cover mb-12" src="/images/final-imgs/Sf-tiktokshop/marketing.png" />

        <h2 className="text-gray-900 text-lg font-medium mb-4">Outcome</h2>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
          TikTok Shop stopped being a feature. It became one of three core strategic channels Superfiliate supports.
        </p>

        <div className="flex gap-4">
          <div className="flex-1 bg-gray-100 rounded-xl p-6 space-y-2">
            <h3 className="text-2xl text-gray-800">$33M</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              GMV from creator conversions in the first year
            </p>
          </div>
          <div className="flex-1 bg-gray-100 rounded-xl p-6 space-y-2">
            <h3 className="text-2xl text-gray-800">187</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Active brands, nearly 1/3 of all customer
            </p>
          </div>
          <div className="flex-1 bg-gray-100 rounded-xl p-6 space-y-2">
            <h3 className="text-2xl text-gray-800">2M</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Active creators generating conversions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTiktok;

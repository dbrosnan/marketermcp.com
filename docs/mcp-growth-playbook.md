# MCP Growth Playbook

## Context

The MCP ecosystem grew from ~100k monthly SDK downloads at launch (November 2024) to 97M+ by 2026. Over 10,000 MCP servers are in the official registry. OpenAI, Google, Microsoft, and AWS have all adopted the protocol. The Linux Foundation now governs MCP through the Agentic AI Foundation.

This playbook covers five growth vectors specific to the MCP ecosystem that sit alongside our existing paid media, SEO, and organic social strategies (see `marketing-comms.md`).

---

## Vector 1: MCP directory and registry listings

### Why it matters

Servers listed across multiple directories see 300%+ usage growth versus single-listing servers. Directories are where developers and marketing ops teams discover new MCP tools — they are the equivalent of app store placement.

### Target directories (priority order)

| Directory | Scale | Action | Notes |
|-----------|-------|--------|-------|
| Official MCP registry (GitHub `modelcontextprotocol/servers`) | Baseline for credibility | Submit PR | Required for ecosystem legitimacy |
| Glama | 9,000+ servers, 50k businesses | Submit listing | 80% revenue share for creators, ChatGPT-like discovery UI |
| Smithery | 5,000+ servers | Submit listing | One-click deployment, CLI integration |
| PulseMCP | 8,230+ servers | Submit listing | Weekly newsletter features trending servers |
| mcp.so | 17,000+ listings | Submit listing | Largest directory by volume |
| Composio | Enterprise-focused | Submit listing | Strong enterprise discovery |
| Docker MCP Catalog | 1M+ pulls within weeks of launch | Publish Docker image | Becoming the standard for secure distribution |

### Listing optimization

- Write human-readable descriptions that explain what the tool does for marketers, not technical jargon about the implementation.
- Include clear installation instructions (npm, Docker, and direct API endpoint).
- Add screenshots or GIFs of the tool in action inside Claude Desktop or Cursor.
- Tag with categories: `marketing`, `budget`, `analytics`, `campaign-management`, `attribution`.

### Maintenance cadence

- Weekly: check listing accuracy, respond to comments/issues on directories.
- Monthly: update descriptions to reflect new tools added to the registry.
- Quarterly: audit which directories drive the most traffic and double down.

---

## Vector 2: Generative Engine Optimization (GEO)

### Why it matters

AI assistants (Claude, ChatGPT, Perplexity, Gemini) are now the primary discovery path for tools. When a marketer asks their AI assistant "what tools help with budget pacing?" — Marketer MCP needs to be in the answer. Traditional SEO gets you into Google results. GEO gets you cited by AI systems.

### Implementation

#### llms.txt

Publish a `/llms.txt` file at the website root. This is a plain-language description of the product structured for LLM consumption. It tells AI systems what Marketer MCP is, what it does, and how to use it.

File location: `apps/website/public/llms.txt`

#### Extended JSON-LD

The homepage already has a `SoftwareApplication` JSON-LD block. Extend it with a `WebAPI` type that includes:
- API endpoint URLs
- Authentication method
- Documentation URL
- Terms of service URL
- Available tools and their descriptions

AI systems parse JSON-LD for structured facts. The more complete the schema, the more likely the tool gets cited accurately.

#### Content formatting for AI citation

AI systems prefer content that:
- Answers questions directly in the first 1-2 sentences.
- Uses structured facts (bullet points, tables, definitions) over narrative prose.
- Includes specific numbers and measurable claims.
- Avoids SEO keyword stuffing and filler paragraphs.

Review all blog posts and FAQ entries against these criteria.

### Measurement

- Track Perplexity and ChatGPT citations (search for "marketer mcp" in AI assistants monthly).
- Monitor referral traffic from AI-adjacent sources.
- Test: ask Claude, ChatGPT, and Perplexity "what MCP tools help with marketing budget pacing?" and record whether Marketer MCP appears.

---

## Vector 3: Developer relations and GitHub open-source presence

### Why it matters

GitHub's own research shows open-sourcing an MCP server is a credibility signal that drives trust and adoption. The Marketer MCP repo already has `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, and `GOVERNANCE.md` — a strong foundation.

### Actions

#### Official registry submission

Submit the MCP hub worker to `modelcontextprotocol/servers` on GitHub. This is the single most important credibility action. Requirements:
- Clean README with install instructions.
- Working Docker image or npm package.
- License file (already present).
- Demonstrated health check and tool discovery endpoints.

#### GitHub Discussions

Enable GitHub Discussions on the repo with these categories:
- **Q&A**: How do I connect? How do I use Budget Buddy with [client]?
- **Ideas**: Feature requests and tool suggestions.
- **Show and tell**: Community members sharing their Marketer MCP workflows.
- **Announcements**: Release notes and changelog updates.

#### CHANGELOG.md

Add a changelog at the repo root. Use the Keep a Changelog format. Every release should have a dated entry with Added/Changed/Fixed/Removed sections. This builds trust with technical evaluators and feeds the PulseMCP newsletter pipeline.

#### Community touchpoints

Track these in a `docs/developer-relations.md` file:
- GitHub stars and forks (weekly snapshot).
- GitHub Discussions activity (questions asked, response time).
- Directory listing views and clicks.
- Community mentions (Reddit, Slack, Discord, X).

---

## Vector 4: Launch event strategy

### Why it matters

The Desktop Commander case study: build in public, seed community, launch on Product Hunt, cross-post to Hacker News "Show HN." The result: 80K views, backlinks from both platforms, sustained organic traffic. Product Hunt launches generate 65+ backlinks and measurable SEO authority.

### Coordinated launch day plan

**48 hours before:**
- Post teaser on LinkedIn and X: "We're launching Marketer MCP on Product Hunt tomorrow. Here's what it does and why we built it."
- DM 20-30 supporters asking for Day 1 upvotes.
- Prepare Product Hunt listing: tagline, description, 3-4 screenshots, maker comment, first comment draft.

**Launch day (Tuesday or Wednesday, 12:01 AM PT):**
- Product Hunt listing goes live.
- Hacker News "Show HN" post within 2 hours.
- LinkedIn founder post with Product Hunt link.
- X thread: 5-tweet breakdown of the product with screenshots.
- Email waitlist: "We just launched on Product Hunt — help us spread the word."

**24 hours after:**
- Respond to every Product Hunt comment within 2 hours.
- Engage with every HN comment.
- Post "Day 1 results" update on LinkedIn/X.

**1 week after:**
- Write a build-in-public blog post: "How we launched Marketer MCP on the MCP ecosystem."
- Share launch metrics transparently (signups, traffic sources, directory referrals).

### Product Hunt listing details

- **Tagline:** "Budget pacing and campaign QA for your AI assistant"
- **Description:** One paragraph: pain, promise, proof. Link to demo and docs.
- **Screenshots:** Budget Buddy in Claude Desktop, API response example, tool registry view.
- **Maker comment:** Why we built this, what's live today, what's on the roadmap.

---

## Vector 5: Ecosystem newsletter and press outreach

### Why it matters

PulseMCP's weekly newsletter reaches MCP developers and early adopters. The Pragmatic Engineer covered MCP as a building block for AI dev tools. These are the exact distribution channels that reach people who already want structured AI tools.

### Newsletter targets

| Newsletter | Audience | Pitch angle | Timing |
|------------|----------|-------------|--------|
| PulseMCP weekly | MCP developers, tool builders | "First MCP server built for marketing ops" — submit for trending servers section | Week 2 (after registry listings are live) |
| The Pragmatic Engineer | Engineering leaders | "MCP beyond developer tools — how marketing teams use structured AI" | Post-launch week |
| Lenny's Newsletter | Product and growth leaders | "Budget pacing and campaign QA as MCP tools — why marketing ops is the next frontier" | Post-launch, tied to case study |
| Exit Five | B2B marketing leaders | "How AI-native marketing ops replaces your spreadsheet workflows" | Post-launch, with agency use case |
| Demand Gen Report | Demand gen practitioners | "Real-time budget pacing for demand gen teams" | Post-launch, Budget Buddy focus |
| MarketerHire / Superpath | Marketing operators | "The MCP tools every marketing ops team needs in 2026" | Ongoing, content partnership |

### Pitch template

Subject: Marketer MCP — first MCP server built for marketing operations

Body structure:
1. One sentence: what it is.
2. One sentence: why it matters to their audience.
3. One sentence: what's live today (Budget Buddy).
4. One sentence: what's on the roadmap.
5. Link to product and demo.

### Press outreach cadence

- Week 2: Submit to PulseMCP and mcp.so editorial.
- Week 3 (launch week): Pitch Pragmatic Engineer and Lenny's Newsletter.
- Week 4+: Pitch marketing-specific newsletters with case study data.
- Monthly: Re-pitch with new tool launches and usage milestones.

---

## Sequencing summary

| Week | Actions |
|------|---------|
| 1 | GEO setup (llms.txt, extended JSON-LD). Registry submissions to all 6+ directories. |
| 2 | Enable GitHub Discussions. Submit to PulseMCP newsletter. Pitch ecosystem newsletters. |
| 3 | Publish build-in-public blog post. Coordinated Product Hunt + Hacker News launch day. |
| Ongoing | Maintain registry listings. Respond to community. Re-pitch newsletters with milestones. |

## Cross-references

- Paid media plan: `paid-media-plan.md`
- Organic social cadence: `marketing-comms.md`
- Traditional SEO: `seo-keyword-map.md`
- Product roadmap: `mcp-product-roadmap.md`
- Pricing and tiers: `pricing.md`

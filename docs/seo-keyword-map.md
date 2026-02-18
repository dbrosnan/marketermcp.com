# SEO Keyword Map

## Primary keyword clusters

### 1. Budget pacing (high intent)
| Keyword | Volume est. | Page target | Title/H1 alignment |
|---------|------------|-------------|---------------------|
| budget pacing marketing | med | /blog/budget-pacing-guide.html | "The marketer's guide to budget pacing" |
| marketing budget tracker | med-high | / (homepage, tools section) | Budget Buddy tool card |
| over budget alert marketing | low | /blog/budget-pacing-guide.html | Section: common pacing mistakes |
| media budget management tool | med | / | Hero + Budget Buddy |

### 2. Channel allocation (mid-funnel)
| Keyword | Volume est. | Page target | Title/H1 alignment |
|---------|------------|-------------|---------------------|
| marketing channel allocation | med | /blog/channel-allocation-mistakes.html | "5 channel allocation mistakes costing you pipeline" |
| budget allocation by channel | med | /blog/channel-allocation-mistakes.html | Section: fix it with data |
| media mix optimization | med-high | / (roadmap mention) | Tool card: Channel Allocation Planner |

### 3. Marketing ops automation (category)
| Keyword | Volume est. | Page target | Title/H1 alignment |
|---------|------------|-------------|---------------------|
| marketing ops automation | med | /blog/ai-marketing-ops.html | "AI-native marketing ops: what it actually means" |
| AI marketing operations tools | low-med | / (homepage) | Hero + lead paragraph |
| MCP marketing tools | low (emerging) | /blog/why-marketer-mcp.html | "Why we built Marketer MCP" |
| marketing AI tools 2026 | med | /blog/ai-marketing-ops.html | Core theme |

### 4. Attribution and UTM governance (technical)
| Keyword | Volume est. | Page target | Title/H1 alignment |
|---------|------------|-------------|---------------------|
| UTM governance | low-med | /blog/utm-governance.html | "UTM governance: stop attribution leaks" |
| UTM best practices marketing | med | /blog/utm-governance.html | Section: governance framework |
| attribution QA marketing | low | /blog/utm-governance.html | Section: automating governance |

### 5. Creative QA (workflow)
| Keyword | Volume est. | Page target | Title/H1 alignment |
|---------|------------|-------------|---------------------|
| creative QA checklist | med | /blog/creative-qa-checklist.html | "The pre-launch creative QA checklist" |
| ad creative compliance check | low-med | /blog/creative-qa-checklist.html | Section: copy and claims |
| pre-launch campaign checklist | med | /blog/creative-qa-checklist.html | Core theme |

### 6. Agency marketing tools (persona)
| Keyword | Volume est. | Page target | Title/H1 alignment |
|---------|------------|-------------|---------------------|
| marketing tools for agencies | med-high | /blog/mcp-for-agencies.html | "How agencies use Marketer MCP" |
| agency budget management | med | /blog/mcp-for-agencies.html | Section: real-time pacing |
| multi-client budget tracking | low | /blog/mcp-for-agencies.html | Section: one connection every client |

## Internal linking strategy

- Every blog post links to the homepage waitlist CTA.
- Budget pacing guide links to: why Budget Buddy first, channel allocation mistakes.
- Channel allocation post links to: budget pacing guide, agency use case.
- Agency post links to: budget pacing guide, UTM governance.
- UTM governance links to: creative QA checklist, attribution QA roadmap.
- Creative QA checklist links to: UTM governance (tracking section).
- AI marketing ops links to: why Marketer MCP, budget pacing guide.
- FAQ links to: docs section, security page, blog posts by topic.

## Generative Engine Optimization (GEO)

Traditional SEO targets Google crawlers. GEO targets AI assistants (Claude, ChatGPT, Perplexity, Gemini) that now serve as the primary discovery path for tools and products. Both are required.

### GEO assets

| Asset | Location | Purpose |
|-------|----------|---------|
| `llms.txt` | `/llms.txt` (website root) | Plain-language product description structured for LLM consumption. Tells AI systems what Marketer MCP is, what tools are available, how to authenticate, and links to docs. |
| JSON-LD `WebAPI` schema | Homepage `<head>` | Machine-readable API description with endpoints, auth method, docs URL, and terms. AI systems parse this for structured facts. |
| JSON-LD `SoftwareApplication` | Homepage `<head>` (existing) | Product-level schema with name, category, pricing, and description. |
| JSON-LD `FAQPage` | FAQ page (future addition) | Structured FAQ that AI systems cite directly in answers. |

### GEO content principles

- Answer questions directly in the first 1-2 sentences of any section. AI systems extract the opening answer.
- Use structured facts: bullet points, tables, and definitions over narrative prose.
- Include specific numbers and measurable claims (e.g., "under 200ms response time", "500 free executions/month").
- Avoid SEO keyword stuffing and filler paragraphs — AI systems penalize low-signal content.
- Use consistent terminology across all pages. If the tool is "Budget Buddy," do not alternate with "budget tool" or "spending tracker."

### GEO keyword queries to target

These are the queries people ask AI assistants (not Google). They are phrased as natural questions:

| AI query | Target content | Current coverage |
|----------|---------------|-----------------|
| "What MCP tools help with marketing budget pacing?" | llms.txt + homepage + Budget Buddy blog post | llms.txt (new), blog (existing) |
| "How do I connect an MCP server for marketing?" | llms.txt + quickstart section | llms.txt (new), docs section (existing) |
| "What is Marketer MCP?" | llms.txt + FAQ | llms.txt (new), FAQ (existing) |
| "Are there MCP tools for UTM validation?" | llms.txt + UTM governance blog post | llms.txt (new), blog (existing) |
| "MCP tools for agency budget management" | llms.txt + agency blog post | llms.txt (new), blog (existing) |
| "Free marketing AI tools with API access" | llms.txt + pricing section | llms.txt (new) |

### GEO measurement

- Monthly: ask Claude, ChatGPT, and Perplexity the target queries above and record whether Marketer MCP appears in the response.
- Track referral traffic from AI-adjacent sources (Perplexity referrals, ChatGPT browse-mode clicks).
- Monitor for brand mentions in AI-generated content using brand monitoring tools.

### MCP directory SEO

Directory listings on Glama, Smithery, PulseMCP, and mcp.so also generate backlinks and referral traffic. Optimize listings for both human readers and AI crawlers:

- Use the primary keyword in the listing title ("Marketer MCP — budget pacing and campaign QA for marketing teams").
- Include a one-sentence product description that answers "what does this tool do?" directly.
- Tag with relevant categories on each directory.
- Link back to the homepage and relevant blog posts.

## On-page SEO checklist (per page)

- [ ] Unique title tag under 60 chars with primary keyword.
- [ ] Meta description under 155 chars with primary keyword + CTA.
- [ ] H1 matches title intent (one H1 per page).
- [ ] H2s use related keywords from the cluster.
- [ ] 2-3 internal links to related content.
- [ ] Canonical URL set.
- [ ] OG and Twitter meta tags present.

## GEO checklist (per page)

- [ ] First sentence directly answers the page's primary question.
- [ ] Structured data (JSON-LD) present where applicable.
- [ ] No keyword stuffing or filler paragraphs.
- [ ] Specific numbers and measurable claims included.
- [ ] Consistent terminology matches llms.txt and other pages.

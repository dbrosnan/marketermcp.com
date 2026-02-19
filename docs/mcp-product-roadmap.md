# MCP Product Roadmap: Budgeting & Marketing Ops Suite

## Overview

Marketer MCP provides a registry of structured AI tools that marketing teams access through a single MCP endpoint. Each tool accepts typed JSON input, returns typed JSON output, and integrates into any MCP-compatible AI assistant. Tools are namespaced, versioned, and secured with token auth and rate limits.

This document defines the tool suite — starting with Budget Buddy (live) and expanding to cover the full marketing operations workflow.

---

## Tool 1: Budget Buddy (live)

**Namespace:** `budget_buddy`

**Purpose:** Real-time budget pacing and over-budget alerts.

**Channels supported:** All (paid search, paid social, display, video, organic — any channel with spend data).

**KPI protected:** Spend efficiency, budget compliance.

**Input:**
```json
{
  "monthlyBudget": 50000,
  "channels": [
    { "name": "paid_search", "spend": 17000 },
    { "name": "paid_social", "spend": 22000 },
    { "name": "creator", "spend": 9000 }
  ]
}
```

**Output:**
```json
{
  "totalSpend": 48000,
  "budgetRemaining": 2000,
  "pacingPercentage": 96,
  "daysElapsed": 18,
  "daysInMonth": 28,
  "expectedPacingPercentage": 64.3,
  "variancePercentage": 31.7,
  "status": "over_pacing",
  "channelBreakdown": [
    { "name": "paid_search", "spend": 17000, "share": 35.4, "status": "ok" },
    { "name": "paid_social", "spend": 22000, "share": 45.8, "status": "over_budget" },
    { "name": "creator", "spend": 9000, "share": 18.8, "status": "ok" }
  ],
  "alerts": [
    { "type": "over_pacing", "message": "Total spend is 31.7% ahead of expected pacing." },
    { "type": "channel_over_budget", "channel": "paid_social", "message": "Paid social is consuming 45.8% of budget vs typical 40% allocation." }
  ]
}
```

**Use cases:**
- Daily pacing check across all channels.
- Automated over-budget alerting inside AI workflows.
- Pre-meeting budget summary generation.

---

## Tool 2: Channel Allocation Planner

**Namespace:** `channel_allocation`

**Purpose:** Suggest budget reallocation based on performance data and efficiency thresholds.

**Channels supported:** Paid search, paid social, display, video.

**KPI protected:** CAC, ROAS, pipeline efficiency.

**Input:**
```json
{
  "monthlyBudget": 50000,
  "channels": [
    { "name": "paid_search", "spend": 17000, "conversions": 85, "revenue": 42500 },
    { "name": "paid_social", "spend": 22000, "conversions": 44, "revenue": 22000 },
    { "name": "display", "spend": 5000, "conversions": 10, "revenue": 5000 },
    { "name": "video", "spend": 6000, "conversions": 8, "revenue": 4000 }
  ],
  "targets": {
    "maxCpa": 300,
    "minRoas": 2.0
  }
}
```

**Output:**
```json
{
  "recommendations": [
    {
      "channel": "paid_search",
      "currentSpend": 17000,
      "suggestedSpend": 22000,
      "reason": "CPA ($200) is well below target ($300) and ROAS (2.5x) exceeds minimum. Increase to capture more volume."
    },
    {
      "channel": "paid_social",
      "currentSpend": 22000,
      "suggestedSpend": 18000,
      "reason": "CPA ($500) exceeds target. Reduce spend and optimize audience targeting before scaling."
    },
    {
      "channel": "display",
      "currentSpend": 5000,
      "suggestedSpend": 5000,
      "reason": "CPA ($500) is above target but display serves upper-funnel awareness. Hold and monitor."
    },
    {
      "channel": "video",
      "currentSpend": 6000,
      "suggestedSpend": 5000,
      "reason": "ROAS (0.67x) is below minimum. Reduce and test new targeting before reinvesting."
    }
  ],
  "totalReallocated": 50000,
  "projectedBlendedCpa": 272
}
```

**Use cases:**
- Monthly budget reallocation review.
- Mid-flight budget rebalancing when a channel under-performs.
- Agency client QBR preparation.

---

## Tool 3: Campaign Flighting Helper

**Namespace:** `campaign_flighting`

**Purpose:** Generate campaign schedule and phasing recommendations based on budget, dates, and channel constraints.

**Channels supported:** Paid search, paid social, display, video.

**KPI protected:** Pipeline coverage, spend pacing.

**Input:**
```json
{
  "campaignName": "Q1 Product Launch",
  "totalBudget": 30000,
  "startDate": "2026-03-01",
  "endDate": "2026-03-31",
  "channels": ["paid_search", "paid_social", "video"],
  "phases": [
    { "name": "teaser", "durationDays": 7, "budgetShare": 15 },
    { "name": "launch", "durationDays": 10, "budgetShare": 50 },
    { "name": "sustain", "durationDays": 14, "budgetShare": 35 }
  ]
}
```

**Output:**
```json
{
  "schedule": [
    {
      "phase": "teaser",
      "dates": "2026-03-01 to 2026-03-07",
      "budget": 4500,
      "dailyBudget": 643,
      "channels": {
        "paid_social": 2500,
        "video": 2000
      },
      "notes": "Build awareness. Exclude paid search — intent volume is low before announcement."
    },
    {
      "phase": "launch",
      "dates": "2026-03-08 to 2026-03-17",
      "budget": 15000,
      "dailyBudget": 1500,
      "channels": {
        "paid_search": 7000,
        "paid_social": 5000,
        "video": 3000
      },
      "notes": "Peak spend. Capture intent surge from launch publicity."
    },
    {
      "phase": "sustain",
      "dates": "2026-03-18 to 2026-03-31",
      "budget": 10500,
      "dailyBudget": 750,
      "channels": {
        "paid_search": 5000,
        "paid_social": 3500,
        "video": 2000
      },
      "notes": "Maintain presence. Retarget launch visitors. Shift video to testimonials."
    }
  ]
}
```

**Use cases:**
- New campaign launch planning.
- Event-based campaign phasing (conferences, product launches, seasonal pushes).
- Agency campaign setup for new clients.

---

## Tool 4: Attribution QA

**Namespace:** `attribution_qa`

**Purpose:** Validate UTM parameters against a defined taxonomy and flag mismatches, duplicates, and missing values before campaigns go live.

**Channels supported:** All channels using UTM-tagged URLs.

**KPI protected:** Attribution accuracy, measurement reliability.

**Input:**
```json
{
  "taxonomy": {
    "sources": ["google", "linkedin", "meta", "youtube", "email"],
    "mediums": ["cpc", "paid-social", "display", "video", "email"],
    "campaignPattern": "^[a-z0-9-]+$"
  },
  "urls": [
    "https://marketermcp.com/lp/budget-pacing.html?utm_source=google&utm_medium=cpc&utm_campaign=launch-google-budget",
    "https://marketermcp.com/lp/marketing-ops.html?utm_source=LinkedIn&utm_medium=paid_social&utm_campaign=Launch LinkedIn Agency",
    "https://marketermcp.com/?utm_source=meta&utm_medium=paid-social"
  ]
}
```

**Output:**
```json
{
  "totalUrls": 3,
  "passed": 1,
  "failed": 2,
  "results": [
    {
      "url": "https://marketermcp.com/lp/budget-pacing.html?utm_source=google&utm_medium=cpc&utm_campaign=launch-google-budget",
      "status": "pass",
      "issues": []
    },
    {
      "url": "https://marketermcp.com/lp/marketing-ops.html?utm_source=LinkedIn&utm_medium=paid_social&utm_campaign=Launch LinkedIn Agency",
      "status": "fail",
      "issues": [
        { "field": "utm_source", "value": "LinkedIn", "expected": "linkedin", "issue": "Case mismatch — should be lowercase." },
        { "field": "utm_medium", "value": "paid_social", "expected": "paid-social", "issue": "Delimiter mismatch — taxonomy uses hyphens, not underscores." },
        { "field": "utm_campaign", "value": "Launch LinkedIn Agency", "issue": "Contains spaces and uppercase. Does not match pattern ^[a-z0-9-]+$." }
      ]
    },
    {
      "url": "https://marketermcp.com/?utm_source=meta&utm_medium=paid-social",
      "status": "fail",
      "issues": [
        { "field": "utm_campaign", "value": null, "issue": "Missing required parameter." }
      ]
    }
  ]
}
```

**Use cases:**
- Pre-launch UTM validation for every campaign.
- Ongoing audit of UTM values hitting analytics.
- Agency QA across multiple client URL lists.

---

## Tool 5: Creative QA

**Namespace:** `creative_qa`

**Purpose:** Preflight checks for ad creative against platform specs, brand guidelines, and compliance requirements.

**Channels supported:** Paid social (Meta, LinkedIn, TikTok), display, video (YouTube).

**KPI protected:** Ad approval rate, time to launch, brand consistency.

**Input:**
```json
{
  "platform": "meta",
  "placement": "feed",
  "creative": {
    "imageWidth": 1080,
    "imageHeight": 1080,
    "fileSizeKb": 2400,
    "headlineLength": 42,
    "bodyLength": 125,
    "ctaText": "Sign up free",
    "claims": ["#1 budget tool for marketers"],
    "logoPresent": true,
    "brandColors": ["#2b49ff", "#050610"]
  },
  "brandGuidelines": {
    "approvedColors": ["#050610", "#2b49ff", "#35ddff", "#eff2ff"],
    "prohibitedClaims": ["#1", "best", "guaranteed"],
    "maxHeadlineLength": 40,
    "maxBodyLength": 125
  }
}
```

**Output:**
```json
{
  "status": "fail",
  "checks": [
    { "check": "image_dimensions", "status": "pass", "detail": "1080x1080 meets Meta feed spec." },
    { "check": "file_size", "status": "pass", "detail": "2400KB under 30MB limit." },
    { "check": "headline_length", "status": "fail", "detail": "42 chars exceeds 40 char guideline." },
    { "check": "body_length", "status": "pass", "detail": "125 chars within limit." },
    { "check": "prohibited_claims", "status": "fail", "detail": "Claim '#1 budget tool for marketers' uses prohibited superlative '#1'." },
    { "check": "brand_colors", "status": "pass", "detail": "All colors match approved palette." },
    { "check": "logo_present", "status": "pass", "detail": "Logo detected." }
  ],
  "summary": "2 issues found. Fix headline length and remove prohibited claim before submitting."
}
```

**Use cases:**
- Pre-submission creative review for every ad variant.
- Bulk QA across dozens of creatives for a campaign launch.
- Agency creative review across client brand guidelines.

---

## Tool 6: Audience Planner

**Namespace:** `audience_planner`

**Purpose:** Suggest audience segments and exclusion lists based on campaign goals, ICP definitions, and channel capabilities.

**Channels supported:** Paid social (LinkedIn, Meta), display, video.

**KPI protected:** CAC, audience quality, wasted spend on non-ICP.

**Input:**
```json
{
  "platform": "linkedin",
  "icp": {
    "titles": ["Marketing Director", "VP Marketing", "Head of Growth", "Marketing Ops Manager"],
    "companySize": "50-1000",
    "industries": ["B2B SaaS", "Technology", "Marketing Agency"],
    "seniority": ["Director", "VP", "CXO"]
  },
  "campaignGoal": "lead_generation",
  "budget": 5000
}
```

**Output:**
```json
{
  "suggestedSegments": [
    {
      "name": "In-house marketing leaders",
      "targeting": {
        "titles": ["Marketing Director", "VP Marketing", "Head of Growth"],
        "companySize": "50-500",
        "industries": ["B2B SaaS", "Technology"],
        "seniority": ["Director", "VP"]
      },
      "estimatedReach": "12,000-18,000",
      "rationale": "Core ICP segment. High relevance, moderate reach."
    },
    {
      "name": "Marketing ops specialists",
      "targeting": {
        "titles": ["Marketing Ops Manager", "Marketing Operations Lead"],
        "companySize": "200-1000",
        "industries": ["B2B SaaS", "Technology"],
        "seniority": ["Manager", "Director"]
      },
      "estimatedReach": "5,000-8,000",
      "rationale": "Day-to-day operators who feel the pain most. Smaller reach but higher conversion potential."
    },
    {
      "name": "Agency operators",
      "targeting": {
        "titles": ["Media Director", "Account Director", "Paid Media Manager"],
        "companySize": "10-200",
        "industries": ["Marketing Agency", "Advertising"],
        "seniority": ["Manager", "Director"]
      },
      "estimatedReach": "8,000-14,000",
      "rationale": "Agency track segment. Test separately from in-house."
    }
  ],
  "suggestedExclusions": [
    { "type": "title", "values": ["Student", "Intern", "Entry Level"], "reason": "Not decision-makers." },
    { "type": "industry", "values": ["Education", "Non-profit"], "reason": "Low conversion potential for B2B SaaS tool." }
  ],
  "budgetSuggestion": "At $5,000/mo, start with the 'In-house marketing leaders' segment. Test 'Marketing ops specialists' in week 3 if CPA is within target."
}
```

**Use cases:**
- Campaign audience setup for new launches.
- Audience expansion when primary segments saturate.
- Agency audience strategy for new client onboarding.

---

## Tool-to-channel matrix

| Tool | Paid search | Paid social | Display | Video | Organic | Email |
|------|-----------|-------------|---------|-------|---------|-------|
| Budget Buddy | x | x | x | x | x | x |
| Channel Allocation Planner | x | x | x | x | | |
| Campaign Flighting Helper | x | x | x | x | | |
| Attribution QA | x | x | x | x | x | x |
| Creative QA | | x | x | x | | |
| Audience Planner | | x | x | x | | |

## Tool-to-KPI matrix

| Tool | CAC | ROAS | Pipeline | Spend efficiency | Attribution accuracy | Brand compliance |
|------|-----|------|----------|-----------------|---------------------|-----------------|
| Budget Buddy | | | | x | | |
| Channel Allocation Planner | x | x | x | x | | |
| Campaign Flighting Helper | | | x | x | | |
| Attribution QA | | | | | x | |
| Creative QA | | | | | | x |
| Audience Planner | x | | x | x | | |

## Release sequence

1. **Budget Buddy** — live
2. **Attribution QA** — next (high pain, fast to build, supports all channels)
3. **Creative QA** — follows Attribution QA (similar validation pattern)
4. **Channel Allocation Planner** — requires performance data ingestion
5. **Campaign Flighting Helper** — builds on allocation logic
6. **Audience Planner** — requires platform API integration for reach estimates

## Measurement plan

| Conversion event | Where it fires | Purpose |
|-----------------|----------------|---------|
| `waitlist_submit` | Homepage, landing pages, blog CTAs | Primary lead capture |
| `faq_view` | FAQ page | Intent signal |
| `blog_read_60s` | Blog posts (time on page > 60s) | Engagement quality |
| `docs_view` | Quickstart section | Technical intent |
| `lp_view` | Landing pages | Paid media attribution |

Analytics stack recommendation (bootstrap): Cloudflare Web Analytics (free, privacy-friendly, no cookies) for traffic. Plausible or Fathom for event tracking. UTM parameters for channel attribution.

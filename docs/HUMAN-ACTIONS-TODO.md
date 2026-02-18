# Human Actions That Still Need Doing

Everything in this file requires a human clicking around in a browser or running a one-off command. None of it can be automated by CI or code. Each item has the exact steps, the URL to open, and why it matters so you can knock them out in any order without losing context.

**Time estimate for all items: ~15 minutes total.**

Pick whichever one grabs your attention first. They are independent — do them in any order.

---

## 1. Add Cloudflare Secrets to GitHub Actions

**Why this matters:** Without these, every deploy workflow will fail immediately. Nothing ships until this is done.

**Time: ~3 minutes**

### Steps

1. Open: <https://github.com/dbrosnan/marketermcp.com/settings/secrets/actions>
2. Click **New repository secret**
3. Add this secret:
   - **Name:** `CLOUDFLARE_API_TOKEN`
   - **Value:** Your Cloudflare API token (the one with Workers permissions)
4. Click **Add secret**
5. Click **New repository secret** again
6. Add this secret:
   - **Name:** `CLOUDFLARE_ACCOUNT_ID`
   - **Value:** Your Cloudflare account ID

### Where to find these values

- **Account ID:** Log into [Cloudflare Dashboard](https://dash.cloudflare.com) — it is on the right sidebar of any zone's overview page, or at the top of Workers & Pages.
- **API Token:** Go to <https://dash.cloudflare.com/profile/api-tokens> — create a token with the **Edit Cloudflare Workers** template if you do not already have one.

### How to verify it worked

After adding both secrets, go to Actions > Deploy MCP Hub > Run workflow (manual trigger). If it gets past the deploy step without a credentials error, you are good.

---

## 2. Create GitHub Environments (staging + production)

**Why this matters:** The deploy workflows reference `staging` and `production` environments. Without them, deploys still run but you lose the approval gate on production and the deploy tracking in the GitHub UI.

**Time: ~3 minutes**

### Steps

1. Open: <https://github.com/dbrosnan/marketermcp.com/settings/environments>
2. Click **New environment**
3. Name it: `staging`
4. Click **Configure environment** — no special rules needed for staging. Just save it.
5. Go back to Environments, click **New environment** again
6. Name it: `production`
7. Click **Configure environment**
8. Under **Environment protection rules**, check **Required reviewers**
9. Add yourself (`dbrosnan`) as a required reviewer
10. Click **Save protection rules**

### What this gives you

- A manual approval step before anything hits production
- Deploy history visible per-environment in the GitHub UI
- The ability to add environment-specific secrets later if needed

---

## 3. Upload a Social Preview Image

**Why this matters:** When someone shares the repo link on Slack, Twitter, LinkedIn, or anywhere with link previews, this is the image that shows up. Without it, GitHub uses a generic gray card.

**Time: ~2 minutes**

### Steps

1. Open: <https://github.com/dbrosnan/marketermcp.com/settings>
2. Scroll down to the **Social preview** section
3. Click **Edit** then **Upload an image**
4. Use a 1280x640px image (GitHub's recommended size)
5. Save

### If you do not have an image yet

Skip this entirely and come back to it. It is cosmetic. A good default is your logo on a solid brand-color background at 1280x640.

---

## 4. Configure Your Git Identity

**Why this matters:** Right now commits show as `Drew Brosnan <drewbrosnan@drew.local>` — the hostname-based fallback. Setting this ensures commits on GitHub link back to your profile and show your avatar.

**Time: ~1 minute**

### Steps

Run these two commands in your terminal:

```bash
git config --global user.name "Drew Brosnan"
git config --global user.email "YOUR_GITHUB_EMAIL@example.com"
```

Use the email associated with your GitHub account. If you use GitHub's no-reply email for privacy, it looks like `7393110+dbrosnan@users.noreply.github.com`.

### How to find your GitHub email

1. Go to <https://github.com/settings/emails>
2. Copy whichever email is marked as your primary (or the noreply address if you have "Keep my email addresses private" checked)

---

## 5. Verify Dependabot Is Active

**Why this matters:** Dependabot was enabled via the API, and the config file is committed, but it is worth confirming it actually picked up the config and is scanning.

**Time: ~1 minute**

### Steps

1. Open: <https://github.com/dbrosnan/marketermcp.com/security/dependabot>
2. You should see the npm ecosystem listed
3. If it says "Dependabot is not enabled" for some reason, click Enable

### If no alerts show up

That is actually good — it means your dependencies are clean. Alerts will appear automatically when vulnerabilities are found.

---

## 6. Verify CodeQL Is Running

**Why this matters:** The CodeQL workflow was added but needs at least one run to confirm it is configured correctly for this repo's TypeScript setup.

**Time: ~2 minutes**

### Steps

1. Open: <https://github.com/dbrosnan/marketermcp.com/actions/workflows/codeql.yml>
2. If there are no runs yet, click **Run workflow** > **Run workflow** (manual trigger)
3. Wait for it to complete (~2-3 minutes)
4. A green check means code scanning is working
5. Check results at: <https://github.com/dbrosnan/marketermcp.com/security/code-scanning>

### If it fails

Most common issue: the autobuild step could not find buildable code. Since this repo is TypeScript with no compile-to-JS step yet, CodeQL may show warnings but should still complete. If it hard fails, open an issue with the `ci` label and we will fix it.

---

## Quick Reference Checklist

Copy this somewhere you will actually see it (sticky note, Notion, whatever works for your brain):

```
[ ] Cloudflare secrets added to GitHub Actions
[ ] staging environment created
[ ] production environment created (with approval gate)
[ ] Social preview image uploaded (or skipped on purpose)
[ ] Git identity configured
[ ] Dependabot confirmed active
[ ] CodeQL first run triggered and passed
```

When all boxes are checked, delete this checklist. The repo is fully operational.

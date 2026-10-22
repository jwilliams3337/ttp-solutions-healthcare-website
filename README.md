# TTP Solutions Healthcare LLC

Owner: Justin / TTP. Repository: jwilliams3337/ttp-solutions-healthcare-website.

## Website source

This is the original owner-approved review website migrated as a buildless static site. HTML, CSS, JavaScript, self-hosted fonts and images are in `dist/`. The requested acronym is MHCB/PHP. The full program name is Mental Health Center-Based, as corrected by the owner on October 22, 2026.

## Local preview

Run `python3 -m http.server 8000 --directory dist` and open http://localhost:8000. No dependency installation or build step is required. Edit `dist/index.html`, `dist/styles.css`, `dist/review.css`, `dist/app.js`, and the linked privacy/photo-credit pages directly.

## Temporary Netlify deployment

1. Sign into Justin's Netlify account and select the existing **TTP Solutions Healthcare LLC** team.
2. Add a project by importing the existing GitHub repository `jwilliams3337/ttp-solutions-healthcare-website`.
3. Authorize Netlify's GitHub integration for this repository if required. This is separate from the OpenAI GitHub App.
4. Production branch: `main`. Build command: leave blank. Publish directory: `dist`. The included netlify.toml declares that directory.
5. Deploy to the assigned HTTPS `*.netlify.app` address. Confirm the project is under the TTP team, not a developer team.
6. Test the temporary deployment before attaching any custom domain. Do not change GoDaddy DNS yet.

## Forms

Both forms collect basic contact information only. They validate locally and prepare an email to j.williams@ttpsolutions.org; the visitor must explicitly open their email app and send it or copy the request. There is no form database, Netlify Forms, clinical intake submission, or server-side delivery. Never present email preparation as successful delivery. A real sent-email check requires an authorized tester and recipient confirmation.

Do not request diagnoses, medications, treatment histories, records, SSNs, insurance member IDs or detailed clinical information. Keep the sensitive-information warning and admission disclaimer visible.

## Pre-launch checks / remaining owner confirmations

- Test desktop/mobile navigation, images, program content, leadership, FAQ, resources, careers, contacts, hours, service area, map link, email preparation, favicon and HTTPS on Netlify.
- Justin must verify the owner-supplied DBHDS licensing wording and clinical privacy wording. The current site flags these as awaiting verification.
- Confirm walk-in procedures and any formal clinical Notice of Privacy Practices; none has been supplied.
- No payer list is published. Do not invent payers, job openings or medical claims.
- Staging review banners and noindex remain deliberately enabled until launch. Before approved domain cutover, remove staging wording, update page metadata/structured data URLs from the review origin to https://myttphealth.org, enable indexing as appropriate, and re-test.
- Current map is a directions link, not an embedded map.
- Images are illustrative stock; attribution and license links are in dist/photo-credits.html. Fonts are self-hosted Sentient from Fontshare.

## Ownership and cutover

TTP owns this GitHub repository, its Netlify team, GoDaddy account, domain and DNS. Intended production domain is **myttphealth.org**. No domain has been attached or DNS changed by this migration. Obtain the exact DNS targets shown by the TTP Netlify project and get explicit approval before GoDaddy cutover. Do not replace unrelated mail/DNS records.

The site has no ChatGPT runtime dependency, private source endpoints, API keys, server dependencies or paid services required by its code. A developer can be removed without breaking a successfully configured TTP-owned Netlify deployment. Future pushes to main trigger Netlify deployments once the repository is connected; previous deploys can be rolled back in Netlify.

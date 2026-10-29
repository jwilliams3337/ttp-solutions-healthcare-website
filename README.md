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

Both forms collect basic contact information only and submit to Netlify Forms. The form names are `intake-request` and `general-contact`. Netlify email notifications must target `info@ttpsolutions.org` for both forms. The owner reported verifying delivery for both forms on October 29, 2026. Re-test both on the final domain after cutover. No email-provider credentials are stored in this repository.

Do not request diagnoses, medications, treatment histories, records, SSNs, insurance member IDs or detailed clinical information. Keep the sensitive-information warning and admission disclaimer visible.

## Pre-launch checks / remaining owner confirmations

- Test desktop/mobile navigation, images, program content, leadership, FAQ, resources, careers, contacts, hours, service area, map link, form delivery, favicon and HTTPS on Netlify.
- Owner-approved website wording was confirmed October 29, 2026. Staging labels and pending-verification text have been removed.
- Published visit wording: Please call to arrange a visit. Clinical Notice of Privacy Practices is available by contacting the team; the website privacy page is separate.
- No payer list is published. Do not invent payers, job openings or medical claims.
- Canonical, social and structured-data URLs now target https://myttphealth.org/. Search indexing remains disabled with noindex,nofollow until domain cutover; enable indexing after the final domain and HTTPS are verified.
- Current map is a directions link, not an embedded map.
- Images are illustrative stock; attribution and license links are in dist/photo-credits.html. Fonts are self-hosted Sentient from Fontshare.

## Ownership and cutover

TTP owns this GitHub repository, its Netlify team, GoDaddy account, domain and DNS. Intended production domain is **myttphealth.org**. No domain has been attached or DNS changed by this migration. Obtain the exact DNS targets shown by the TTP Netlify project and get explicit approval before GoDaddy cutover. Do not replace unrelated mail/DNS records.

The site has no ChatGPT runtime dependency, private source endpoints, API keys, server dependencies or paid services required by its code. A developer can be removed without breaking a successfully configured TTP-owned Netlify deployment. Future pushes to main trigger Netlify deployments once the repository is connected; previous deploys can be rolled back in Netlify.

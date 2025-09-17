Manicare Web Project — Technical Report

Overview
--------
This document summarizes the Manicare Home Health website project delivered in this repository (d:\manicare). It covers architecture, important source files, form wiring (Google Forms + serverless email), the serverless email implementation, environment variables required for deployment, and recommended next steps for the client and developer.

Project purpose
---------------
A marketing website for Manicare Home Health built with a React + Vite frontend. It provides information pages (Home, About, Careers, Blog, Contact), client-facing UI improvements, and contact/application forms which both submit to Google Forms and send a copy via a serverless email function.

Tech stack
----------
- Frontend: React (TypeScript), Vite, Tailwind CSS
- Serverless: Vercel serverless function (`api/send-email.ts`) using `nodemailer` (Gmail SMTP)
- Forms: Google Forms for primary data collection; site posts to the formResponse URL via hidden iframe
- Hosting & Deployment: Vercel recommended (serverless functions supported)

Key files and components
------------------------
- `index.html` — app shell and favicon reference
- `src/main.tsx`, `src/App.tsx` — React entry and routing
- `src/pages/ContactPage.tsx` — contact form wired to Google Forms (via hidden iframe) and to `/api/send-email` (fetch POST). Shows success message after submit.
- `src/pages/CareersPage.tsx` — Careers page with glass-styled hero and an application form. Form posts to Google Forms and also POSTs JSON to `/api/send-email`. After submission the UI shows an inline success banner.
- `src/pages/BlogPage.tsx` — Blog page (hero updated to use the same glass style as Careers).
- `src/components/Header.tsx` — sticky header with active route highlighting and services scroll behavior.
- `src/components/ServicesSection.tsx` — services tiles with 'Learn More' CTA and modal wiring.
- `src/components/Footer.tsx` — updated quick links and logo alignment.
- `api/send-email.ts` — Vercel serverless function that formats and sends email using `nodemailer`.

Serverless Email (`api/send-email.ts`) — contract & behavior
-----------------------------------------------------------
Contract:
- Endpoint: POST /api/send-email
- Expected JSON body (examples):
  - Contact form: { name, phone, email, message }
  - Careers application: { name, phone, email, position, message }
- Response: JSON { success: boolean, message?: string, error?: string }

Behavior:
- Validates required fields (name, email, message).
- HTML-escapes inputs to prevent injection in the email body.
- If `position` is present and not "N/A", uses a job-application-specific HTML template and subject line. Otherwise uses the contact template.
- Sends both HTML and plain-text fallback via nodemailer using Gmail SMTP (configured by environment variables).

Environment variables (Vercel)
------------------------------
These must be configured in the Vercel project settings (or the environment where the function runs):
- GMAIL_USER — Gmail address used as the SMTP sender (e.g., manicarehh@gmail.com)
- GMAIL_PASS — App Password for the Gmail account
- TO_EMAIL — (optional) recipient address; if omitted the sender address is used as recipient

Note: `GMAIL_PASS` must be an App Password (Google account -> Security -> App passwords) or an account configured to allow SMTP. Using OAuth2 is recommended for production security but is more complex to configure.

Google Forms wiring
-------------------
- Contact and Careers forms still use Google Forms as the primary data collection mechanism. Each form posts to the form's `formResponse` endpoint via a hidden iframe to keep the site from navigating away.
- Careers form field mapping (current):
  - Name -> `entry.1926683995`
  - Phone -> `entry.1265675249`
  - Email -> `entry.1252002960`
  - Position -> `entry.280374718` (selected option text is written to a hidden input before submit)
  - Message -> `entry.1904084952`

Notes on Google Forms:
- We set a hidden input (`entry.280374718`) with the selected position text before `form.submit()` to ensure Google receives the visible option text value.
- The forms post to Google via an HTML POST; we also post JSON to `/api/send-email` so the team gets an immediate emailed copy.

Client-side UX
--------------
- Careers and Contact forms show an inline success message after submission. Careers uses both the hidden iframe's load event and the email API resolution as triggers for UX confirmation.
- Header is sticky and highlights the active page.

Build & Run (local)
-------------------
- Install dependencies: `npm install`
- Development server: `npm run dev` (Vite)
- Build: `npm run build`
- Preview production build: `npm run preview`

Deployment notes
----------------
- Deploy to Vercel for easiest serverless function support.
- Add the environment variables listed above in the Vercel project settings.
- Ensure `nodemailer` is included in `package.json` dependencies.

Testing
-------
- Test the Careers form end-to-end: submit the Careers form and confirm
  1) a new row in the Google Form responses (or view the response in the linked Google Sheet), and
  2) an email is received at `TO_EMAIL` or `GMAIL_USER` containing the application details.
- Test Contact form similarly.

Security & Privacy
------------------
- The serverless function includes HTML escaping to avoid injection in email bodies.
- Avoid hard-coding credentials; use environment variables as described.
- For production, prefer OAuth2 for Gmail or a transactional email provider (SendGrid, Mailgun, AWS SES) for reliability and security.

Recommendations & Next Steps
---------------------------
1. Replace Gmail SMTP with a transactional email provider (SendGrid / Mailgun / SES) for better deliverability and monitoring.
2. Add server-side validation and rate-limiting to the email endpoint to prevent abuse.
3. Add logging/archival of submissions (small database or Google Sheets append) to preserve a copy in the client environment.
4. Implement tests for the API endpoint (mock transporter) and basic form integration tests.
5. Finish the Blog hero visual parity changes if desired (apply the Careers glass container look in `src/pages/BlogPage.tsx`).

Appendix: Notable edits made during the project
----------------------------------------------
- Replaced favicon in `index.html`.
- Header: made sticky, fixed overflow clipping, and active route highlight logic.
- Services tiles: added 'Learn More' CTA and title emphasises.
- Contact page: icons styled, office hours alignment fixed, and contact form was wired to both Google Forms and a serverless email endpoint.
- Careers page: added glass hero styling and application form wired to Google Forms and the serverless email endpoint; ensured position text is sent correctly.
- Created `api/send-email.ts` implementing HTML email formatting and a specialized template for applications.

Contact
-------
If you need this converted to a PDF or modified to include screenshots, testing artifacts, or deployment logs, tell me what you want and I will generate it.

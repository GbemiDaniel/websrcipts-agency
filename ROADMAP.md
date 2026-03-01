
Goal: Build a premium, mobile-first Next.js (App Router) frontend MVP, integrated with a custom backend API.

Stack: Next.js, Tailwind CSS, Framer Motion, React Hook Form.-----🛠️ Phase 1: The Foundation (System Setup)
Initialize Next.js app (npx create-next-app@latest).
Clean up default boilerplate code in app/page.tsx and app/globals.css.
Configure Tailwind CSS (define deep, premium dark mode colors and brand tokens in tailwind.config.ts).
Set up typography using next/font (e.g., Inter, Plus Jakarta Sans).
Vibe Check: Run npm run dev to ensure the blank page loads with the correct background color on both mobile and desktop.
-----🏗️ Phase 2: The Atoms & Molecules (Component Library)
Create Button.tsx (include variants: primary, secondary, outline; add Framer Motion tap/hover effects).
Create Input.tsx and TextArea.tsx (strict styling for the contact form, including focus states).
Create SectionHeading.tsx (reusable typography component for consistency across pages).
Create Card.tsx (for the services and work grid, incorporating subtle glassmorphism or premium dark-mode gradients).
Vibe Check: Render all atoms on a temporary /design-system route to ensure they feel premium and look perfect on a mobile screen.
-----🧭 Phase 3: The Architecture (Layouts & Navigation)
Create Navbar.tsx (must include a mobile hamburger menu that slides in cleanly).
Create Footer.tsx (clean links, copyright, and social/contact info).
Integrate Navbar and Footer into the app/layout.tsx file so they persist across all routes.
Vibe Check: Click through empty routes (/, /services, /work, /contact) to ensure navigation is buttery smooth and responsive.
-----💻 Phase 4: Page Assembly (Putting it together)
Build app/page.tsx (Home): Hero section, value proposition, teaser of best work, Call to Action.
Build app/services/page.tsx: Breakdown of the Frontend + Backend strike team capabilities.
Build app/work/page.tsx: The portfolio grid (hardcode MVP data using the Card component).
Build app/contact/page.tsx: The UI for the lead generation form.
Vibe Check: Audit the site using Chrome DevTools. Check the mobile viewport, ensure animations don't cause horizontal scrolling, and verify contrast ratios.
-----🤝 Phase 5: The Backend Handshake (The Form)
Wire up the Contact form using react-hook-form and zod for strict client-side validation.
Create a utility/action function to handle the POST fetch request to the backend partner's API endpoint.
Add toast notifications (success/error UI states) for form submission.
Vibe Check: Submit a test lead from the live frontend and have the backend partner confirm receipt in their database/server.
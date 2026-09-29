# Project Structure Rules for New Templates
Whenever building new templates (out of the 100-200 planned) in this repository, ensure the exact following Next.js project structure is maintained, matching the `template-layouts` repository reference:

## 1. Routing & Pages (`app/` directory)
- All new pages/routes should go inside the `app/` directory using the App Router.
- Separate folders for each template (e.g., `app/realstate/template1/page.tsx`).

## 2. Reusable Modular Sections (`src/components/sections/`)
- All major chunks/sections of a page (Header, Footer, CTA, Hero, Services, etc.) MUST be created as separate components inside `src/components/sections/`.
- Organize them by section type (e.g., `header/HeaderRealstate1.tsx`).

## 3. UI Components (`src/components/ui/` or `components/ui/`)
- Generic reusable UI elements (buttons, cards, inputs) go into the UI folder. Use Shadcn UI when applicable.

## 4. Static JSON Data (`src/data/`)
- ALL static data (JSON files) used to populate the templates MUST be kept in ONE place: the `src/data/` folder. Do not scatter JSON files around the codebase.

## 5. Styling
- Use Tailwind CSS v4.
- Make sure modern aesthetics, smooth scrolling (Lenis), and animations (Framer Motion) are applied as standard.

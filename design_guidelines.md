# Design Guidelines: Minimalist Portfolio & Blog Website

## Design Approach
**Reference-Based:** Inspired by ralphammer.com's minimalist, content-first philosophy combined with the clarity of Linear and typography principles of Medium.

**Core Principles:**
- Clarity over decoration
- Typography-driven hierarchy
- Generous whitespace as a design element
- Content immediacy (no barriers to accessing work)
- Restrained, purposeful visual elements

---

## Typography System

**Font Families:**
- Primary: Inter or similar geometric sans-serif (400, 500, 600 weights)
- Headings: Same family for consistency, differentiated by weight and size

**Hierarchy:**
- Site Title: text-2xl, font-semibold
- Tagline: text-base, font-normal, opacity-70
- Section Headings: text-xl, font-semibold with # prefix character
- Post Titles: text-lg, font-medium
- Body Text: text-base, leading-relaxed
- Metadata (dates, view counts): text-sm, opacity-60

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 24
- Component spacing: space-y-4 to space-y-6
- Section gaps: gap-12 to gap-16
- Page padding: px-6 md:px-12, py-12 md:py-16

**Container Widths:**
- Main content: max-w-4xl mx-auto (comfortable reading width)
- Full sections: max-w-6xl mx-auto for grid layouts

---

## Homepage Structure

**Header Section:**
- Static top navigation bar with links: Writing | Drawings | Animations | Contact (separated by | character)
- Site title immediately below navigation
- Tagline beneath title (subtle, italic styling)
- All text-based, no background image or color treatment
- Padding: py-8 md:py-12

**Content Sections (3 columns on desktop, stack on mobile):**
Each section features:
- Section heading with # prefix (e.g., "# Writing")
- List of 3-5 recent items
- Item format: Title + Date + View count (for Writing only)
- "See all articles/drawings/animations" link at bottom
- Use grid: grid-cols-1 md:grid-cols-3 gap-12

**Footer:**
- Minimal single line: "© 2025 [Name]"
- Centered, text-sm, opacity-60
- Margin top: mt-24

---

## Component Library

**Navigation:**
- Horizontal text links with divider characters
- No underlines by default, subtle hover state (opacity change)
- Font weight: 500

**Content Cards (for listings):**
- No borders or backgrounds
- Title as clickable link
- Metadata below title (small, muted)
- Vertical spacing between items: space-y-6
- Hover: subtle title color shift

**"See all" Links:**
- Positioned at section bottom
- Arrow or → character
- Subtle, non-intrusive styling

**Individual Post Pages:**
- Max-width prose container (max-w-prose)
- Title: text-3xl, font-semibold, mb-4
- Metadata row: Date + View count, text-sm, mb-8
- Content: leading-relaxed, space-y-4
- Back navigation at top

**Gallery Grids (Drawings/Animations):**
- Grid: grid-cols-2 md:grid-cols-3 gap-6
- Simple thumbnail presentation
- Title overlay or below image
- Minimal hover effect (slight opacity change)

---

## Images

**No Hero Image:** This site explicitly avoids traditional hero imagery in favor of immediate content display.

**Gallery Images:**
- Drawings section: Thumbnail images of artwork in grid format
- Animations section: Video preview thumbnails or animated GIFs
- All images use subtle border or shadow: shadow-sm
- Aspect ratio: Maintain original artwork proportions

**Image Placement:**
- Homepage: Small thumbnails in Drawings/Animations sections only
- Individual pages: Full-width images within prose container
- No background images anywhere

---

## Interaction & Animation

**Minimal Interactions Only:**
- Link hover: opacity-80 transition
- Navigation: subtle underline on active page
- No scroll animations
- No parallax effects
- No loading animations
- Fast, instant page transitions

---

## Responsive Behavior

**Mobile (base to md):**
- Single column stack for all content
- Navigation: Horizontal scroll or stack if needed
- Maintain generous padding: px-6
- Typography scales down slightly

**Desktop (md and above):**
- Three-column content grid on homepage
- Navigation remains horizontal
- Increase spacing and padding
- Max-width containers maintain readability

---

## Accessibility

- High contrast text (dark on light)
- Generous tap targets (min 44px height)
- Semantic HTML structure
- Keyboard navigation support
- Focus states visible but subtle

---

## Key Differentiators

This design succeeds by doing less:
- No decorative elements competing with content
- Typography does the heavy lifting
- Whitespace creates rhythm and focus
- Three distinct content streams immediately visible
- Professional restraint conveys maturity and substance

The result feels like a digital studio space—clean, organized, and entirely focused on the work itself.
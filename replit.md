# Portfolio & Blog Website

## Overview

This is a minimalist portfolio and blog website inspired by ralphammer.com's content-first philosophy. The application showcases three main content types: Writing (blog posts), Drawings (image gallery), and Animations (video/motion graphics). Built with a modern React frontend and Express backend, it emphasizes clarity, typography, and generous whitespace over decorative elements.

The site features a clean, typography-driven design using Inter or similar geometric sans-serif fonts, with a restrained neutral color palette. Navigation is simple and always visible, with content organized into distinct categories accessible from every page.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a minimal routing library. Routes are defined in `App.tsx` and include:
- Homepage with recent content from all three categories
- Dedicated listing pages for Writing, Drawings, and Animations
- Individual detail pages for each content type
- Contact page
- 404 Not Found page

**Component Structure**: The application follows a component-based architecture with clear separation:
- Layout components (Navigation, Header, Footer) provide consistent page structure
- Page components in `client/src/pages/` handle routing and content display
- UI components in `client/src/components/ui/` built with shadcn/ui and Radix UI primitives
- Example components in `client/src/components/examples/` for development/testing

**State Management**: TanStack Query (React Query) handles server state and data fetching with custom query functions defined in `lib/queryClient.ts`. Currently uses mock data with TODO markers indicating future backend integration.

**Styling**: Tailwind CSS with custom configuration for the minimalist design system:
- Custom color scheme using HSL values with CSS variables for light/dark mode support
- Geometric sans-serif typography (Inter)
- Spacing system based on Tailwind's default scale (4, 6, 8, 12, 16, 24)
- Maximum content width of 4xl (56rem) for reading comfort
- Custom utility classes like `hover-elevate` for subtle interaction effects

**Design System**: Based on shadcn/ui with the "new-york" style variant, featuring:
- Typography hierarchy using size and weight differentiation
- Minimal color usage with neutral base palette
- Generous whitespace as a design element
- Section headings prefixed with "#" character for visual distinction

### Backend Architecture

**Framework**: Express.js server with TypeScript running on Node.js.

**Development Server**: Custom Vite integration for hot module replacement during development. The Express server acts as middleware host for Vite in development mode, with separate build process for production.

**Storage Layer**: Abstract storage interface defined in `server/storage.ts`:
- `IStorage` interface provides CRUD method contracts
- `MemStorage` implements in-memory storage for development
- Designed for easy replacement with database-backed implementation
- Currently includes User model with additional models (posts, drawings, animations) defined in schema but not yet implemented in routes

**API Design**: RESTful API structure with routes prefixed with `/api`. Route registration happens in `server/routes.ts`. Currently minimal implementation with TODO markers for adding actual endpoints.

**Request Logging**: Custom middleware logs API requests with duration tracking and response preview (truncated to 80 characters).

### Data Models

**Database Schema**: Defined using Drizzle ORM with PostgreSQL dialect in `shared/schema.ts`:

- **users**: User authentication data (id, username, password)
- **posts**: Blog posts with title, content, date, and view count
- **drawings**: Image gallery items with title, image URL, and date
- **animations**: Video/animation entries with title, thumbnail URL, optional video URL, and date

All tables use UUID primary keys generated via PostgreSQL's `gen_random_uuid()` function. Zod schemas provide runtime validation for insert operations.

**Type Safety**: Full TypeScript type inference from Drizzle schema to frontend, with generated types exported from `shared/schema.ts`.

### External Dependencies

**Database**: 
- PostgreSQL via Neon serverless driver (`@neondatabase/serverless`)
- Drizzle ORM for type-safe database queries and migrations
- Connection configured via `DATABASE_URL` environment variable
- Migration files stored in `./migrations` directory

**UI Component Libraries**:
- Radix UI primitives for accessible, unstyled components (accordion, dialog, dropdown, popover, etc.)
- shadcn/ui configuration for styled component layer
- Lucide React for icons
- cmdk for command palette functionality
- Embla Carousel for carousel components (if needed)

**Form Handling**:
- React Hook Form with Hookform Resolvers for form state management
- Zod for schema validation integrated with Drizzle schemas

**Utilities**:
- date-fns for date formatting and manipulation
- clsx and tailwind-merge (via `cn` utility) for conditional class composition
- class-variance-authority for component variant styling

**Session Management** (configured but not yet implemented):
- connect-pg-simple for PostgreSQL-backed Express sessions
- Indicates planned user authentication system

**Development Tools**:
- Replit-specific plugins for development banner and cartographer
- Runtime error modal for better development experience
- TSX for running TypeScript directly in development

**Build Tools**:
- Vite for frontend bundling with React plugin
- esbuild for backend bundling in production
- PostCSS with Tailwind CSS and Autoprefixer
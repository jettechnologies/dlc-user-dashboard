# Next.js Boilerplate

An open source boilerplate built using **Next.js 15.3**, **TypeScript**, and **Tailwind CSS**

## Features

With this template, you get all the awesomeness you need:

- Advanced Folder Structures
- [Next.js](https://nextjs.org/) with App Router support
- Type checking [TypeScript](https://www.typescriptlang.org/)
- Styled using [Tailwind CSS](https://tailwindcss.com/)
- State management with [Zustand](https://zustand-demo.pmnd.rs/)
- Authentication with [NextAuth.js](https://next-auth.js.org/)
- UI Components built with [shadcn/ui](https://ui.shadcn.com/)
- Data Fetching, Caching and Mutation with [TanStack Query](https://tanstack.com/query/latest)
- Linter with [ESLint](https://eslint.org/)
- Code Formatter with [Prettier](https://prettier.io/)
- Form handling with [React Hook Form](https://react-hook-form.com/)
- Validation library with [Zod](https://zod.dev/)
- [Storybook](https://storybook.js.org/) for UI development
- Beautiful and consistent icons from [Lucide](https://lucide.dev/)
- Loading UI using [Skeleton Components](https://ui.shadcn.com/docs/components/skeleton)
- Dark theme with [next-themes](https://npmjs.com/package/next-themes)
- [Absolute Imports](https://nextjs.org/docs/pages/building-your-application/configuring/absolute-imports-and-module-aliases) with `@` prefix
- [Husky](https://typicode.github.io/husky/) for Git Hooks
- Sitemap.xml and robots.txt with [next-sitemap](https://www.npmjs.com/package/next-sitemap)
- Metadata files optimized for SEO
- Storage helpers for Local, Session, Cookies
- 💯 Maximize lighthouse score

## Project structure

```shell
├── public                          # Static assets (e.g., images, icons)
├── src
│   ├── app                         # Next.js App Router (e.g., layouts, pages)
│   ├── features                    # Feature-based modules (e.g., landing-page, auth, dashboard)
│   │   └── landing-page
│   │       ├── components          # Feature-specific components
│   │       ├── containers          # Smart components or layout-specific logic
│   │       ├── services            # API calls for this feature
│   │       ├── hooks               # Feature-specific hooks
│   │       ├── utils               # Helper functions for this feature
│   │       └── types               # Feature-specific types
│   ├── components                  # Global/shared components
│   │   ├── shared                  # Layouts like Header, Footer
│   │   ├── skeletons               # Loading components
│   │   ├── ui                      # Design system or atomic components
│   │   └── widgets                 # Reusable advanced components
│   ├── data                        # Static or mock data
│   ├── helpers                     # General-purpose utility functions
│   ├── hooks                       # Reusable global hooks
│   ├── lib                         # Core libraries and utility functions
│   ├── providers                   # React context and providers (e.g., AuthProvider)
│   ├── schemas                     # Zod/Yup schemas for validation
│   ├── services                    # Global/shared API services
│   ├── stores                      # Zustand or other global state management
│   └── types                       # Global TypeScript types and interfaces
├── .env                            # Environment variables
├── .gitignore                      # Git ignore rules
├── .prettierrc                     # Prettier formatting rules
├── components.json                 # Configuration for shadcn/ui
├── next.config.mjs                 # Next.js config
├── postcss.config.js               # PostCSS config
├── tailwind.config.js             # Tailwind CSS config
├── tsconfig.json                   # TypeScript config
└── README.md                       # Project documentation

```

## File Naming Conventions

The project follows consistent file naming conventions:

| File Type      | Example          | Style      |
| -------------- | ---------------- | ---------- |
| Component      | `LoginForm.tsx`  | PascalCase |
| Hook           | `useLogin.ts`    | camelCase  |
| Helper, Schema | `form-schema.ts` | kebab-case |
| Folder         | `login-form/`    | kebab-case |

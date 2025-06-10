# Bolt Mobile App

Welcome to the **Bolt Mobile App** monorepo!
Created and maintained by [Manas Kulkarni](https://github.com/mdkulkarni2005).

**GitHub Repository:** [mdkulkarni2005/bolt-mobile-app](https://github.com/mdkulkarni2005/bolt-mobile-app)

---

## About the Project

Bolt Mobile App is a modern, full-stack monorepo designed for rapid development and deployment of web and backend applications.
It leverages the power of [Turborepo](https://turborepo.com/), [Next.js](https://nextjs.org/), [Bun](https://bun.sh), and a modular package structure for scalability and maintainability.

### Features

- **Monorepo** structure for easy management of multiple apps and packages.
- **Next.js** frontend with custom UI components and authentication.
- **Bun**-powered backend and worker apps for high performance.
- Shared packages for database, Redis, ESLint, and TypeScript config.
- Ready for deployment on [Vercel](https://vercel.com/).
- Remote caching and CI/CD friendly.

---

## Repository Structure

```
bolt-mobile-app/
├── apps/
│   ├── frontend/         # Next.js frontend app
│   ├── primary-backend/  # Bun backend app
│   ├── worker/           # Bun worker app
├── packages/
│   ├── db/               # Database utilities
│   ├── redis/            # Redis utilities
│   ├── eslint-config/    # Shared ESLint config
│   ├── typescript-config/# Shared TS config
├── README.md
├── turbo.json            # Turborepo config
└── ...
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Bun](https://bun.sh/) (for backend and worker apps)
- [pnpm](https://pnpm.io/) (preferred package manager)
- [Git](https://git-scm.com/)

### Clone the Repository

```bash
git clone https://github.com/mdkulkarni2005/bolt-mobile-app.git
cd bolt-mobile-app
```

### Install Dependencies

Install all dependencies for every app and package:

```bash
pnpm install
```

> **Note:**
> Some backend and worker packages use Bun. You may need to run `bun install` in those directories if you use Bun-specific dependencies.

### Environment Variables

Each app/package may require its own `.env` file.
Check the `apps/frontend`, `apps/primary-backend`, `apps/worker`, and relevant `packages/` directories for `.env.example` files or documentation.

**Typical setup:**

1. Copy `.env.example` to `.env` in each app/package as needed.
2. Fill in the required environment variables (API keys, database URLs, etc.).

### Running the Apps

#### Develop All Apps

```bash
pnpm dev
```

#### Build All Apps

```bash
pnpm build
```

#### Run Backend or Worker (with Bun)

```bash
cd apps/primary-backend
bun run index.ts

cd ../worker
bun run index.ts
```

#### Run Frontend (Next.js)

```bash
cd apps/frontend
pnpm dev
# or
bun dev
```

---

## Remote Caching (Optional)

Speed up builds and CI with [Turborepo Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching):

```bash
npx turbo login
npx turbo link
```

---

## Deployment

- **Frontend:** Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
- **Backend/Worker:** Deploy on your preferred platform supporting Bun.

---

## Useful Links

- [Manas Kulkarni on GitHub](https://github.com/mdkulkarni2005)
- [Bolt Mobile App Repository](https://github.com/mdkulkarni2005/bolt-mobile-app)
- [Turborepo Docs](https://turborepo.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Bun Docs](https://bun.sh/docs)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

*Feel free to open issues or contribute!*

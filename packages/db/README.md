# Database Package (`db`)

This package provides database utilities and Prisma ORM setup for the Bolt Mobile App monorepo.

---

## Usage

Import and use in backend or worker apps for database access:

```ts
import { prisma } from '@bolt/db';
```

---

## Setup

### Install Dependencies

```bash
bun install
```

### Migrations

Edit `prisma/schema.prisma` and run:

```bash
bunx prisma migrate dev
```

---

## Environment Variables

Copy `.env.example` to `.env` and set your database connection string.

---

## About

- Part of the [Bolt Mobile App Monorepo](https://github.com/mdkulkarni2005/bolt-mobile-app)
- Maintained by [Manas Kulkarni](https://github.com/mdkulkarni2005)

---

*Feel free to contribute or open issues!*

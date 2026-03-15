# Plataforma de Evaluación de Desempeño (Multi-tenant)

Monorepo profesional para empresas medianas y grandes, con frontend Next.js, backend NestJS, PostgreSQL/Prisma, Redis/BullMQ y observabilidad.

## Stack
- Monorepo: pnpm + Turborepo
- Frontend: Next.js App Router + TypeScript + Tailwind + RHF + Zod
- Backend: NestJS + TypeScript
- DB: PostgreSQL + Prisma
- Jobs/Cache: Redis + BullMQ
- Auth: OIDC JWT + interfaces SAML (stub)
- Observabilidad: OpenTelemetry + Prometheus + Sentry
- Tests: Vitest, Jest + Supertest, Playwright smoke

## Estructura
- `apps/web`: aplicación de RRHH y empleado
- `apps/api`: API REST `/api/v1`
- `packages/ui`: componentes compartidos
- `packages/shared`: tipos, schemas zod, utilidades
- `packages/config`: configuración base lint/tsconfig/prettier
- `prisma`: schema, migraciones y seed
- `infra/docker`: docker compose de desarrollo
- `docs`: arquitectura, contrato API, threat model

## Comandos de scaffolding
```bash
pnpm install
pnpm dev
pnpm test
pnpm lint
pnpm db:migrate
pnpm db:seed
```

## Desarrollo local
1. Copia variables:
   ```bash
   cp .env.example .env
   ```
2. Levanta infraestructura y apps:
   ```bash
   pnpm dev
   ```

## Ejemplos incluidos
- Dos ciclos demo (`Ciclo H1`, `Ciclo H2`) en seed.
- Feedback continuo (solicitado y espontáneo).
- OKRs con check-ins y KPI values.

## Fase 2 (stubs/TODO)
- Integración real SAML.
- Conectores reales Slack/Teams.

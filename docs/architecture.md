# Arquitectura

## Decisiones principales
- Monorepo con pnpm + Turborepo para compartir tipos, UI y configuración.
- Backend NestJS por dominio: `identity`, `org`, `employees`, `reviews`, `feedback`, `goals`, `calibration`, `reporting`, `notifications`.
- Persistencia central en PostgreSQL con Prisma y modelos multi-tenant (`organizationId` en entidades críticas).
- Redis + BullMQ para recordatorios, colas de exportación y tareas asíncronas.

## Seguridad por defecto
- RBAC por rol (`HR_ADMIN`, `MANAGER`, `EMPLOYEE`).
- ABAC ligero por scopes (`ORG`, `DEPARTMENT`, `TEAM`, `SELF`).
- Auditoría en operaciones sensibles (CUD, cambios de rating, signoff, export).
- Baseline OWASP: validación estricta Zod, JWT short-lived + refresh, rate limit (TODO), headers seguros (TODO).

## Observabilidad
- Trazas OpenTelemetry en API.
- Métricas Prometheus vía endpoint `/metrics` (TODO implementación completa).
- Sentry SDK configurable por env (`SENTRY_DSN`).

## Integraciones externas
- OIDC JWT implementable en fase actual.
- SAML y conectores Slack/Teams definidos como interfaz y stubs con TODO para fase 2.

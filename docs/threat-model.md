# Threat Model (OWASP)

## Riesgos
1. **Broken Access Control**: acceso cruzado entre tenants.
2. **Cryptographic Failures**: secretos expuestos en repo o logs.
3. **Injection**: payloads maliciosos en endpoints de import/feedback.
4. **Insecure Design**: anonimato 360° roto por baja muestra.
5. **Security Misconfiguration**: CORS/headers débiles.
6. **Vulnerable Components**: dependencias sin parche.
7. **Auth Failures**: refresh token sin rotación.
8. **Data Integrity**: ajustes de calibración sin trazabilidad.
9. **Logging/Monitoring Failures**: falta de trazas de incidentes.
10. **SSRF / External Connectors**: conectores fase 2 sin validación.

## Mitigaciones
- Enforzar `organizationId` y scopes en guard global.
- Validar entradas con Zod en rutas críticas.
- Auditoría obligatoria para CUD, signoff, ratings, exports.
- Anonimato 360 por `anonymityThreshold` y agregación mínima.
- Secretos por env + vault (fase 2), nunca hardcode.
- CI con lint/tests/build + escaneo dependencias (TODO).

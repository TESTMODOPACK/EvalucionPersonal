import { z } from 'zod';

export const tenantSchema = z.object({
  organizationId: z.string().uuid(),
  locale: z.string().default('es-ES')
});

export type TenantContext = z.infer<typeof tenantSchema>;

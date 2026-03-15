import { z } from 'zod';

export const createReviewCycleSchema = z.object({
  organizationId: z.string().uuid(),
  name: z.string().min(3),
  templateId: z.string().uuid(),
  startsAt: z.string().datetime(),
  endsAt: z.string().datetime(),
  populationEmployeeIds: z.array(z.string().uuid()).min(1),
  anonymityThreshold: z.number().int().min(3).max(10)
});

export type CreateReviewCycleDto = z.infer<typeof createReviewCycleSchema>;

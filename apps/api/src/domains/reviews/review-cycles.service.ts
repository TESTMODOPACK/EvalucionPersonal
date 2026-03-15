import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateReviewCycleDto } from './review-cycles.dto';

@Injectable()
export class ReviewCyclesService {
  constructor(private readonly prisma: PrismaService) {}

  async createCycle(payload: CreateReviewCycleDto) {
    const cycle = await this.prisma.reviewCycle.create({
      data: {
        organizationId: payload.organizationId,
        name: payload.name,
        templateId: payload.templateId,
        startsAt: new Date(payload.startsAt),
        endsAt: new Date(payload.endsAt),
        status: 'DRAFT',
        anonymityThreshold: payload.anonymityThreshold
      }
    });

    await this.prisma.reviewInstance.createMany({
      data: payload.populationEmployeeIds.map((employeeId) => ({
        reviewCycleId: cycle.id,
        employeeId,
        status: 'PENDING'
      }))
    });

    // TODO: encolar recordatorios BullMQ reales.
    return { cycleId: cycle.id, queuedNotifications: payload.populationEmployeeIds.length };
  }
}

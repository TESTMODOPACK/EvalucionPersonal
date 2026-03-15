import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PrismaService } from './prisma.service';
import { RbacScopeGuard } from './common/guards/rbac-scope.guard';
import { AuditMiddleware } from './common/middleware/audit.middleware';
import { ReviewCyclesController } from './domains/reviews/review-cycles.controller';
import { ReviewCyclesService } from './domains/reviews/review-cycles.service';
import { EmployeesController } from './domains/employees/employees.controller';
import { AuthController } from './domains/identity/auth.controller';
import { FeedbackController } from './domains/feedback/feedback.controller';
import { OkrController } from './domains/goals/okr.controller';
import { CalibrationController } from './domains/calibration/calibration.controller';
import { ReportingController } from './domains/reporting/reporting.controller';
import { ReviewInstancesController } from './domains/reviews/review-instances.controller';
import { Review360Controller } from './domains/reviews/review-360.controller';

@Module({
  controllers: [
    AuthController,
    EmployeesController,
    ReviewCyclesController,
    ReviewInstancesController,
    Review360Controller,
    FeedbackController,
    OkrController,
    CalibrationController,
    ReportingController
  ],
  providers: [PrismaService, ReviewCyclesService, { provide: APP_GUARD, useClass: RbacScopeGuard }]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuditMiddleware).forRoutes('*');
  }
}

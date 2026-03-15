import { Body, Controller, Post } from '@nestjs/common';
import { ReviewCyclesService } from './review-cycles.service';
import { createReviewCycleSchema } from './review-cycles.dto';
import { Permission } from '../../common/decorators/permission.decorator';

@Controller('review-cycles')
export class ReviewCyclesController {
  constructor(private readonly service: ReviewCyclesService) {}

  @Post()
  @Permission({ role: 'HR_ADMIN', scope: 'ORG' })
  async create(@Body() body: unknown) {
    const payload = createReviewCycleSchema.parse(body);
    return this.service.createCycle(payload);
  }
}

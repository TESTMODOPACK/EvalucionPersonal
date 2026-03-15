import { Controller, Param, Post } from '@nestjs/common';

@Controller('review-instances')
export class ReviewInstancesController {
  @Post(':id/submit') submit(@Param('id') id: string) { return { id, submitted: true }; }
  @Post(':id/signoff') signoff(@Param('id') id: string) { return { id, signedOff: true }; }
}

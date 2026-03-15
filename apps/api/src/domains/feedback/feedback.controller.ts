import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('feedback')
export class FeedbackController {
  @Post() create(@Body() body: unknown) { return { created: true, body }; }
  @Get('inbox') inbox() { return { items: [] }; }
}

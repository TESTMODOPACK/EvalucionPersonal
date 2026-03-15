import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('reporting')
export class ReportingController {
  @Get('dashboards') dashboards() { return { hr: {}, managers: {} }; }
  @Post('exports') exportAsync(@Body() body: unknown) { return { queued: true, body }; }
}

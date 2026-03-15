import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('okr')
export class OkrController {
  @Get('objectives') objectives() { return { items: [] }; }
  @Post('objectives') createObjective(@Body() body: unknown) { return { created: true, body }; }
  @Post('key-results') createKeyResult(@Body() body: unknown) { return { created: true, body }; }
  @Post('checkins') createCheckIn(@Body() body: unknown) { return { created: true, body }; }
}

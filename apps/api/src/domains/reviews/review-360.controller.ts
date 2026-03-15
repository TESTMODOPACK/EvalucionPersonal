import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('360')
export class Review360Controller {
  @Post('nominations') nominations(@Body() body: unknown) { return { created: true, body }; }
  @Post('assignments') assignments(@Body() body: unknown) { return { created: true, body }; }
  @Get('report/:employeeId') report(@Param('employeeId') employeeId: string) { return { employeeId, aggregates: [] }; }
}

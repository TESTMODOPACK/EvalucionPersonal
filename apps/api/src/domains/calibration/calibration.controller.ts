import { Body, Controller, Param, Post } from '@nestjs/common';

@Controller('calibration')
export class CalibrationController {
  @Post('sessions') createSession(@Body() body: unknown) { return { created: true, body }; }
  @Post('adjustments') adjust(@Body() body: unknown) { return { adjusted: true, body }; }
  @Post('sessions/:id/finalize') finalize(@Param('id') id: string) { return { finalized: true, id }; }
}

import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('employees')
export class EmployeesController {
  @Get() list() { return { items: [] }; }
  @Post() create(@Body() body: unknown) { return { created: true, body }; }
  @Get(':id') get(@Param('id') id: string) { return { id }; }
  @Patch(':id') update(@Param('id') id: string, @Body() body: unknown) { return { id, updated: true, body }; }
  @Delete(':id') remove(@Param('id') id: string) { return { id, deleted: true }; }
  @Post('import') import(@Body() body: unknown) { return { imported: true, body }; }
}

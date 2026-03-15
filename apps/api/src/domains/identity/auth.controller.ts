import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  @Get('me') me() { return { id: 'demo', role: 'HR_ADMIN' }; }
  @Post('auth/refresh') refresh() { return { accessToken: 'stub.jwt.token' }; }
}

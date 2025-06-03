import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

  private readonly logger = new (require('@nestjs/common').Logger)(AuthController.name);
  
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UsePipes(new ValidationPipe())
  async login(@Body() loginDto: LoginDto): Promise<any> {
    // Log credentials received
    this.logger.log(`Login attempt with email: ${loginDto.email}`);
    this.logger.debug(`Received credentials: ${JSON.stringify(loginDto)}`);

    const user = await this.authService.login(loginDto);
    return { user };
  }
}

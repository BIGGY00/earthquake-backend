// src/mail/mail.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('api/mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendEmail(@Body() body: { email: string }) {
    await this.mailService.sendThankYouEmail(body.email);
    return { message: 'Email sent successfully!' };
  }
}

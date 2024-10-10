// src/mail/mail.service.ts
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Client } from 'node-mailjet';

@Injectable()
export class MailService {
  private mailjet;
  constructor() {
    // Create a new Mailjet instance with your API key and secret
    this.mailjet = Client.apiConnect(
      'fe09e41232681e451ea3fc91ca447028',
      '276de7341d2d57cd9368aa9ffa366327',
    );
  }

  async sendThankYouEmail(email: string): Promise<void> {
    try {
      await this.mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: 's6430613010@phuket.psu.ac.th',
              Name: 'Earthquake-Estimation Website',
            },
            To: [
              {
                Email: email,
              },
            ],
            Subject: 'Thank you for registering!',
            TextPart: 'Thank you for following us!',
          },
        ],
      });
      console.log(`Email sent successfully to ${email}`);
    } catch (error) {
      console.error(`Failed to send email to ${email}:`, error);
      throw new InternalServerErrorException('Could not send email');
    }
  }
}

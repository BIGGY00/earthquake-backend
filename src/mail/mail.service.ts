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
              Name: 'Earthquake-Estimation Website Team',
            },
            To: [
              {
                Email: email,
              },
            ],
            Subject: 'Welcome to the Earthquake-Estimation Community!',
            TextPart:
              'Dear valued member,\n\nThank you for registering with the Earthquake-Estimation platform. We are excited to have you on board! Stay tuned for the latest updates on seismic activities and safety information. If you have any questions, feel free to contact us at any time.\n\nBest regards,\nEarthquake-Estimation Team',
            HTMLPart:
              '<p>Dear valued member,</p><p>Thank you for registering with the <strong>Earthquake-Estimation</strong> platform. We are excited to have you on board! Stay tuned for the latest updates on seismic activities and safety information. If you have any questions, feel free to contact us at any time.</p><p>Best regards,<br/><strong>Earthquake-Estimation Team</strong></p>',
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

// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MailModule } from './mail/mail.module'; // Import the MailModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'blsamevdb2acvm0u9jhc-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'ua1otwfshxjmlwff',
      password: 'UTb4RlMQQkzrWljZJz36',
      database: 'blsamevdb2acvm0u9jhc',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    MailModule,
  ],
})
export class AppModule {}

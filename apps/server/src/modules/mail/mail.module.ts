import { Module } from '@nestjs/common'
import { MailerModule } from '@nestjs-modules/mailer'
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
import { MailService } from './mail.service'
import { MailRepository } from './mail.repository'
import { constants } from '@/core/libs/constants'

@Module({
  imports: [
    MailerModule.forRoot({
      transport: constants.MAIL_URL,
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      preview: true,
      template: {
        dir: __dirname + '/../../../emailTemplates',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService, MailRepository],
  exports: [MailService, MailRepository],
})
export class MailModule {}

import { Injectable, Inject } from '@nestjs/common'
import { SendMailOptions, Transporter, createTransport } from 'nodemailer'
import { ConfigOptionsDto } from './dto/config-options.dto'
import { EmailDto } from './dto/email.dto'

@Injectable()
export class ViteMailService {
  constructor(
    @Inject('VITEMAIL_OPTIONS') private vitemailConfig: ConfigOptionsDto,
  ) {}

  /** The actual function which sends the email */
  sendEmail(/** The email details you want to send */ emailDetails: EmailDto) {
    try {
      // keeping it simple without any template
      const mailOptions: SendMailOptions = {
        to: emailDetails.to,
        from: 'ashrafchitambaa3@gmail.com',
        // replyTo: ,
        subject: emailDetails.subject,
        // sender: ,
        text: 'Notification',
        html: `Hello <strong>${emailDetails.receiver}</strong>,  ${emailDetails.message}`,
      }

      const transporter: Transporter = createTransport({
        service: 'gmail',
        port: 587,
        auth: {
          user: 'changemotivecom@gmail.com',
          pass: 'infbvuaxputccvca',
        },
        secure: false,
      })

      // sending the email
      return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) reject(error)

          resolve(info)
        })
      })
    } catch (error) {
      return error
    }
  }
}

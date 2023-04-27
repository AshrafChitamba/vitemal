import { Injectable, Inject } from "@nestjs/common";
import {
  SendMailOptions,
  SentMessageInfo,
  Transporter,
  createTransport,
} from "nodemailer";
import { ConfigOptionsDto } from "./dto/config-options.dto";
import { VitemailOptions } from "./Types/vitemail";

@Injectable()
export class ViteMailService {
  constructor(
    @Inject("VITEMAIL_OPTIONS") private vitemailConfig: ConfigOptionsDto
  ) {}

  /**
   * This function will trigger the sending of the email provided that you pass the right info
   */
  sendEmail(
    /** The email details you want to send */ emailDetails: VitemailOptions
  ): Awaited<Promise<SentMessageInfo>> {
    try {
      // keeping it simple without any template
      const mailOptions: SendMailOptions = {
        to: emailDetails.to,
        from: "ashrafchitambaa3@gmail.com",
        replyTo: emailDetails.replyTo,
        subject: emailDetails.subject,
        sender: emailDetails.sender,
        text: "Notification",

        html: `Hello <strong>${emailDetails.receiver}</strong>,  ${emailDetails.message}`,
      };

      const transporter: Transporter = createTransport({
        service: "gmail",
        port: 587,
        auth: {
          user: this.vitemailConfig.email,
          pass: this.vitemailConfig.password,
        },
        secure: false,
        connectionTimeout: 3000,
      });

      // sending the email
      return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) reject(error);

          resolve(info);
        });
      });
    } catch (error) {
      return error;
    }
  }
}


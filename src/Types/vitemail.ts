import { SendMailOptions } from "nodemailer";
import { EmailDto } from "../dto/email.dto";

export type defaults = Pick<SendMailOptions, "cc" | "replyTo">;

export type VitemailOptions = EmailDto & defaults;


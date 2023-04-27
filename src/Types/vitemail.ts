import { SendMailOptions } from "nodemailer";
import { EmailDto } from "../dto/email.dto";

export type defaults = Pick<SendMailOptions, "cc" | "replyTo" | "sender">;

type keys = keyof EmailDto | keyof defaults;

export type VitemailOptions = Partial<Record<keys, string>>;

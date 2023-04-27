export interface EmailDto {
  /** The email of the receiver */
  to: string;
  /** The main subject of the email */
  subject?: string;
  /** The actual message of the email */
  message: string;
  /** The name of the receiver of the email */
  receiver: string;
}

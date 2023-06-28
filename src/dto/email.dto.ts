export interface EmailDto {
  /** The receiver of the email */
  sender: {
    email: string,
    name: string
  };
  /** The receiver of the email */
  receiver: {
    email: string,
    name: string
  }
  /** The main subject of the email */
  subject?: string;
  /** The actual message of the email */
  message: string;
}


import { Injectable, Inject } from '@nestjs/common'
import {
  SendMailOptions,
  Transporter,
  createTransport,
} from 'nodemailer';

@Injectable()
export class ViteMailService {
    constructor(private readonly name: any) { }
    

}
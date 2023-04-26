import { ConfigOptionsDto } from './dto/config-options.dto';
import { EmailDto } from './dto/email.dto';
export declare class ViteMailService {
    private vitemailConfig;
    constructor(vitemailConfig: ConfigOptionsDto);
    /** The actual function which sends the email */
    sendEmail(/** The email details you want to send */ emailDetails: EmailDto): unknown;
}
//# sourceMappingURL=vitemail.service.d.ts.map
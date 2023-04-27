import { SentMessageInfo } from "nodemailer";
import { ConfigOptionsDto } from "./dto/config-options.dto";
import { VitemailOptions } from "./Types/vitemail";
export declare class ViteMailService {
    private vitemailConfig;
    constructor(vitemailConfig: ConfigOptionsDto);
    /**
     * This function will trigger the sending of the email provided that you pass the right info
     */
    sendEmail(
    /** The email details you want to send */ emailDetails: VitemailOptions): Awaited<Promise<SentMessageInfo>>;
}
//# sourceMappingURL=vitemail.service.d.ts.map
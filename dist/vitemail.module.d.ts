import { DynamicModule } from "@nestjs/common";
import { ConfigOptionsDto } from "./dto/config-options.dto";
export declare class ViteMailModule {
    /** You need to register your google
     * account to vitemail together with
     * the app password you will be given
     * and make sure you put them in an
     * env file for security
     */
    static register(
    /** An object with valid email and password */
    options: ConfigOptionsDto): DynamicModule;
}
//# sourceMappingURL=vitemail.module.d.ts.map
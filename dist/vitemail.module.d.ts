import { DynamicModule } from '@nestjs/common';
import { ConfigOptionsDto } from './dto/config-options.dto';
export declare class ViteMailModule {
    /** You need to register your account to vitemail */
    static register(
    /** Email and app password for google accounts */ options: ConfigOptionsDto): DynamicModule;
}
//# sourceMappingURL=vitemail.module.d.ts.map
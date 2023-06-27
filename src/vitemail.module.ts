import { Module, DynamicModule, Global } from "@nestjs/common";
import { ConfigOptionsDto } from "./dto/config-options.dto";
import { ViteMailService } from "./vitemail.service";

@Global()
@Module({})
export class ViteMailModule {
  /** You need to register your google
   * account to vitemail together with
   * the app password you will be given
   * and make sure you put them in an
   * env file for security
   */
  static register(
    /** An object with valid email and password */
    options: ConfigOptionsDto
  ): DynamicModule {
    return {
      module: ViteMailModule,
      providers: [
        {
          provide: "VITEMAIL_OPTIONS",
          useValue: options,
        },
        ViteMailService,
      ],
      exports: [ViteMailService],
    };
  }
}

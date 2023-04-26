import { Module, DynamicModule } from '@nestjs/common'
import { ConfigOptionsDto } from './dto/config-options.dto'
import { ViteMailService } from './vitemail.service'

@Module({})
export class ViteMailModule {
  /** You need to register your account to vitemail */
  static register(
    /** Email and app password for google accounts */ options: ConfigOptionsDto,
  ): DynamicModule {
    return {
      module: ViteMailModule,
      providers: [
        {
          provide: 'VITEMAIL_OPTIONS',
          useValue: options,
        },
        ViteMailService,
      ],
      exports: [ViteMailService],
    }
  }
}

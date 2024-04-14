import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { validateConfig } from 'src/validator/validations/app-config.validation';
import { ConfigService } from './services/config.service';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      validate: validateConfig,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}

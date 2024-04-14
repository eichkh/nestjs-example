import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { Config } from '../interfaces/config.interface';

@Injectable()
export class ConfigService {
  constructor(private readonly configService: NestConfigService<Config>) {}

  get<ConfigKey extends keyof Config>(key: ConfigKey): Config[ConfigKey] {
    return this.configService.get(key) as Config[ConfigKey];
  }
}

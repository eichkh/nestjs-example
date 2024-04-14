import { Module } from '@nestjs/common';

import { ConfigModule } from 'src/config/config.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [ConfigModule, DatabaseModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';

import { CoreModule } from 'src/core/core.module';


@Module({
  imports: [CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
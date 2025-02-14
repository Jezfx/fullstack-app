import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommsController } from './comms/comms.controller';
import { CommsService } from './comms/comms.service';
import { CommsModule } from './comms/comms.module';

@Module({
  imports: [CommsModule],
  controllers: [AppController, CommsController],
  providers: [AppService, CommsService],
})
export class AppModule {}

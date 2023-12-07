import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DigimonsModule } from './digimons/digimons.module';

@Module({
  imports: [ConfigModule.forRoot(), DigimonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

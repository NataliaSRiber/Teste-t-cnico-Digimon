import { Module } from '@nestjs/common';
import { DigimonsService } from './digimons.service';
import { DigimonsController } from './digimons.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { DigimonsRepository } from './repositories/digimons.repository';

@Module({
  controllers: [DigimonsController],
  providers: [DigimonsService, PrismaService, DigimonsRepository],
})
export class DigimonsModule {}

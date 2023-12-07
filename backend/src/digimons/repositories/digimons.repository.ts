import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DigimonEntity } from '../entities/digimon.entity';

@Injectable()
export class DigimonsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<DigimonEntity[]> {
    return await this.prisma.digimon.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  async findByNameandLevel(
    name: string,
    level: string,
  ): Promise<DigimonEntity[]> {
    return await this.prisma.digimon.findMany({
      where: {
        name: {
          contains: name,
        },
        level: {
          contains: level,
        },
      },
      orderBy: {
        name: 'asc',
      },
    });
  }
}

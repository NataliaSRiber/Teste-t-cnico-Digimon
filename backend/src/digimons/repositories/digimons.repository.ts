import { Injectable } from '@nestjs/common';
import { DigimonEntity } from '../entities/digimon.entity';
import { PrismaService } from '../../prisma/prisma.service';

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
          startsWith: level,
        },
      },
      orderBy: {
        name: 'asc',
      },
    });
  }
}

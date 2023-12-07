import { Controller, Get, Query } from '@nestjs/common';
import { DigimonsService } from './digimons.service';

@Controller('digimons')
export class DigimonsController {
  constructor(private readonly digimonsService: DigimonsService) {}

  @Get('all')
  findAll() {
    return this.digimonsService.findAll();
  }

  @Get()
  async findByNameandLevel(
    @Query('name') name: string = '',
    @Query('level') level: string = '',
  ) {
    const result = await this.digimonsService.findByNameandLevel(name, level);
    if (result.length === 0) {
      return { message: 'Digimon not found' };
    }
    return result;
  }
}

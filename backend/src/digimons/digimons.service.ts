import { Injectable } from '@nestjs/common';
import { DigimonsRepository } from './repositories/digimons.repository';

@Injectable()
export class DigimonsService {
  constructor(private readonly repository: DigimonsRepository) {}

  async findAll() {
    const getLevels = await this.repository.findAll();
    const uniqueLevels = getLevels
      .map(({ level }) => level)
      .filter(
        (level, index, levelsArray) => levelsArray.indexOf(level) === index,
      )
      .sort();
    return uniqueLevels;
  }

  findByNameandLevel(name: string, level: string) {
    return this.repository.findByNameandLevel(name, level);
  }
}

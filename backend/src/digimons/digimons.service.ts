import { Injectable } from '@nestjs/common';
import { DigimonsRepository } from './repositories/digimons.repository';

@Injectable()
export class DigimonsService {
  constructor(private readonly repository: DigimonsRepository) {}

  findAll() {
    return this.repository.findAll();
  }

  findByNameandLevel(name: string, level: string) {
    return this.repository.findByNameandLevel(name, level);
  }
}

import { Digimon } from '@prisma/client';

export class DigimonEntity implements Digimon {
  id: number;
  name: string;
  image: string;
  level: string;
  createdAt: Date;
}

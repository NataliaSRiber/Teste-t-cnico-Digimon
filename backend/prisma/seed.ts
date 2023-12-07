import { PrismaClient } from '@prisma/client';
import { getDigimonsList } from '../utilities/apiRequest';

const prisma = new PrismaClient();

const seedDigimons = async () => {
  try {
    const dadosAPI = await getDigimonsList();

    await prisma.digimon.createMany({
      data: dadosAPI.map((dados) => ({
        name: dados.name,
        image: dados.img,
        level: dados.level,
      })),
    });

    console.log('Seed concluída com sucesso!');
  } catch (erro) {
    console.error('Erro ao executar a seed:', erro);
    throw erro;
  } finally {
    await prisma.$disconnect();
  }
};

seedDigimons();

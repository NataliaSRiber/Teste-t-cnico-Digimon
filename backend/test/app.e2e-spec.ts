import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('Digimons Controller', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  const expectedDigimon1 = [
    {
      id: 8,
      name: 'Agumon',
      image: 'https://digimon.shadowsmith.com/img/agumon.jpg',
      level: 'Rookie',
    },
    {
      id: 148,
      name: 'SnowAgumon',
      image: 'https://digimon.shadowsmith.com/img/snowagumon.jpg',
      level: 'Rookie',
    },
  ];

  const expectedDigimon2 = [
    {
      id: 178,
      name: 'Armadillomon',
      image: 'https://digimon.shadowsmith.com/img/armadillomon.jpg',
      level: 'Rookie',
    },
  ];
  const expectedLevels = [
    'Armor',
    'Champion',
    'Fresh',
    'In Training',
    'Mega',
    'Rookie',
    'Training',
    'Ultimate',
  ];

  it('/digimon (GET) with queries', async () => {
    const queryName = 'Agumon';
    const queryLevel = 'Rookie';

    return request(app.getHttpServer())
      .get(`/digimons?name=${queryName}&level=${queryLevel}`)
      .expect(200)
      .expect(expectedDigimon1);
  });

  it('/digimon (GET) with queries', async () => {
    const queryName = 'Armadillomon';
    const queryLevel = '';

    return request(app.getHttpServer())
      .get(`/digimons?name=${queryName}&level=${queryLevel}`)
      .expect(200)
      .expect(expectedDigimon2);
  });

  it('/digimon/levels (GET) all levels categories', async () => {
    return request(app.getHttpServer())
      .get('/digimons/levels')
      .expect(200)
      .expect(expectedLevels);
  });
});

// import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import * as request from 'supertest';
// import { AppModule } from './../src/app.module';

// describe('AppController (e2e)', () => {
//   let app: INestApplication;

//   beforeEach(async () => {
//     const moduleFixture: TestingModule = await Test.createTestingModule({
//       imports: [AppModule],
//     }).compile();

//     app = moduleFixture.createNestApplication();
//     await app.init();
//   });

//   it('/ (GET)', () => {
//     return request(app.getHttpServer())
//       .get('/')
//       .expect(200)
//       .expect('Hello World!');
//   });
// });

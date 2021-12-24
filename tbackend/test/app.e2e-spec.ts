import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('ControllerTest (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  }, 20000);

  const postData = {
    name: 'Lonart',
    diseases: ['Malaria', 'Typhoid'],
    description: 'This is generally caused by mosquito bites',
    released: '22-12-2021',
  };

  it('/v1/drugs (GET)', () => {
    return request(app.getHttpServer()).get('/v1/drugs').expect(200);
  });
  it('/v1/drugs no data (POST)', () => {
    return request(app.getHttpServer()).post('/v1/drugs').expect(500);
  });
  it('/v1/drugs no data (PUT)', () => {
    return request(app.getHttpServer()).put('/v1/drugs/1000').expect(200);
  });
  it('/v1/drugs no data (POST)', () => {
    return request(app.getHttpServer())
      .post('/v1/drugs')
      .send(postData)
      .expect(201);
  });
});

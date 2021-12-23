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

  it('/v1/drugs (GET)', () => {
    return request(app.getHttpServer()).get('/v1/drugs').expect(200);
  });
  it('/v1/drugs (POST)', () => {
    return request(app.getHttpServer()).post('/v1/drugs').expect(400);
  });
});

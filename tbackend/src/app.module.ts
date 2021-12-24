import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { DrugsModule } from './drugs/drugs.module';
// import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drug } from './drugs/drugs.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DATABASE_HOST'),
        // port: config.get('DATABASE_PORT'),
        username: config.get('DATABASE_USERNAME'),
        password: config.get('DATABASE_PASSWORD'),
        database: config.get('DATABASE_NAME'),
        entities: [Drug],
        synchronize: true,
        keepConnectionAlive: true
      }),
      inject: [ConfigService],
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (config: ConfigService) => ({
    //     type: 'mongodb',
    //     url: `mongodb+srv://${config.get('MONGO_USER')}:${config.get(
    //       'MONGO_PASSWORD',
    //     )}@cluster0.9gwvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    //     entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    //     synchronize: true,
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     logging: true,
    //   }),
    //   inject: [ConfigService],
    // }),
    DrugsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (config: ConfigService) => {
    //     return {
    //       uri: `mongodb+srv://${config.get('MONGO_USER')}:${config.get(
    //         'MONGO_PASSWORD',
    //       )}@cluster0.9gwvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    //     };
    //   },
    //   inject: [ConfigService],
    // }),
    TypeOrmModule.forFeature([Drug]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

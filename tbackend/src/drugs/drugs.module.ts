import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DrugsController } from './drugs.controller';
import { Drug } from './drugs.entity';
import { DrugsResolver } from './drugs.resolver';
// import { DrugSchema } from './drugs.schema';
import { DrugsService } from './drugs.service';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: 'Drug', schema: DrugSchema }]),
    TypeOrmModule.forFeature([Drug]),
  ],
  controllers: [DrugsController],
  providers: [DrugsService, DrugsResolver],
  // exports: [MongooseModule],
})
export class DrugsModule {}

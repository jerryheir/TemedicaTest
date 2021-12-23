import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { Drug } from './drugs.entity';
import { DrugDto } from './dto/drugs.dto';

@Injectable()
export class DrugsService {
  constructor(
    @InjectRepository(Drug) private readonly drugsRepository: Repository<Drug>,
  ) {}

  async create(object: DrugDto): Promise<Drug> {
    return await this.drugsRepository.save(object);
  }

  async update(i: any, object: any): Promise<Drug> {
    await this.drugsRepository.update(i.id, object);
    return await this.drugsRepository.findOne(i.id);
  }

  async findAll(): Promise<Drug[]> {
    return await this.drugsRepository.find();
  }

  async findOne(object: any): Promise<Drug> {
    const result = await this.drugsRepository.findOne(object);
    return result;
  }

  async delete(object: any): Promise<string> {
    await this.drugsRepository.delete(object);
    return 'success';
  }

  async search(string: string): Promise<Drug[]> {
    const data = await getRepository(Drug)
      .createQueryBuilder('drug')
      .where('drug.name like :name', { name: `%${string}%` })
      .orWhere('drug.diseases like :name', { name: `%${string}%` })
      .getMany();
    return data;
  }
}

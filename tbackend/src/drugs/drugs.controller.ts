import {
  Controller,
  InternalServerErrorException,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ResponseData } from '../interfaces';
import { DrugsService } from './drugs.service';
import { DrugDto } from './dto/drugs.dto';
import { DrugUpdateInput } from './input/drugs.input';

@Controller('v1/drugs')
export class DrugsController {
  constructor(private readonly drugsService: DrugsService) {}

  @Get()
  async getDrugs(@Param('input') input?: string): Promise<ResponseData> {
    try {
      if (!input) {
        const data = await this.drugsService.findAll();
        return {
          status: 'success',
          message: 'Drugs retrieved successfully',
          data: data,
        };
      } else {
        const data = await this.drugsService.search(input);
        return {
          status: 'success',
          message: 'Drugs retrieved successfully',
          data: data,
        };
      }
    } catch (err) {
      throw new InternalServerErrorException({
        status: 'error',
        message: 'An error occurred!',
      });
    }
  }

  // @Get('/:id')
  // async getOneDrug(@Param('id') id: string): Promise<ResponseData> {
  //   try {
  //     const data = await this.drugsService.findOne({ id: id });
  //     return {
  //       status: 'success',
  //       message: 'Drug retrieved successfully',
  //       data: data,
  //     };
  //   } catch (err) {
  //     throw new InternalServerErrorException('An error occurred!');
  //   }
  // }

  @Post()
  async createDrugs(@Body() data: DrugDto): Promise<ResponseData> {
    try {
      const result = await this.drugsService.create(data);
      return {
        status: 'success',
        message: 'Drug created successfully',
        data: result,
      };
    } catch (err) {
      throw new InternalServerErrorException({
        status: 'error',
        message: 'An error occurred!',
      });
    }
  }

  @Put('/:id')
  async updateDrugs(
    @Param('id') id: string,
    @Body() data: DrugUpdateInput,
  ): Promise<ResponseData> {
    try {
      const result = await this.drugsService.update({ id }, data);
      return {
        status: 'success',
        message: 'Drug updated successfully',
        data: result,
      };
    } catch (err) {
      throw new InternalServerErrorException({
        status: 'error',
        message: 'An error occurred!',
      });
    }
  }

  @Delete('/:id')
  async deleteDrug(@Param('id') id: string): Promise<ResponseData> {
    try {
      await this.drugsService.delete({ id });
      return {
        status: 'success',
        message: 'Drug deleted successfully',
      };
    } catch (err) {
      throw new InternalServerErrorException({
        status: 'error',
        message: 'An error occurred!',
      });
    }
  }
}

import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { Drug } from './drugs.entity';
import { DrugsService } from './drugs.service';
import { DrugInput, DrugUpdateInput, IdInput } from './input/drugs.input';

@Resolver()
export class DrugsResolver {
  constructor(private readonly drugsService: DrugsService) {}

  @Query(() => [Drug])
  async drugs(@Args('input', { nullable: true }) input?: string) {
    if (!input) return await this.drugsService.findAll();
    return await this.drugsService.search(input);
  }

  // @Query(() => Drug)
  // async getOneDrug(@Args('input') input: IdInput) {
  //   return await this.drugsService.findOne(input);
  // }

  @Mutation(() => Drug)
  async createDrug(@Args('data') data: DrugInput) {
    return await this.drugsService.create(data);
  }

  @Mutation(() => Drug)
  async updateDrug(
    @Args('input') input: IdInput,
    @Args('data') data: DrugUpdateInput,
  ) {
    return await this.drugsService.update(input, { ...data });
  }

  @Mutation(() => String)
  async deleteDrug(@Args('input') input: IdInput) {
    await this.drugsService.delete(input);
    return 'deleted';
  }
}

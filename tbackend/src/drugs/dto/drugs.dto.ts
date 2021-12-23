import { IsNotEmpty, IsOptional } from 'class-validator';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DrugDto {
  @IsNotEmpty()
  @Field()
  readonly name: string;
  @IsOptional()
  @Field(() => [String])
  readonly diseases?: string[];
  @IsNotEmpty()
  @Field()
  readonly description: string;
  @IsNotEmpty()
  @Field()
  readonly released: string;
}

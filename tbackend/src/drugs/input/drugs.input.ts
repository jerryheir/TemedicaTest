import { IsNotEmpty, IsOptional } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DrugInput {
  @IsNotEmpty()
  @Field()
  readonly name: string;
  @IsOptional()
  @Field(() => [String], { defaultValue: [], nullable: true })
  readonly diseases?: string[];
  @IsNotEmpty()
  @Field()
  readonly description: string;
  @IsNotEmpty()
  @Field()
  readonly released: string;
}

@InputType()
export class DrugUpdateInput {
  @IsOptional()
  @Field({ nullable: true })
  readonly name: string;
  @IsOptional()
  @Field(() => [String], { nullable: true })
  readonly diseases?: string[];
  @IsOptional()
  @Field({ nullable: true })
  readonly description: string;
  @IsOptional()
  @Field({ nullable: true })
  readonly released: string;
}

@InputType()
export class IdInput {
  @IsNotEmpty()
  @Field()
  readonly id: number;
}

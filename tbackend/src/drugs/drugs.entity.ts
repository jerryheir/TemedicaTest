import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('drug')
@ObjectType()
export class Drug {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;
  @Column()
  @Field()
  name: string;
  @Column('simple-array')
  @Field(() => [String], { nullable: true })
  diseases?: string[];
  @Column({ type: 'text' })
  @Field()
  description: string;
  @Column()
  @Field()
  released: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Field, Int, ObjectType, HideField } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';

@Entity('users')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Column({ type: 'varchar', length: 100 })
  @Field()
  name!: string;  // Added name column

  @Column({ type: 'varchar', length: 100, unique: true })
  @Field()
  email!: string;

  @Column({ type: 'varchar', length: 255 })
  @Exclude()
  @HideField()
  password!: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  @Field({ nullable: true })
  role?: string;  // Added role column with a nullable option

  @Column({ type: 'varchar', length: 255, nullable: true })
  @Field({ nullable: true })
  profile_picture?: string;  // Added profile_picture column with nullable option

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  bio?: string;  // Added bio column with nullable option

  @Column({ type: 'varchar', length: 100, nullable: true })
  @Field({ nullable: true })
  location?: string;  // Added location column with nullable option

  @CreateDateColumn()
  @HideField()
  created_at!: Date;  // Automatically set by TypeORM

  @UpdateDateColumn()
  @HideField()
  updatedAt!: Date;  // Automatically set by TypeORM
}

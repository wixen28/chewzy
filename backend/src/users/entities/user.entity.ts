import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn 
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';

export enum UserRole {
  PET_OWNER = 'Pet Owner',
  PET_SITTER = 'Pet Sitter',
  ADMIN = 'Admin',
}

@Entity('users')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Column({ name: 'full_name', type: 'varchar', length: 100 })
  @Field()
  fullName!: string; // Matches full_name in DB

  @Column({ type: 'varchar', length: 100, unique: true })
  @Field()
  email!: string;

  @Column({ type: 'varchar', length: 255 })
  @Exclude()
  password!: string;

  @Column({
    type: 'varchar',
    length: 20,
    nullable: true,
    enum: UserRole, // Optional enum enforcement in TypeORM
  })
  @Field({ nullable: true })
  role?: UserRole;

  @Column({ name: 'profile_picture', type: 'varchar', length: 255, nullable: true })
  @Field({ nullable: true })
  profilePicture?: string; // Matches profile_picture in DB

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  bio?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @Field({ nullable: true })
  location?: string;

  @CreateDateColumn({ name: 'created_at' })
  @Field(() => Date)
  createdAt!: Date; // Matches created_at in DB

  @UpdateDateColumn({ name: 'updated_at' })
  @Field(() => Date)
  updatedAt!: Date; // Matches updated_at in DB
}

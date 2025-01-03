import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db.ddzcbujzsgfstpzsxbzg.supabase.co',
      port: 5432,
      username: 'postgres',
      password: 'dRuOwHi3qgBLk9Se',
      database: 'postgres',
      entities: [User], 
      synchronize: true,
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), 
      debug: true,
      playground: true,
    }),

    UsersModule, // Make sure UsersModule is configured properly
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

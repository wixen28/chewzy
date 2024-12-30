import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { UsersModule } from './users/users.module'
import { User } from './users/entities/user.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'db.ddzcbujzsgfstpzsxbzg.supabase.co', 
      port: 5432,
      username: 'postgres',
      password: 'dRuOwHi3qgBLk9Se', 
      database: 'postgres', 
      entities: [User], // Add all your entities here (e.g., User, Pet, Booking, etc.)
      synchronize: true,
    }),

    // GraphQL Module 
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,  // Use true if you want to auto-generate the schema file in memory
      debug: true,  // Enable debug to see more details about the error
      playground: true,
    }),

    // Your modules (Users, Pets, etc.)
    UsersModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

// import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
// import { join } from 'path';

// @Module({
//   imports: [
//     GraphQLModule.forRoot<ApolloDriverConfig>({
//       driver: ApolloDriver,
//       playground: false, // Disable playground in production
//       plugins: [ApolloServerPluginLandingPageLocalDefault()], 
//       autoSchemaFile: join(process.cwd(), 'src/schema.gql'), 
//       context: ({ req, res }: { req: Request; res: Response }) => ({ req, res }), 
//     }),
//   ],
// })
// export class GraphqlModule {}

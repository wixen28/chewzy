import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'


export const CurrentUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const context = GqlExecutionContext.create(ctx)
    return context.getContext().req.user
  },
)
import { Prisma } from '@prisma/client'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class RoleCreateInput implements Prisma.RoleCreateInput {
  @Field()
  code: string

  @Field()
  name: string

  @Field()
  description: string
}

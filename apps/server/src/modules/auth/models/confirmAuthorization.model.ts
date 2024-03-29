import { Field, ObjectType } from '@nestjs/graphql'
import { UserModel } from '@/modules/user/user.model'

@ObjectType()
export class ConfirmAuthorizationModel {
  @Field()
  access_token: string
  @Field()
  message: string
  @Field((type) => UserModel)
  user: UserModel
}

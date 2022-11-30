import { Mapper } from "@/app/base/Mapper";
import User from "../../domain/User";
import UserEntity from "./UserEntity";

export default class UserMapper extends Mapper<UserEntity, User> {
  mapFrom(param: UserEntity): User {
    return new User(
      param.firstName,
      param.lastName,
      "",
      param.gender,
      param.avatar,
      param.email,
      param.password
    );
  }
  mapTo(param: User): UserEntity {
    return new UserEntity(
      param.firstName,
      param.lastName,
      param.gender,
      param.avatar,
      param.email,
      param.password
    );
  }
}

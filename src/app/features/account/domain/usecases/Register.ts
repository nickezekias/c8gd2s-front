import { IUseCase } from "@/app/base/IUseCase";
import AuthRepository from "../AuthRepository";
import User from "../User";

export default class Register
  implements IUseCase<Record<string, string>, User>
{
  constructor(private _repository: AuthRepository) {}

  execute(params: Record<string, string>): Promise<User> {
    return this._repository.register(params);
  }
}

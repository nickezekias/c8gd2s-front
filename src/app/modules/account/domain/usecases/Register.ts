import type { IUseCase } from "@/app/base/IUseCase";
import type AuthRepository from "../AuthRepository";
import type User from "../User";

export default class Register
  implements IUseCase<Record<string, string>, User>
{
  constructor(private _repository: AuthRepository) {}

  execute(params: Record<string, string>): Promise<User> {
    return this._repository.register(params);
  }
}

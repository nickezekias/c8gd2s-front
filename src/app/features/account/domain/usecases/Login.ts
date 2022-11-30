import type { IUseCase } from "@/app/base/IUseCase";
import type AuthRepository from "../AuthRepository";

export default class Login implements IUseCase<Record<string, string>, void> {
  constructor(private _repository: AuthRepository) {}

  async execute(params: Record<string, string>): Promise<void> {
    await this._repository.csrf();
    return this._repository.login(params);
  }
}

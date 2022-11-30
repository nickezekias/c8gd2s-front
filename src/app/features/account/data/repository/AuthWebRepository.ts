import type HttpClient from "@/app/base/http/HttpClient";
import AuthRepository from "../../domain/AuthRepository";
import type User from "../../domain/User";
import type UserEntity from "./UserEntity";
import UserMapper from "./UserMapper";

interface HttpResponse {
  data: Record<string, unknown> & {
    data: void | User;
  };
}

export default class AuthWebRepository extends AuthRepository {
  private _mapper = new UserMapper();

  constructor(private _httpClient: HttpClient<HttpResponse>) {
    super();
  }

  async csrf(): Promise<unknown> {
    return this._httpClient.get("sanctum/csrf-cookie");
  }

  async login({ email, password }: Record<string, string>): Promise<void> {
    await this._httpClient.post("/login", { email, password });
  }

  async register({
    name,
    email,
    password,
    passwordConfirmation,
  }: Record<string, string>): Promise<User> {
    const res = await this._httpClient.post("/register", {
      name,
      email,
      password,
      passwordConfirmation,
    });
    return this._mapper.mapFrom(res.data.data as UserEntity);
  }
}

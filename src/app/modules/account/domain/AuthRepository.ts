import type User from "./User";
export default abstract class AuthRepository {
  abstract csrf(): Promise<unknown>;

  abstract login({ email, password }: Record<string, string>): Promise<void>;

  abstract register({
    name,
    email,
    password,
    passwordConfirmation,
  }: Record<string, string>): Promise<User>;
}

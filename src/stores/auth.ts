import { ref } from "vue";
import { defineStore } from "pinia";
import LoginUseCase from "@/app/features/account/domain/usecases/Login";
import AuthWebRepository from "@/app/features/account/data/repository/AuthWebRepository";
import HttpClient from "@/app/lib/http/HttpClient";

const repository = new AuthWebRepository(new HttpClient());

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);

  async function login({ email, password }: Record<string, string>) {
    const res = await new LoginUseCase(repository).execute({ email, password });
    console.log("LOGIN RESPONSE", res);
  }

  return { user, login };
});

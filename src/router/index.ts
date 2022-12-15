import { createRouter, createWebHistory } from "vue-router";
import GuestLayout from "@/shared/layouts/GuestLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: GuestLayout,
      children: [
        {
          path: "",
          redirect: "/login",
          meta: { middleware: ["guest"] },
        },
        {
          path: "/login",
          name: "Login",
          component: () =>
            import("@/app/modules/account/presentation/login/Index.vue"),
        },
        {
          path: "/register",
          component: () =>
            import("@/app/modules/account/presentation/register/Index.vue"),
          children: [
            {
              path: "",
              component: () =>
                import(
                  "@/app/modules/account/presentation/register/steps/PersonalInfo.vue"
                ),
            },
            {
              path: "business-information",
              component: () =>
                import(
                  "@/app/modules/account/presentation/register/steps/BusinessInfo.vue"
                ),
            },
            {
              path: "workspace",
              component: () =>
                import(
                  "@/app/modules/account/presentation/register/steps/WorkspaceInfo.vue"
                ),
            },
          ],
        },
      ],
    },
  ],
});

export default router;

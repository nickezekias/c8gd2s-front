import { createRouter, createWebHistory } from "vue-router";
import GuestLayout from "@/app/shared/layouts/GuestLayout.vue";

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
          path: "/forgot-password",
          name: "forgotPassword",
          component: () =>
            import(
              "@/app/modules/account/presentation/forgot-password/Index.vue"
            ),
        },
        {
          path: "/login",
          name: "login",
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
              name: "register",
              component: () =>
                import(
                  "@/app/modules/account/presentation/register/steps/PersonalInfo.vue"
                ),
            },
            {
              path: "business-information",
              name: "register.businessInformation",
              component: () =>
                import(
                  "@/app/modules/account/presentation/register/steps/BusinessInfo.vue"
                ),
            },
            {
              path: "workspace",
              name: "register.workspaceInformation",
              component: () =>
                import(
                  "@/app/modules/account/presentation/register/steps/WorkspaceInfo.vue"
                ),
            },
            {
              path: "confirmation",
              name: "register.confirmation",
              component: () =>
                import(
                  "@/app/modules/account/presentation/register/steps/ReviewInfo.vue"
                ),
            },
          ],
        },
        {
          path: "/reset-password",
          name: "resetPassword",
          component: () =>
            import(
              "@/app/modules/account/presentation/reset-password/Index.vue"
            ),
        },
      ],
    },
  ],
});

export default router;

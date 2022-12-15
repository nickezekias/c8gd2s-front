import { createRouter, createWebHistory } from "vue-router";
import GuestLayout from "@/views/layouts/GuestLayout.vue";

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
              path: "step-2",
              component: () =>
                import(
                  "@/app/modules/account/presentation/register/RegisterStep2.vue"
                ),
            },
          ],
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;

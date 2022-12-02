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
          path: "/",
          redirect: "/login",
          meta: { middleware: ["guest"] },
        },
        {
          path: "/login",
          name: "Login",
          component: () => import("../views/auth/LoginView.vue"),
        },
        {
          path: "/register",
          name: "Register",
          component: () => import("../views/auth/RegisterView.vue"),
        },
        {
          path: "/step-1",
          component: () =>
            import(
              "@/app/features/account/presentation/register/RegisterStep1.vue"
            ),
        },
      ],
    },
    {
      path: "/step-1",
      component: () =>
        import(
          "@/app/features/account/presentation/register/RegisterStep1.vue"
        ),
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

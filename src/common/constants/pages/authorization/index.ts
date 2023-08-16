import { createPage } from "@/shared/libs/pages-router";

export const authorization = [
  createPage("/auth/sign-up", "sign-up", {
    name: { en: "Sign-up", ru: "Регистрация" },
    includes: { "footer_quick": true }
  }),
  createPage("/auth/sign-in", "sign-in", {
    name: { en: "Sign-in", ru: "Вход" },
    includes: { "footer_quick": true }
  }),
  createPage("/auth/forgot-password", "forgot-password", {
    name: { en: "Forgot password", ru: "Восстановить пароль" }
  }),
  createPage("/auth/change-password/[hash]", "change-password", {
    name: { en: "Change password", ru: "Изменить пароль" }
  }),
  createPage("/auth/change-email/[hash]", "change-email", {
    name: { en: "Change email", ru: "Изменить почту" }
  }),
  createPage("/auth/success", "auth-success", {
    name: { en: "Sign-up success", ru: "Регистрация завершена" }
  })
]
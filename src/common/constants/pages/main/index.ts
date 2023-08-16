import { createPage } from "@/shared/libs/pages-router";

export const main = [
  createPage("/", "main", {
    name: { en: "Home", ru: "Главная" },
    includes: { "not_found": true }
  }),
  createPage("/catalog", "catalog", {
    name: { en: "Catalog", ru: "Каталог" },
    includes: { "not_found": true }
  }),
  createPage("/profile/support?chatId=[id]", "support", {
    name: { en: "Support", ru: "Поддержка" },
    includes: { "footer_quick": true },
    initialValues: { "id": "@support" }
  })
]
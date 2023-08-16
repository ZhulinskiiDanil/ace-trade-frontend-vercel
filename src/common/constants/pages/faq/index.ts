import { createPage } from "@/shared/libs/pages-router";

export const faq = [
  createPage("/faq", "faq", {
    name: { en: "FAQ", ru: "FAQ" },
    includes: { "footer_faq": true }
  })
]
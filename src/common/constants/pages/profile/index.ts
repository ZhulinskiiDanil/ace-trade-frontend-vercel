import { createPage } from "@/shared/libs/pages-router";

export const profile = [
  createPage("/profile", "profile", {
    name: { en: "Profile", ru: "Профиль" },
    includes: { "burger": true }
  }),
  createPage("/profile/chat?chatId=[chatId]", "messages", {
    name: { en: "Messages", ru: "Сообщения" },
    includes: { "burger": true },
    initialValues: { chatId: "" }
  }),
  createPage("/profile/funds", "funds", {
    name: { en: "Funds", ru: "Средства" },
    includes: { "burger": true }
  }),
  createPage("/profile/ads", "ads", {
    name: { en: "Ads", ru: "Объявления" },
    includes: { "burger": true }
  }),
  createPage("/profile/disputes", "disputes", {
    name: { en: "Disputes", ru: "Споры" },
    includes: { "burger": true }
  }),
  createPage("/profile/settings", "settings", {
    name: { en: "Settings", ru: "Настройки" },
    includes: { "burger": true }
  }),
  createPage("/profile/favorites", "favorites", {
    name: { en: "Favorites", ru: "Избранные" },
    includes: { "burger": true }
  })
]
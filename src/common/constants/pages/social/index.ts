import { createPage } from "@/shared/libs/pages-router";

export const social = [
  createPage("/1", "telegramChanel", {
    name: { en: "Telegram Chanel", ru: "Телеграм Сообщество" },
    includes: { "footer_social": true }
  }),
  createPage("/2", "vkChanel", {
    name: { en: "Vk Chanel", ru: "VK Сообщество" },
    includes: { "footer_social": true }
  }),
  createPage("/3", "facebook", {
    name: { en: "Facebook", ru: "Facebook" },
    includes: { "footer_social": true }
  }),
  createPage("/4", "youtube", {
    name: { en: "Youtube", ru: "Youtube" },
    includes: { "footer_social": true }
  }),
  createPage("/5", "twiter", {
    name: { en: "Twiter", ru: "Twiter" },
    includes: { "footer_social": true }
  })
]
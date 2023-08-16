import { pages } from "@pages"

// Types
import { IPage } from "@/shared/libs/pages-router"

const page = pages.get({ name: "home" })

// Decompose to ../types.ts
export interface IFooterLinksList {
  listName: string
  links: IPage[]
}

export const footerLinks: IFooterLinksList[] = [
  {
    listName: "Быстрый доступ",
    links: pages.includes({ name: "footer_quick" })
  },
  {
    listName: "FAQ",
    links: pages.includes({ name: "footer_faq" })
  },
  {
    listName: "Соц-сети",
    links: pages.includes({ name: "footer_social" })
  },
  {
    listName: "Документы",
    links: [
      page,
    ]
  }
]
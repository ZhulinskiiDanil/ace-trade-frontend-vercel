import { pages } from "@constants/pages"

// Types
import { IPage } from "@/shared/libs/pages-router"
import { SVGProps } from "react"

// Icons
import {
  ArchiveIcon, ChatsIcon, HeartIcon,
  SettingsIcon, UserIcon, WalletIcon,
  WarningIcon
} from "@/shared/svg"

export interface IPageWithIcon {
  link: IPage
  icon: null | React.FC<SVGProps<SVGSVGElement>>
}

export const headerPages: IPageWithIcon[] = [
  { link: pages.get({ name: "main" }),      icon: UserIcon },
  { link: pages.get({ name: "catalog" }),   icon: ChatsIcon },
  { link: pages.get({ name: "support" }),   icon: WalletIcon }
]

export const profilePages: IPageWithIcon[] = [
  { link: pages.get({ name: "profile" }),   icon: UserIcon },
  { link: pages.get({ name: "messages" }),  icon: ChatsIcon },
  { link: pages.get({ name: "funds" }),     icon: WalletIcon },
  { link: pages.get({ name: "ads" }),       icon: ArchiveIcon },
  { link: pages.get({ name: "disputes" }),  icon: WarningIcon },
  { link: pages.get({ name: "favorites" }), icon: HeartIcon },
  { link: pages.get({ name: "settings" }),  icon: SettingsIcon }
]
import { IPage, Pages } from "@pages-router"

// Pages
import { main } from "./main"
import { disputes } from "./disputes"
import { authorization } from "./authorization"
import { profile } from "./profile"
import { products } from "./products"
import { social } from "./social"
import { faq } from "./faq"

const mainPages             = $assignPages(...main)
const productsPages         = $assignPages(...products)
const disputesPages         = $assignPages(...disputes)
const authorizationPages    = $assignPages(...authorization)
const profilePages          = $assignPages(...profile)
const socialPages           = $assignPages(...social)
const faqPages              = $assignPages(...faq)

export const pages = new Pages($assignPages(
  mainPages,
  authorizationPages,
  profilePages,
  socialPages,
  faqPages,
  productsPages,
  disputesPages
))

function $assignPages(...pagesFromProps: { [key: string]: IPage }[]) {
  let result: { [key: string]: IPage } = {}

  for (const page of pagesFromProps) {
    result = { ...result, ...page }
  }
  
  return result
}
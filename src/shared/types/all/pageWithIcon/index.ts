import { SVGProps } from "react"
import { IPage } from "@/shared/libs/pages-router"

export interface IPageWithIcon {
  link: IPage
  icon: null | React.FC<SVGProps<SVGSVGElement>>
}
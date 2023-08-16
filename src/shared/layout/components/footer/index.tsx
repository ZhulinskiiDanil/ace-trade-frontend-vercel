import * as FooterComponent from "@/widgets/Footer"
import { createComponent } from "@layout"

export const Footer = createComponent({
  Component(props?: any) {
    return <FooterComponent.Footer {...props} />
  }
})
import * as HeaderComponent from "@/widgets/Header"
import { createComponent } from "@layout"

export const Header = createComponent({
  Component(props?: any) {
    return <HeaderComponent.Header {...props} />
  }
})
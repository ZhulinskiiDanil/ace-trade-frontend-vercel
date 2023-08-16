// Псевдо компонент для указания порядка в DOM дереве
import { createComponent } from "@layout"

export const Content = createComponent({
  Component() {},
  isMain: true
})
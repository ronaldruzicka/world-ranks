import { Breakpoints } from './constants'

export const mq = (key: keyof typeof Breakpoints) => (
  styles: TemplateStringsArray | string,
) => `@media screen and (min-width: ${Breakpoints[key]}px) {${styles}}`

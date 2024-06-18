import { THEME } from '@FE/theme'
import { DefaultTheme } from 'styled-components'

type ExtendedTheme = typeof THEME

declare module 'styled-components' {
    interface DefaultTheme extends ExtendedTheme {}
}

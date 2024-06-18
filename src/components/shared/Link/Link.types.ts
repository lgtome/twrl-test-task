import { ROUTES } from 'src/common'
import { ExtractValues } from 'src/types'

export interface LinkProps {
    to: ExtractValues<typeof ROUTES>
    isArrow?: boolean
    icon?: JSX.Element
    isBorder?: boolean
}

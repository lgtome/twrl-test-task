import { ROUTES } from 'src/common'
import { ExtractValues } from 'src/types'

export interface InfoBlockProps {
    text: string
    title: string
    link: {
        text: string
        icon: JSX.Element
        to: ExtractValues<typeof ROUTES>
    }
}

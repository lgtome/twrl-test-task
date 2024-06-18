import React, { FC } from 'react'
import { InfoBlockDescription, InfoBlockLinkBlock, InfoBlockTitle, InfoBlockWrapper } from './InfoBlock.styles'
import { InfoBlockProps } from './InfoBlock.types'
import { Link } from '../shared/Link/Link'

export const InfoBlock: FC<InfoBlockProps> = ({ link, text, title }) => {
    return (
        <InfoBlockWrapper>
            <InfoBlockTitle>{title}</InfoBlockTitle>
            <InfoBlockDescription>{text}</InfoBlockDescription>
            <InfoBlockLinkBlock>
                <Link to={link.to} icon={link.icon} isArrow>
                    {link.text}
                </Link>
            </InfoBlockLinkBlock>
        </InfoBlockWrapper>
    )
}

import React from 'react'
import { LinkWrapper } from './Link.styles'
import { LinkProps } from './Link.types'
import { FCC } from 'src/types'

export const Link: FCC<LinkProps> = ({ children, isArrow, icon: Icon, isBorder = true, to = '/' }) => {
    return (
        <LinkWrapper to={to} isArrow={isArrow} isBorder={isBorder}>
            {Icon}
            {children}
        </LinkWrapper>
    )
}

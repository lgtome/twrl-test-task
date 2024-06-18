import React from 'react'
import { HeaderLinks, HeaderRepresentation, HeaderTitle, HeaderWrapper } from './Header.styles'
import { StyledLogo } from '../shared'
import { NAVIGATION_ROUTES } from 'src/common'
import { Link } from '../shared/Link/Link'
import { checkIsElementLast } from './Header.helpers'

export const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderRepresentation>
                <Link to={'/'} isBorder={false}>
                    <StyledLogo />
                </Link>
                <HeaderTitle>Techwhirl</HeaderTitle>
            </HeaderRepresentation>
            <HeaderLinks>
                {Object.entries(NAVIGATION_ROUTES).map(([name, route], index, array) => {
                    return (
                        <Link to={route} isArrow={checkIsElementLast(index, array.length)}>
                            {name}
                        </Link>
                    )
                })}
            </HeaderLinks>
        </HeaderWrapper>
    )
}

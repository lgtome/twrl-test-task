import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { LinkProps } from './Link.types'

export const LinkWrapper = styled(Link)<Pick<LinkProps, 'isArrow' | 'isBorder'>>`
    all: unset;

    font-size: ${({ theme }) => theme.fontSizes.regular};
    display: flex;
    align-items: center;
    text-transform: capitalize;

    display: flex;
    justify-content: center;
    gap: 8px;

    cursor: pointer;

    ${({ isBorder }) => {
        if (isBorder) {
            return css`
                border-bottom: 1px solid ${({ theme }) => theme.colors.shades.lightGray};
                transition: border-color 0.25s ease;

                &:hover {
                    border-color: ${({ theme }) => theme.colors.primary.gray};
                }
            `
        }
    }}

    ${({ isArrow }) => {
        if (isArrow) {
            return css`
                &::after {
                    content: '↗';
                    font-family: monospace;
                }
            `
        }
    }}
`

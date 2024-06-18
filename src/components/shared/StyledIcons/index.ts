import styled from 'styled-components'
import LogoSVG from '@FE/assets/icons/logo.svg'

export const StyledLogo = styled(LogoSVG)`
    transition: transform 0.25s ease;

    &:hover {
        transform: rotate(180deg);
    }
`

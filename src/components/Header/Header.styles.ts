import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 21px;
    border: 1px solid ${({ theme }) => theme.colors.primary.gray};
    border-radius: 30px;
`

export const HeaderLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 55px;
`

export const HeaderRepresentation = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`

export const HeaderTitle = styled.div`
    font-family: ${({ theme }) => theme.fontFamilies.heading};
    font-size: ${({ theme }) => theme.fontSizes.medium};
`

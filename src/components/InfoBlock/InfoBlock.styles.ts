import styled from 'styled-components'

export const InfoBlockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.primary.milky};
    border-radius: 30px;
    padding: 26px 58px;
    flex: 1.4;
`

export const InfoBlockDescription = styled.div`
    height: 60%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.shades.lightGray};
`
export const InfoBlockTitle = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-family: ${({ theme }) => theme.fontFamilies.heading};
`
export const InfoBlockLinkBlock = styled.div`
    align-self: flex-start;
    padding-bottom: 12px;
`

import styled from 'styled-components'

export const ImageBlockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 807px;
    max-width: 662px;
    background-color: ${({ theme }) => theme.colors.primary.yellow};
    border-radius: 30px;
    overflow: hidden;
    flex: 1;
`
export const ImageBlockImage = styled.img`
    flex: 3;
    object-fit: contain;
    max-width: 100%;
    height: auto;
    transition: transform 0.25s ease;

    &:hover {
        transform: scale(1.1);
    }
`
export const ImageBlockImageWrapper = styled.div`
    width: 100%;
    object-fit: contain;
    overflow: hidden;
`
export const ImageBlockDescription = styled.div`
    flex: 2;
    width: 82%;
    height: 90%;
    align-self: center;
    padding: 27px 0;
    color: ${({ theme }) => theme.colors.shades.darkGray};
    line-height: 42px;
    font-size: ${({ theme }) => theme.fontSizes.semiLight};
`

import React, { FC } from 'react'
import { ImageBlockWrapper, ImageBlockDescription, ImageBlockImage, ImageBlockImageWrapper } from './ImageBlock.styles'
import { ImageBlockProps } from './ImageBlock.types'

export const ImageBlock: FC<ImageBlockProps> = ({ image, text }) => {
    return (
        <ImageBlockWrapper>
            <ImageBlockImageWrapper>
                <ImageBlockImage src={image} />
            </ImageBlockImageWrapper>
            <ImageBlockDescription>{text}</ImageBlockDescription>
        </ImageBlockWrapper>
    )
}

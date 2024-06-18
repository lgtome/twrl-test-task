import React from 'react'
import { HomeLayoutIntroduction, HomeLayoutWrapper } from './HomeLayout.styles'
import { LayoutWrapper } from 'src/components/shared'
import { ImageBlock } from 'src/components/ImageBlock/ImageBlock'
import ferrisWheel from '@FE/assets/images/ferrisWheel.png'
import LinkedIn from '@FE/assets/icons/linkedIn.svg'
import { InfoBlock } from 'src/components/InfoBlock/InfoBlock'

export const HomeLayout = () => {
    return (
        <LayoutWrapper>
            <HomeLayoutWrapper>
                <HomeLayoutIntroduction>
                    <InfoBlock
                        link={{ text: 'Get to know us better', icon: <LinkedIn />, to: '/' }}
                        text={`Techwhirl is a team of like-minded individuals
                                who share a common vision for the new era
                                of IT products. We strive to bring user
                                experiences to an entirely new level – for the
                                benefit of millions around the globe.`}
                        title='Turning cutting-edge tech into
                                enjoyable apps'
                    />
                    <ImageBlock
                        image={ferrisWheel}
                        text={
                            'With the majority of staff based in Ukraine, we’re proud to enable local talents to realize their potential at a scale.'
                        }
                    />
                </HomeLayoutIntroduction>
            </HomeLayoutWrapper>
        </LayoutWrapper>
    )
}

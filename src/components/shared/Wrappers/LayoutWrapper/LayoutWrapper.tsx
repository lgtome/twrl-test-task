import React from 'react'
import { LayoutWrapperContainer } from './LayoutWrapper.styles'
import { FCC } from 'src/types'

export const LayoutWrapper: FCC<unknown> = ({ children }) => {
    return <LayoutWrapperContainer>{children}</LayoutWrapperContainer>
}

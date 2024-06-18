import React from 'react'
import { PageWrapperContainer } from './PageWrapper.styles'
import { Outlet } from 'react-router'
import { Header } from 'src/components/Header/Header'

export const PageWrapper = () => {
    return (
        <PageWrapperContainer>
            <Header />
            <Outlet />
        </PageWrapperContainer>
    )
}

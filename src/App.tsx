import { Route, Routes } from 'react-router'
import { Redirect } from './components/shared'
import { HomeLayout } from './layouts/Home/HomeLayout'
import { PageWrapper } from './components/shared/'
import { ROUTES } from './common'

export function App() {
    return (
        <Routes>
            <Route path={ROUTES.home} element={<PageWrapper />}>
                <Route path={'/'} element={<HomeLayout />} />
                <Route path='*' element={<Redirect />} />
            </Route>
        </Routes>
    )
}

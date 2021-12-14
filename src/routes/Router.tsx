import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import { AppWrapper, MainWrapper } from '../style/globalStyle'
import { publicRoutes } from './public/Public'

export default function Router() {
    const renderRoutes = () => {
        return publicRoutes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                element={route.element}
                index={route.exact}
            />
        ))
    }

    return (
        <BrowserRouter>
            <AppWrapper>
                <Nav />
                <MainWrapper>
                    <Routes>
                        {renderRoutes()}
                    </Routes>
                </MainWrapper>
            </AppWrapper>
        </BrowserRouter>
    )
}

import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
} from 'react-router-dom'

import { ROUTE_CASE_THANKS, ROUTE_HOME, ROUTE_LOGIN } from '@/constants/route'
import { CaseThanks } from '@/views/CaseThanks'
import { ErrorPage } from '@/views/ErrorPage'
import { Home } from '@/views/Home'
import { Login } from '@/views/Login'

import { PrivateRoute } from './PrivateRoute'

export const allRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path={ROUTE_LOGIN}
            element={<Outlet />}
            errorElement={<ErrorPage />}
        >
            <Route index element={<Login />} />
            <Route
                path={ROUTE_HOME}
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route
                path={ROUTE_CASE_THANKS}
                element={
                    <PrivateRoute>
                        <CaseThanks />
                    </PrivateRoute>
                }
            />
        </Route>,
    ),
)

import { FC, ReactNode } from 'react'
import { Navigate } from 'react-router'

import { ROUTE_LOGIN } from '@/constants/route'
import { useAuth } from '@/zustand/auth'

interface PrivateRouteProps {
    children: ReactNode
}

export const PrivateRoute: FC<PrivateRouteProps> = function ({ children }) {
    const auth = useAuth()

    return auth.numberDocument ? children : <Navigate to={ROUTE_LOGIN} />
}

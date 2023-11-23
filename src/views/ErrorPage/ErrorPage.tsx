import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTE_LOGIN } from '@/constants/route'

import styles from './ErrorPage.module.scss'

export const ErrorPage: FC = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.error}>
            <div className={styles.error_title}>Oops!</div>
            <div className={styles.error_description}>
                Lo sentimos, la ruta ingresada es incorrecta.
            </div>
            <div
                className={styles.error_link}
                onClick={() => navigate(ROUTE_LOGIN)}
            >
                Volver al inicio.
            </div>
        </div>
    )
}

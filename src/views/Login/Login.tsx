import { FC, useEffect } from 'react'

import { Header } from '@/components/Header'
import { useAmount } from '@/zustand/amount'
import { useAuth } from '@/zustand/auth'

import { SectionAds } from './components/SectionAds'
import { SectionForm } from './components/SectionForm'
import styles from './Login.module.scss'

export const Login: FC = () => {
    const { setAuth } = useAuth()
    const { reset } = useAmount()

    useEffect(() => {
        setAuth({ numberDocument: '', phone: 0, plate: '', typeDocument: '' })
        reset()
    }, [])

    return (
        <div className={styles.login}>
            <Header />
            <div className={styles.login_body}>
                <SectionAds />
                <SectionForm />
            </div>
        </div>
    )
}

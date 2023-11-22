import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTE_LOGIN } from '@/constants/route'
import { classNames } from '@/helpers/classNames'
import { ArrowLeftIcon } from '@/toolbox/assets/icons'

import styles from './Stepper.module.scss'

export const Stepper: FC = () => {
    const navigate = useNavigate()

    const [step, setStep] = useState<number>(1)

    useEffect(() => {
        setTimeout(() => {
            setStep(2)
        }, 500)
    }, [])

    return (
        <div className={styles.stepper}>
            <div className={styles.stepper_step}>
                <div
                    className={styles.stepper_step_icon}
                    onClick={() => navigate(ROUTE_LOGIN)}
                >
                    <ArrowLeftIcon className={styles.stepper_step_icon_arrow} />
                </div>
                <div className={styles.stepper_step_text}>
                    Paso{' '}
                    <span className={styles.stepper_step_text_step}>
                        {step}
                    </span>{' '}
                    de 2
                </div>
            </div>
            <div
                className={classNames({
                    [styles.stepper_bar]: true,
                    [styles.stepper_bar_completed]: step === 2,
                })}
            />
        </div>
    )
}

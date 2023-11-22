import { FC, useEffect, useState } from 'react'

import { classNames } from '@/helpers/classNames'

import styles from './Sidebar.module.scss'

const steps = ['Datos', 'Arma tu plan']

export const Sidebar: FC = () => {
    const [step, setStep] = useState<number>(1)

    useEffect(() => {
        setTimeout(() => {
            setStep(2)
        }, 300)
    }, [])

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar_stepper}>
                {steps.map((item, idx) => (
                    <div
                        key={idx}
                        className={classNames({
                            [styles.sidebar_stepper_step]: true,
                            [styles.sidebar_stepper_step_active]:
                                idx + 1 === step,
                        })}
                    >
                        <div className={styles.sidebar_stepper_step_number}>
                            {idx + 1}
                        </div>
                        <div className={styles.sidebar_stepper_step_item}>
                            {item}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

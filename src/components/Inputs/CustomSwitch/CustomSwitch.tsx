import { FC } from 'react'

import { classNames } from '@/helpers/classNames'

import styles from './CustomSwitch.module.scss'

interface ICustomSwitchProps {
    value: boolean
    onChange: (value: boolean) => void
}

export const CustomSwitch: FC<ICustomSwitchProps> = ({ value, onChange }) => {
    return (
        <div
            className={classNames({
                [styles.switch]: true,
                [styles.switch_checked]: value,
            })}
            onClick={() => onChange(value)}
        >
            <div className={styles.switch_track}>
                <div className={styles.switch_track_thumb}></div>
            </div>
        </div>
    )
}

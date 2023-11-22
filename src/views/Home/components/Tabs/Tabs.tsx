import { FC, ReactNode, useState } from 'react'

import { classNames } from '@/helpers/classNames'

import { ProtectCar } from './ProtetCard'
import styles from './Tabs.module.scss'

interface ITabsOptions {
    header: string
    children: ReactNode
}

const tabsOptions: ITabsOptions[] = [
    { header: `PROTEGE A TU AUTO`, children: <ProtectCar /> },
    { header: 'PROTEGE A LOS QUE TE RODEAN', children: <ProtectCar /> },
    { header: 'MEJORA TU PLAN', children: <ProtectCar /> },
]

export const Tabs: FC = () => {
    const [selected, setSelected] = useState<number>(0)

    return (
        <div className={styles.tabs}>
            <div className={styles.tabs_header}>
                {tabsOptions.map(({ header }, idx) => (
                    <div
                        key={idx}
                        className={classNames({
                            [styles.tabs_header_option]: true,
                            [styles.tabs_header_option_selected]:
                                idx === selected,
                        })}
                        onClick={() => setSelected(idx)}
                    >
                        {header}
                    </div>
                ))}
            </div>

            <div className={styles.tabs_body}>
                {tabsOptions[selected].children}
            </div>
        </div>
    )
}

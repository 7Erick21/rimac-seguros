import { FC, ReactNode, useEffect, useState } from 'react'
import { useMedia } from 'react-use'

import { CustomSwitch } from '@/components/Inputs'
import { classNames } from '@/helpers/classNames'
import {
    AddIcon,
    ArrowDownIcon,
    ArrowTopIcon,
    RolledTireIcon,
    RunOverIcon,
    ShockIcon,
    SubtractIcon,
} from '@/toolbox/assets/icons'
import { useAmount } from '@/zustand/amount'

import styles from './ProtectCar.module.scss'

interface IOptionsProtectCar {
    title: string
    icon: ReactNode
    description: string
    active: boolean
    hide: boolean
    value: number
}

const optionsProtectCar: IOptionsProtectCar[] = [
    {
        active: false,
        hide: false,
        description:
            'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis',
        icon: <RolledTireIcon />,
        title: 'Llanta robada',
        value: 15,
    },
    {
        hide: true,
        active: false,
        description:
            'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis',
        icon: <ShockIcon />,
        title: 'Choque y/o pasarte la luz roja',
        value: 20,
    },
    {
        active: false,
        hide: true,
        description:
            'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis',
        icon: <RunOverIcon />,
        title: 'Atropello en la vía Evitamiento',
        value: 50,
    },
]

export const ProtectCar: FC = () => {
    const CardItem = ({
        active,
        description,
        icon,
        title,
        hide: hideComponent,
        value,
    }: IOptionsProtectCar) => {
        const isDesktop = useMedia(`(min-width: 960px)`)

        const { price, incrementAmmount, decrementAmmount } = useAmount()

        const [hide, setHide] = useState<boolean>(hideComponent)
        const [switchValue, setSwitchValue] = useState<boolean>(active)

        useEffect(() => {
            if (price > 16000 && value === 20) {
                if (switchValue) {
                    decrementAmmount(optionsProtectCar[1].value)
                    setSwitchValue(false)
                }
            }
        }, [price])

        return (
            <div className={styles.card_item}>
                <div className={styles.card_item_image}>{icon}</div>
                <div className={styles.card_item_body}>
                    <div className={styles.card_item_body_content}>
                        <div className={styles.card_item_body_content_head}>
                            <div
                                className={
                                    styles.card_item_body_content_head_title
                                }
                            >
                                {title}
                                {isDesktop && (
                                    <div
                                        className={classNames({
                                            [styles.card_item_body_content_head_title_hide]:
                                                true,
                                            [styles.card_item_body_content_head_title_hide_disabled]:
                                                price > 16000 && value === 20,
                                        })}
                                        onClick={() => {
                                            if (
                                                !(value === 20 && price > 16000)
                                            ) {
                                                setSwitchValue((prev) => !prev)
                                                if (!switchValue) {
                                                    incrementAmmount(value)
                                                } else {
                                                    decrementAmmount(value)
                                                }
                                            }
                                        }}
                                    >
                                        <div
                                            className={
                                                styles.card_item_body_content_head_title_hide_icon
                                            }
                                        >
                                            {switchValue ? (
                                                <SubtractIcon />
                                            ) : (
                                                <AddIcon />
                                            )}
                                        </div>
                                        <div
                                            className={
                                                styles.card_item_body_content_head_title_hide_text
                                            }
                                        >
                                            {switchValue ? 'QUITAR' : 'AGREGAR'}
                                        </div>
                                    </div>
                                )}
                            </div>
                            {isDesktop ? (
                                <div
                                    className={
                                        styles.card_item_body_content_head_hide
                                    }
                                    onClick={() => setHide((prev) => !prev)}
                                >
                                    {hide ? (
                                        <ArrowDownIcon fill='red' />
                                    ) : (
                                        <ArrowTopIcon fill='red' />
                                    )}
                                </div>
                            ) : (
                                <CustomSwitch
                                    value={switchValue}
                                    onChange={(prevValue) => {
                                        if (!(value === 20 && price > 16000)) {
                                            setSwitchValue((prev) => !prev)
                                            if (!prevValue) {
                                                incrementAmmount(value)
                                            } else {
                                                decrementAmmount(value)
                                            }
                                        }
                                    }}
                                />
                            )}
                        </div>
                        <div
                            className={classNames({
                                [styles.card_item_body_content_description]:
                                    true,
                                [styles.card_item_body_content_description_hide]:
                                    hide,
                            })}
                        >
                            {description}
                        </div>
                    </div>
                    {!isDesktop && (
                        <div
                            className={classNames({
                                [styles.card_item_body_hide]: true,
                                [styles.card_item_body_hide_true]: hide,
                            })}
                            onClick={() => setHide((prev) => !prev)}
                        >
                            <div className={styles.card_item_body_hide_text}>
                                ver menos
                            </div>
                            {!hide ? (
                                <ArrowTopIcon width={16} height={16} />
                            ) : (
                                <ArrowDownIcon width={16} height={16} />
                            )}
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className={styles.card}>
            {optionsProtectCar.map((data, idx) => (
                <CardItem key={idx} {...data} />
            ))}
        </div>
    )
}

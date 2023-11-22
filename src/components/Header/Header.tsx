import { FC } from 'react'
import { useMedia } from 'react-use'

import { EVariantGeneral } from '@/enums/variants'
import { classNames } from '@/helpers/classNames'
import { LogoIcon, PhoneIcon } from '@/toolbox/assets/icons'

import styles from './Header.module.scss'

interface IHeaderProps {
    variant?: EVariantGeneral
}

export const Header: FC<IHeaderProps> = ({
    variant = EVariantGeneral.DEFAULT,
}) => {
    const isDesktop = useMedia(`(min-width: 960px)`)

    return (
        <div
            className={classNames({
                [styles.header]: true,
                [styles.header_outline]: variant === EVariantGeneral.OUTLINE,
            })}
        >
            <LogoIcon className={styles.header_logo} />
            <div className={styles.header_contact}>
                {isDesktop && (
                    <div className={styles.header_contact_doubt}>
                        ¿Tienes alguna duda?
                    </div>
                )}
                <div className={styles.header_contact_phone}>
                    <PhoneIcon width={24} height={24} />
                    <div className={styles.header_contact_phone_text}>
                        {isDesktop ? `(01) 411 6001` : 'Llámanos'}
                    </div>
                </div>
            </div>
        </div>
    )
}

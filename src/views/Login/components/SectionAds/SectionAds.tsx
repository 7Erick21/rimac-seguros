import { FC } from 'react'
import { useMedia } from 'react-use'

import { WomenDesktopIcon, WomenMobileIcon } from '@/toolbox/assets/icons'

import styles from './SectionAds.module.scss'

export const SectionAds: FC = () => {
    const isDesktop = useMedia(`(min-width: 960px)`)

    return (
        <div className={styles.body_ads}>
            {isDesktop && <div className={styles.body_ads_background}></div>}
            <div className={styles.body_ads_body}>
                {isDesktop ? (
                    <WomenDesktopIcon className={styles.body_ads_body_image} />
                ) : (
                    <WomenMobileIcon className={styles.body_ads_body_image} />
                )}
                <div className={styles.body_ads_body_text}>
                    <div className={styles.body_ads_body_text_new}>¡NUEVO!</div>
                    <div className={styles.body_ads_body_text_content}>
                        <div
                            className={styles.body_ads_body_text_content_title}
                        >
                            {isDesktop ? 'Seguro ' : 'Seguro Vehicular '}
                            <span
                                className={
                                    styles.body_ads_body_text_content_title_red
                                }
                            >
                                {isDesktop ? 'Vehicular Tracking' : 'Tracking'}
                            </span>
                        </div>
                        <div
                            className={
                                styles.body_ads_body_text_content_description
                            }
                        >
                            Cuentanos donde le haras seguimiento a tu seguro
                        </div>
                    </div>
                </div>
            </div>
            {isDesktop && (
                <div className={styles.body_ads_copyright}>
                    © 2021 RIMAC Seguros y Reaseguros.
                </div>
            )}
        </div>
    )
}

import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMedia } from 'react-use'

import { Header } from '@/components/Header'
import { ROUTE_LOGIN } from '@/constants/route'
import { EVariantGeneral } from '@/enums/variants'
import {
    CaseThanksDesktopIcon,
    CaseThanksMobileIcon,
} from '@/toolbox/assets/icons'

import styles from './CaseThanks.module.scss'

export const CaseThanks: FC = () => {
    const isDesktop = useMedia(`(min-width: 960px)`)

    const navigate = useNavigate()

    return (
        <div className={styles.view}>
            <Header variant={EVariantGeneral.OUTLINE} />
            <div className={styles.view_body}>
                <div className={styles.view_body_sidebar}>
                    {isDesktop ? (
                        <CaseThanksDesktopIcon
                            className={styles.view_body_sidebar_image_desktop}
                        />
                    ) : (
                        <CaseThanksMobileIcon
                            className={styles.view_body_sidebar_image_mobile}
                        />
                    )}
                </div>
                <div className={styles.view_body_content}>
                    <div className={styles.view_body_content_data}>
                        <div className={styles.view_body_content_data_title}>
                            <span
                                className={
                                    styles.view_body_content_data_title_red
                                }
                            >
                                ¡Te damos la bienvenida!
                                <br />
                            </span>
                            Cuenta con nosotros para proteger tu vehículo
                        </div>
                        <div
                            className={
                                styles.view_body_content_data_description
                            }
                        >
                            Enviaremos la confirmación de compra de tu Plan
                            Vehícular Tracking a tu correo: <br />
                            <span
                                className={
                                    styles.view_body_content_data_description_weight
                                }
                            >
                                joel.sanchez@gmail.com
                            </span>
                        </div>
                    </div>
                    <button
                        className={styles.view_body_content_button}
                        onClick={() => navigate(ROUTE_LOGIN)}
                    >
                        cómo usar mi seguro
                    </button>
                </div>
                {!isDesktop && (
                    <div className={styles.view_body_copyright}>
                        © 2021 RIMAC Seguros y Reaseguros.
                    </div>
                )}
            </div>
        </div>
    )
}

import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMedia } from 'react-use'

import { Header } from '@/components/Header'
import { ROUTE_CASE_THANKS, ROUTE_LOGIN } from '@/constants/route'
import { EVariantGeneral } from '@/enums/variants'
import {
    AddIcon,
    ArrowLeftIcon,
    CheckIcon,
    PersonIcon,
    SubtractIcon,
} from '@/toolbox/assets/icons'
import { useAmount } from '@/zustand/amount'
import { useAuth } from '@/zustand/auth'

import { Sidebar } from './components/Sidebar'
import { Stepper } from './components/Stepper'
import { Tabs } from './components/Tabs'
import styles from './Home.module.scss'

const optionsPriceIncludes = [
    'Llanta de respuesto',
    'Analisis de motor',
    'Aros gratis',
]

export const Home: FC = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const isDesktop = useMedia(`(min-width: 960px)`)
    const { price, decrementPrice, incrementPrice, amountTotal } = useAmount()

    const formattedValue = price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })

    return (
        <div className={styles.home}>
            <Header variant={EVariantGeneral.OUTLINE} />
            <div className={styles.home_body}>
                {isDesktop ? <Sidebar /> : <Stepper />}
                <div className={styles.home_body_content}>
                    <div className={styles.home_body_content_user}>
                        {isDesktop && (
                            <div
                                className={styles.home_body_content_user_back}
                                onClick={() => navigate(ROUTE_LOGIN)}
                            >
                                <div
                                    className={
                                        styles.home_body_content_user_back_icon
                                    }
                                >
                                    <ArrowLeftIcon />
                                </div>
                                <div
                                    className={
                                        styles.home_body_content_user_back_text
                                    }
                                >
                                    VOLVER
                                </div>
                            </div>
                        )}
                        <div className={styles.home_body_content_user_data}>
                            <div
                                className={
                                    styles.home_body_content_user_data_person
                                }
                            >
                                <div
                                    className={
                                        styles.home_body_content_user_data_person_header
                                    }
                                >
                                    {isDesktop ? (
                                        <div
                                            className={
                                                styles.home_body_content_user_data_person_header_title
                                            }
                                        >
                                            ¡Hola,{' '}
                                            <span
                                                className={
                                                    styles.home_body_content_user_data_person_header_title_name
                                                }
                                            >
                                                Juan!
                                            </span>
                                        </div>
                                    ) : (
                                        <div
                                            className={
                                                styles.home_body_content_user_data_person_header_title_mobile
                                            }
                                        >
                                            Mira las coberturas
                                        </div>
                                    )}
                                    <div
                                        className={
                                            styles.home_body_content_user_data_person_header_description
                                        }
                                    >
                                        Conoce las coberturas para tu plan
                                    </div>
                                </div>
                                <div
                                    className={
                                        styles.home_body_content_user_data_person_card
                                    }
                                >
                                    <div
                                        className={
                                            styles.home_body_content_user_data_person_card_data
                                        }
                                    >
                                        <div
                                            className={
                                                styles.home_body_content_user_data_person_card_data_plate
                                            }
                                        >
                                            Placa: {auth.plate}
                                        </div>
                                        <div
                                            className={
                                                styles.home_body_content_user_data_person_card_data_car
                                            }
                                        >
                                            Wolkswagen 2019 Golf
                                        </div>
                                    </div>
                                    <PersonIcon
                                        className={
                                            styles.home_body_content_user_data_person_card_image
                                        }
                                    />
                                </div>
                            </div>
                            <div
                                className={
                                    styles.home_body_content_user_data_price
                                }
                            >
                                <div
                                    className={
                                        styles.home_body_content_user_data_price_content
                                    }
                                >
                                    <div
                                        className={
                                            styles.home_body_content_user_data_price_content_title
                                        }
                                    >
                                        Indica la suma asegurada
                                    </div>
                                    <div
                                        className={
                                            styles.home_body_content_user_data_price_content_range
                                        }
                                    >
                                        <div
                                            className={
                                                styles.home_body_content_user_data_price_content_range_min
                                            }
                                        >
                                            MIN $12,500
                                        </div>
                                        <div
                                            className={
                                                styles.home_body_content_user_data_price_content_range_line
                                            }
                                        />
                                        <div
                                            className={
                                                styles.home_body_content_user_data_price_content_range_max
                                            }
                                        >
                                            MAX $16,500
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        styles.home_body_content_user_data_price_input
                                    }
                                >
                                    <SubtractIcon
                                        className={
                                            styles.home_body_content_user_data_price_input_subtract
                                        }
                                        onClick={() =>
                                            price > 12500
                                                ? decrementPrice(100)
                                                : () => {}
                                        }
                                    />
                                    <input
                                        type='text'
                                        value={formattedValue}
                                        onChange={() => {}}
                                        className={
                                            styles.home_body_content_user_data_price_input_value
                                        }
                                    />
                                    <AddIcon
                                        className={
                                            styles.home_body_content_user_data_price_input_add
                                        }
                                        onClick={() => incrementPrice(100)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.home_body_content_user_tab}>
                            <div
                                className={
                                    styles.home_body_content_user_tab_title
                                }
                            >
                                Agrega o quita coberturas
                            </div>
                            <Tabs />
                        </div>
                    </div>
                    {isDesktop ? (
                        <div className={styles.home_body_content_total}>
                            <div
                                className={styles.home_body_content_total_head}
                            >
                                <div
                                    className={
                                        styles.home_body_content_total_head_text
                                    }
                                >
                                    Monto
                                </div>
                                <div
                                    className={
                                        styles.home_body_content_total_head_amount
                                    }
                                >
                                    <div
                                        className={
                                            styles.home_body_content_total_head_amount_total
                                        }
                                    >
                                        ${amountTotal}.00
                                    </div>
                                    <div
                                        className={
                                            styles.home_body_content_total_head_amount_text
                                        }
                                    >
                                        mensuales
                                    </div>
                                </div>
                            </div>
                            <div
                                className={styles.home_body_content_total_body}
                            >
                                <div
                                    className={
                                        styles.home_body_content_total_body_content
                                    }
                                >
                                    <div
                                        className={
                                            styles.home_body_content_total_body_content_title
                                        }
                                    >
                                        El precio incluye:
                                    </div>
                                    <div
                                        className={
                                            styles.home_body_content_total_body_content_options
                                        }
                                    >
                                        {optionsPriceIncludes.map(
                                            (item, idx) => (
                                                <div
                                                    key={idx}
                                                    className={
                                                        styles.home_body_content_total_body_content_options_option
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.home_body_content_total_body_content_options_option_icon
                                                        }
                                                    >
                                                        <CheckIcon />
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.home_body_content_total_body_content_options_option_item
                                                        }
                                                    >
                                                        {item}
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>
                                <button
                                    className={
                                        styles.home_body_content_total_body_button
                                    }
                                    onClick={() => navigate(ROUTE_CASE_THANKS)}
                                >
                                    lo quiero
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.home_body_content_total_mobile}>
                            <div
                                className={
                                    styles.home_body_content_total_mobile_content
                                }
                            >
                                <div
                                    className={
                                        styles.home_body_content_total_mobile_content_amount
                                    }
                                >
                                    ${amountTotal}.00
                                </div>
                                <div
                                    className={
                                        styles.home_body_content_total_mobile_content_text
                                    }
                                >
                                    MENSUAL
                                </div>
                            </div>
                            <button
                                onClick={() => navigate(ROUTE_CASE_THANKS)}
                                className={
                                    styles.home_body_content_total_mobile_button
                                }
                            >
                                lo quiero
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

import { FC, Fragment, ReactNode, useEffect, useRef, useState } from 'react'
import { useMedia } from 'react-use'

import { EVariantGeneral } from '@/enums/variants'
import { classNames } from '@/helpers/classNames'
import { ISelectOptions } from '@/interfaces/customSelect'
import { ArrowDownIcon } from '@/toolbox/assets/icons'

import styles from './CustomSelect.module.scss'

interface ICustomSelectProps<T> {
    options: ISelectOptions<T>[]
    value: T | null
    onChange: (value: T) => void
    variant?: EVariantGeneral
}

export const CustomSelect: FC<ICustomSelectProps<ReactNode>> = ({
    value,
    options,
    onChange,
    variant = EVariantGeneral.DEFAULT,
}) => {
    const isDesktop = useMedia(`(min-width: 960px)`)

    const targetRef = useRef<HTMLDivElement>(null)

    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                targetRef.current &&
                !targetRef.current.contains(event.target as Node)
            ) {
                setOpen(false)
            }
        }

        const handleEscapeKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        document.addEventListener('keydown', handleEscapeKeyPress)

        return () => {
            document.removeEventListener('click', handleClickOutside)
            document.removeEventListener('keydown', handleEscapeKeyPress)
        }
    }, [])

    return (
        <Fragment>
            <div
                ref={targetRef}
                className={classNames({
                    [styles.select]: true,
                    [styles.select_outline]:
                        variant === EVariantGeneral.OUTLINE,
                })}
                onClick={() => setOpen((prev) => !prev)}
            >
                <div className={styles.select_value}>
                    <div
                        className={classNames({
                            [styles.select_value_text]: true,
                            [styles.select_value_placeholder]: value === null,
                        })}
                    >
                        {value ?? 'Seleccione'}
                    </div>
                    <ArrowDownIcon className={styles.select_icon} />
                </div>

                <div
                    className={classNames({
                        [styles.select_overlay]: true,
                        [styles.select_overlay_open]: open,
                    })}
                >
                    {options?.map(({ label, value }, idx) => (
                        <div
                            key={idx}
                            className={styles.select_overlay_option}
                            onClick={() => onChange(value)}
                        >
                            {label}
                        </div>
                    ))}
                </div>
            </div>
            {open && isDesktop && <div className={styles.select_background} />}
        </Fragment>
    )
}

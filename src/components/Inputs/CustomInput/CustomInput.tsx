import { FC, ReactNode } from 'react'

import { EVariantGeneral } from '@/enums/variants'
import { classNames } from '@/helpers/classNames'

import styles from './CustomInput.module.scss'

interface ICustomInputProps<T> {
    value: string
    onChange: (value: T) => void
    onBlur?: (value: T) => void
    placeholder?: string
    variant?: EVariantGeneral
}

export const CustomInput: FC<ICustomInputProps<ReactNode>> = ({
    onChange,
    value,
    onBlur,
    placeholder,
    variant,
}) => {
    return (
        <input
            className={classNames({
                ['e-placeholder']: true,
                [styles.input]: true,
                [styles.input_outline]: variant === EVariantGeneral.OUTLINE,
            })}
            onChange={(e) => onChange(e.target.value)}
            onBlur={(e) => onBlur?.(e.target.value)}
            value={value}
            placeholder={placeholder}
        />
    )
}

import { FC } from 'react'

import { classNames } from '@/helpers/classNames'
import { CheckIcon } from '@/toolbox/assets/icons'

import styles from './CustomCheckBox.module.scss'

interface ICustomCheckBoxProps {
    value: boolean
    onChange: () => void
}

export const CustomCheckBox: FC<ICustomCheckBoxProps> = ({
    onChange,
    value,
}) => {
    return (
        <div
            className={classNames({
                [styles.checkbox]: true,
                [styles.checkbox_selected]: value,
            })}
            onClick={onChange}
        >
            <CheckIcon
                className={classNames({
                    [styles.checkbox_icon]: true,
                    [styles.checkbox_selected_icon]: value,
                })}
            />
        </div>
    )
}

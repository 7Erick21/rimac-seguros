import { FC, useEffect, useState } from 'react'

import { CustomCheckBox, CustomInput, CustomSelect } from '@/components/Inputs'
import { EVariantGeneral } from '@/enums/variants'
import { ISelectOptions } from '@/interfaces/customSelect'

import { useLogin } from '../../Login.hooks'
import styles from './SectionForm.module.scss'

enum EOptionsDocuments {
    DNI = 'DNI',
}

const optionsDocuments: ISelectOptions<EOptionsDocuments>[] = [
    { label: 'DNI', value: EOptionsDocuments.DNI },
]

export const SectionForm: FC = () => {
    const { mutate: login } = useLogin()

    const [document, setDocument] = useState<EOptionsDocuments | null>(null)
    const [errorDocument, setErrorDocument] = useState<boolean>(false)
    const [policy, setPolicy] = useState<boolean>(false)
    const [numberDocument, setNumberDocument] = useState<string>('')
    const [errorNumberDocument, setErrorNumberDocument] =
        useState<boolean>(false)
    const [phone, setPhone] = useState<string>('')
    const [errorPhone, setErrorPhone] = useState<boolean>(false)
    const [plate, setPlate] = useState<string>('')
    const [errorPlate, setErrorPlate] = useState<boolean>(false)

    const handleChangeNumberDocument = (value: string) => {
        const isValidNumber = /^\d+$/.test(value)

        if (isValidNumber && value.length <= 8) {
            setNumberDocument(value)
            setErrorNumberDocument(false)
        } else if (!isValidNumber && value.length === 0) {
            setNumberDocument(value)
            setErrorNumberDocument(false)
        }
    }

    const handleBlurNumberDocument = (value: string) => {
        if (document === null) setErrorDocument(true)
        if (value.length < 8) setErrorNumberDocument(true)
    }

    const handleChangePhone = (value: string) => {
        const isValidNumber = /^\d+$/.test(value)

        if (isValidNumber && value.length <= 9) {
            setPhone(value)
            setErrorPhone(false)
        } else if (!isValidNumber && value.length === 0) {
            setPhone(value)
            setErrorPhone(false)
        }
    }

    const handleBlurPhone = (value: string) => {
        if (value.length < 9) setErrorPhone(true)
    }

    const handleChangePlate = (value: string) => {
        const cleanedValue = value.replace(/[\s-]/g, '')

        if (cleanedValue.length <= 6) {
            const formattedPlate =
                cleanedValue.length <= 3
                    ? cleanedValue
                    : `${cleanedValue.slice(0, 3)}-${cleanedValue.slice(3)}`

            setPlate(formattedPlate.toUpperCase())
            setErrorPlate(false)
        } else if (cleanedValue.length === 0) {
            setPlate(cleanedValue.toUpperCase())
            setErrorPlate(false)
        }
    }

    const handleBlurPlate = (value: string) => {
        const cleanedValue = value.replace(/[\s-]/g, '')

        if (cleanedValue.length < 6) setErrorPlate(true)
    }

    const handleSumbitForm = () => {
        login({
            body: plate,
            id: Number(numberDocument),
            title: String(document),
            userId: Number(phone),
        })
    }

    useEffect(() => {
        if (document) setErrorDocument(false)
    }, [document])

    return (
        <div className={styles.body_form}>
            <div className={styles.body_form_content}>
                <div className={styles.body_form_content_data}>
                    <div className={styles.body_form_content_data_label}>
                        Déjanos tus datos
                    </div>
                    <div className={styles.body_form_content_data_inputs}>
                        <div
                            className={
                                styles.body_form_content_data_inputs_content
                            }
                        >
                            <div
                                className={
                                    styles.body_form_content_data_inputs_content_document
                                }
                            >
                                <div
                                    className={
                                        styles.body_form_content_data_inputs_content_document_select
                                    }
                                >
                                    <CustomSelect
                                        options={optionsDocuments}
                                        onChange={(value) =>
                                            setDocument(
                                                value as EOptionsDocuments,
                                            )
                                        }
                                        value={document}
                                        variant={EVariantGeneral.OUTLINE}
                                    />
                                </div>
                                <div
                                    className={
                                        styles.body_form_content_data_inputs_content_document_line
                                    }
                                />
                                <div
                                    className={
                                        styles.body_form_content_data_inputs_content_document_input
                                    }
                                >
                                    <CustomInput
                                        value={numberDocument}
                                        onChange={(value) =>
                                            handleChangeNumberDocument(
                                                String(value),
                                            )
                                        }
                                        onBlur={(value) =>
                                            handleBlurNumberDocument(
                                                String(value),
                                            )
                                        }
                                        placeholder='Nro. de doc'
                                        variant={EVariantGeneral.OUTLINE}
                                    />
                                </div>
                            </div>
                            {errorDocument && (
                                <div className='input_error_message'>
                                    Seleccione el tipo de documento.
                                </div>
                            )}
                            {errorNumberDocument && (
                                <div className='input_error_message'>
                                    Numero de documento inválido.
                                </div>
                            )}
                        </div>
                        <div
                            className={
                                styles.body_form_content_data_inputs_phone
                            }
                        >
                            <CustomInput
                                value={phone}
                                onChange={(value) =>
                                    handleChangePhone(String(value))
                                }
                                onBlur={(value) =>
                                    handleBlurPhone(String(value))
                                }
                                placeholder='Celular'
                            />
                            {errorPhone && (
                                <div className='input_error_message'>
                                    Numero de celular inválido.
                                </div>
                            )}
                        </div>
                        <div
                            className={
                                styles.body_form_content_data_inputs_plate
                            }
                        >
                            <CustomInput
                                value={plate}
                                onChange={(value) =>
                                    handleChangePlate(String(value))
                                }
                                onBlur={(value) =>
                                    handleBlurPlate(String(value))
                                }
                                placeholder='Placa'
                            />
                            {errorPlate && (
                                <div className='input_error_message'>
                                    Numero de placa inválido.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.body_form_content_policy}>
                    <div className={styles.body_form_content_policy_checkbox}>
                        <CustomCheckBox
                            value={policy}
                            onChange={() => setPolicy((prev) => !prev)}
                        />
                    </div>
                    <div className={styles.body_form_content_policy_text}>
                        Acepto la{` `}
                        <b
                            className={
                                styles.body_form_content_policy_text_weight
                            }
                        >
                            <u>Política de Protecciòn de Datos Personales</u>
                        </b>
                        {` `}y los{` `}
                        <b
                            className={
                                styles.body_form_content_policy_text_weight
                            }
                        >
                            <u>Términos y Condiciones.</u>
                        </b>
                    </div>
                </div>
            </div>
            <button
                className={styles.body_form_button}
                disabled={
                    errorNumberDocument ||
                    errorPhone ||
                    errorPlate ||
                    !policy ||
                    document === null
                }
                onClick={handleSumbitForm}
            >
                COTÍZALO
            </button>
        </div>
    )
}

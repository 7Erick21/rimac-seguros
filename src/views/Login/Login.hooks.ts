import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'

import { ROUTE_HOME } from '@/constants/route'
import { ELocalStorage } from '@/enums/localStorage'
import { IAuth } from '@/interfaces/auth'
import { IAuthLoginParams } from '@/models/auth'
import { AuthLoginServices } from '@/services/auth'
import { useAuth } from '@/zustand/auth'

export const useLogin = () => {
    const navigate = useNavigate()
    const { setAuth } = useAuth()
    const [, setValue] = useLocalStorage<IAuth>(ELocalStorage.AUTH)

    return useMutation(
        async (params: IAuthLoginParams) => await AuthLoginServices(params),
        {
            onSuccess: (resp) => {
                const newAuth = {
                    numberDocument: String(resp.id),
                    phone: resp.userId,
                    plate: resp.body,
                    typeDocument: resp.title,
                }
                setAuth(newAuth)
                setValue(newAuth)
                navigate(ROUTE_HOME)
            },
        },
    )
}

import axios from 'axios'

import { API_URL } from '@/constants/app'
import { IAuthLoginParams, IAuthResponse } from '@/models/auth'

import { IApiResponse } from '../api'

export const AuthLoginServices = async ({
    body,
    id,
    title,
    userId,
}: IAuthLoginParams) => {
    const resp = await axios.post<
        IApiResponse<IAuthResponse>,
        IApiResponse<IAuthResponse>,
        IAuthLoginParams
    >(`${API_URL}posts/`, { body, id, title, userId })

    return resp.data
}

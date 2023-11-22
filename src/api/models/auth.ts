export interface IAuth {
    userId: number
    id: number
    title: string
    body: string
}

export type IAuthLoginParams = IAuth
export type IAuthResponse = IAuth

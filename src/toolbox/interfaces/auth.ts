export interface IAuth {
    typeDocument: string
    numberDocument: string
    plate: string
    phone: number
}
export interface IAuthState extends IAuth {
    typeDocument: string
    numberDocument: string
    plate: string
    phone: number
    setAuth: (auth: IAuth) => void
}


import { IAuthState } from '@/interfaces/auth'
import { create } from 'zustand'

export const useAuth = create<IAuthState>((set) => ({
    numberDocument: '',
    phone: 0,
    plate: '',
    typeDocument: '',
    setAuth: (auth) => set((prev) => ({ ...prev, ...auth })),
}))

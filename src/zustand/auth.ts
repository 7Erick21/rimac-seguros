import { create } from 'zustand'

import { IAuthState } from '@/interfaces/auth'

export const useAuth = create<IAuthState>((set) => ({
    numberDocument: '',
    phone: 0,
    plate: '',
    typeDocument: '',
    setAuth: (auth) => set((prev) => ({ ...prev, ...auth })),
}))

import { create } from 'zustand'

import { IAmountState } from '@/interfaces/amount'

export const useAmount = create<IAmountState>((set) => ({
    price: 14000,
    amountTotal: 20,
    setPrice: (value) => set((prev) => ({ ...prev, price: value })),
    decrementPrice: (value) =>
        set((prev) => ({ ...prev, price: prev.price - value })),
    incrementPrice: (value) =>
        set((prev) => ({ ...prev, price: prev.price + value })),
    decrementAmmount: (value) =>
        set((prev) => ({ ...prev, amountTotal: prev.amountTotal - value })),
    incrementAmmount: (value) =>
        set((prev) => ({ ...prev, amountTotal: prev.amountTotal + value })),
    reset: () => set((prev) => ({ ...prev, amountTotal: 20, price: 14000 })),
}))

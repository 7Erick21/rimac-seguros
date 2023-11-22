export interface IAmountState {
    price: number
    amountTotal: number
    setPrice: (value: number) => void
    incrementPrice: (value: number) => void
    decrementPrice: (value: number) => void
    incrementAmmount: (value: number) => void
    decrementAmmount: (value: number) => void
    reset: () => void
}

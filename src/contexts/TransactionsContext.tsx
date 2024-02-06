import { ReactNode, useCallback, useEffect, useState } from "react"
import { createContext } from "use-context-selector"
import { api } from "../lib/axios"

interface Transaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
}

interface TransactionContextType {
    transactions: Transaction[],
    BuscaTransactions: (query?: string) => Promise<void>,
    createTransaction: (data: CreateTansactionInput) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface CreateTansactionInput {
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    const BuscaTransactions = useCallback(async (query?: string) => {

        const response = await api.get('/transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        })

        setTransactions(response.data)
    }, [])

    const createTransaction = useCallback(
        async (dados: CreateTansactionInput) => {

            const { description, price, category, type } = dados

            const response = await api.post("/transactions", { description, price, category, type, createdAt: new Date() })

            setTransactions(state => [response.data, ...state])
        },
        []
    )

    useEffect(() => {
        BuscaTransactions()
    }, [BuscaTransactions])

    return (
        <TransactionsContext.Provider value={{ transactions, BuscaTransactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )

}
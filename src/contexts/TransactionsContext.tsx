import { ReactNode, createContext, useEffect, useState } from "react"
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
    BuscaTransactions: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function BuscaTransactions(query?: string) {

        const response = await api.get('/transactions', {
            params: {
                q: query,
            }
        })

        setTransactions(response.data)
    }

    useEffect(() => {
        BuscaTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions, BuscaTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )

}
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/searchForm";
import { Summary } from "../../components/summary";
import { PriceHighLight, TansactionsTable, TransactionsContainer } from "./styles";

interface Transaction {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
}

export function Transcactions() {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function BuscaTransactions() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json()
        setTransactions(data)
    }

    useEffect(() => {
        BuscaTransactions()
    }, [])


    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TansactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>
                                            {transaction.price}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </TansactionsTable>
            </TransactionsContainer>

        </div>
    )
}
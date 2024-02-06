import { useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/searchForm";
import { Summary } from "../../components/summary";
import { PriceHighLight, TansactionsTable, TransactionsContainer } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Transcactions() {

    const { transactions } = useContext(TransactionsContext)

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
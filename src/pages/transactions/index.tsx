import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/searchForm";
import { Summary } from "../../components/summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { PriceHighLight, TansactionsTable, TransactionsContainer } from "./styles";

export function Transcactions() {

    const transactions = useContextSelector(TransactionsContext, (context) => { return context.transactions })

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TansactionsTable>
                    <tbody>
                        {
                            transactions.map(transaction => {
                                return (
                                    <tr key={transaction.id}>
                                        <td width="100%">{transaction.description}</td>
                                        <td>
                                            <PriceHighLight variant={transaction.type}>
                                                {transaction.type === 'outcome' && '- '}
                                                {priceFormatter.format(transaction.price)}
                                            </PriceHighLight>
                                        </td>
                                        <td>{transaction.category}</td>
                                        <td>{dateFormatter.format(new Date(transaction.created_at))}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </TansactionsTable>
            </TransactionsContainer>

        </div>
    )
}
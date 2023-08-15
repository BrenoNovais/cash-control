import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from '../../assets/logo-ignite.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>

                <img src={logo}></img>
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}
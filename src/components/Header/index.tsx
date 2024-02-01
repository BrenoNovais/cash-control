import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from '../../assets/logo-ignite.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt=" logo de dois triangulos translucidos sobrepostos na diagonal "/>
                <h1>DT MONEY</h1>
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}
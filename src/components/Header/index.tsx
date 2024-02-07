import * as Dialog from "@radix-ui/react-dialog";
import logo from '../../assets/logo-ignite.svg';
import { NewTransactionModal } from "../NewTransactionModal/indes";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";


export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt=" logo de dois triangulos translucidos sobrepostos na diagonal " />
                <h1>CASH💲CONTROL</h1>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>
                    <NewTransactionModal />
                </Dialog.Root>

            </HeaderContent>
        </HeaderContainer>
    )
}
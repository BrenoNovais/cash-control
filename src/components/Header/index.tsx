import * as Dialog from "@radix-ui/react-dialog";
import logo from '../../assets/logo-ignite.svg';
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} alt=" logo de dois triangulos translucidos sobrepostos na diagonal " />
                <h1>DT MONEY</h1>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.Overlay></Dialog.Overlay>
                        <Dialog.Content>
                            <Dialog.Title>Nova transação</Dialog.Title>

                            <Dialog.Close />
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
                
            </HeaderContent>
        </HeaderContainer>
    )
}
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";
//comando asChild Faz com que a tag não crie um novo botão ams sim aproveite o conteudo que está dentro dela
export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt=""></img>

                <Dialog.Root>

                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>
                    
                    <NewTransactionModal/>

                </Dialog.Root>                
                
            </HeaderContent>
        </HeaderContainer>
    )
}
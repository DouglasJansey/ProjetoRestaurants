import React, {useEffect} from "react";
import Portal from './Portal';
import { Overlay, Dialog } from "./Portal/styles";

const Modal = ({children, open, onClose}) => {
    //Usando a Telca Esc para fechar o modal
    useEffect(() => {
        function onEsc(e){
            if(e.keyCode === 27) onClose();
        }
        window.addEventListener('keydown', onEsc)
        //Evitando que o evento seja ouvido a toda hora
        return () =>{
            window.removeEventListener('keydown', onEsc);
        };
    }, [onClose]);//Função que será o gatilho para o useEffect

    if(!open) return null;

    function onOverClick() {
        onClose();
    
    }
    function onDialogClick(e){
        e.stopPropagation();
    }
    return (
    <Portal>
       <Overlay onClick={onOverClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
       </Overlay>
    </Portal>
    )
};

export default Modal;
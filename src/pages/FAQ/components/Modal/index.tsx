import React, { useState } from "react";
import S from './style';
import More from '../../assets/plus.svg';
import Less from '../../assets/minus.svg'

type TModal = {
    title: string,
    description?: string
};

const Modal: React.FC<TModal> = ({title, description}) => {

    const [ isOpen, setIsOpen ] = useState(false);
    const onModalClick = (e: any) => {
        setIsOpen(!isOpen)
    }
    const imageSrc = isOpen ? Less : More;
 
    return (
    <S.Modal onClick={onModalClick} >
        <S.ModalCell className={isOpen ? 'open' : ''}>
            <S.Title>
                <S.Text className='text'>{title}</S.Text>
                <img src={imageSrc} className='action' alt='Robot boy using laptop'/>
            </S.Title>
            <S.Description>
                {description}
            </S.Description>
        </S.ModalCell>
    </S.Modal>
    )
}

export default Modal;
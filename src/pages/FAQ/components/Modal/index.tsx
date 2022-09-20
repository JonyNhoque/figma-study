import React, { useState } from "react";
import S from './style';
import Plus from '../../src/plus.svg'

type TModal = {
    title: string,
    description?: string
}

const Modal: React.FC<TModal> = ({title, description}) => {

    return (
    <S.Modal>
        <S.ModalCell>
            <S.Text>{title}</S.Text>
            <S.Action src={Plus} />
        </S.ModalCell>
    </S.Modal>
    )
}

export default Modal;
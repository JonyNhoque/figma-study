import React from "react";
import S from './style'

type TButton = {
    buttonTitle: String,
}

const Button = ({ buttonTitle }: TButton) => {
    return (
        <S.Button>{buttonTitle}</S.Button>
    )
};

export default Button;
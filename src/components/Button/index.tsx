import React from "react";
import S from './style'

type TButton = {
    buttonTitle: String
}

const Button: React.FunctionComponent<TButton> = ({buttonTitle}) => {
    return (
        <S.Button>{buttonTitle}</S.Button>
    )
};

export default Button;
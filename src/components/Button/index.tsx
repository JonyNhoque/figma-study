import React from "react";
import S from './style'

type TButton = {
    theme?: string,
    children: React.ReactNode
}

const Button: React.FC<TButton> = ({ theme, children }) => {


    return (
        <S.Button theme={theme}>{children}</S.Button>
    )
};

export default Button;
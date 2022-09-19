import React from "react";
import S from './style'

type TButton = {
    bgColor?: string,
    color?: string,
    hover?: boolean,
    children: React.ReactNode
}

const Button: React.FC<TButton> = ({ bgColor, hover, color, children }) => {
    

    return (
        <S.Button bgColor={bgColor} color={color} hover={hover}>{children}</S.Button>
    )
};

export default Button;
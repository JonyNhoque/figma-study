import React from "react";
import S from "./style";

type TNumbers = {
    number: number,
    tag: string
}

const Numbers: React.FC<TNumbers> = ({ number, tag }) => {
    return (
        <S.NumberCell>
            <S.Number>{number}</S.Number>
            <S.CellTag>{tag}</S.CellTag>
        </S.NumberCell>
    )
}

export default Numbers;
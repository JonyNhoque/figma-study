import React from "react";
import S from "./style";

type TCard ={
    src: string,
    name: string,
    service: string
};

const Card: React.FC<TCard> = ({src, name, service}) => {
    return(
        <S.Card>
            <S.ImageHolder>
                <S.Image src={src}/>
            </S.ImageHolder>
            <S.Title>
                <S.Name>{name}</S.Name>
                <S.Service>{service}</S.Service>
            </S.Title>
        </S.Card>
    )
};

export default Card
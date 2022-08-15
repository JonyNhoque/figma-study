import React from "react";
import S from './style';

type TCard ={
    icon: string,
    title: string,
    description: string,
}

const Card:React.FC<TCard> = ({ icon, title, description }) => {
    return(
        <S.Card>
            <S.IconHolder>
                <img src={icon} />
            </S.IconHolder>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.Link>Find Out More...</S.Link>
        </S.Card>
    )
};

export default Card;
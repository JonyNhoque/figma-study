import React from "react";
import S from "./style";

type TCard = {
    src: string,
    name: string,
    ocupation: string,
}

const Card: React.FC<TCard> = ({ src, name, ocupation }) => {
    return( 
        <S.Card>
            <S.Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</S.Text>
            <S.PersonHolder>
                <S.AvatarHolder>
                    <S.Avatar src={src}/>
                </S.AvatarHolder>
                <S.Person>
                    <S.Name>{name}</S.Name>
                    <S.Ocupation>{ocupation}</S.Ocupation>
                </S.Person>
            </S.PersonHolder>
        </S.Card>
    )
}

export default Card;
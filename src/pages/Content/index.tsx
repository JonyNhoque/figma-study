import React from "react";
import S from "./style";
import imgTop from './assets/imageTop.png';
import imgBottom from './assets/imageBottom.png';
import Numbers from "./components/Numbers";

const numbersData = [
    {
        number: 502,
        tag: 'Projects'
    },
    {
        number: 10,
        tag: 'Employees'
    },
    {
        number: 2131,
        tag: 'Customers'
    },
    {
        number: 314,
        tag: 'Coffee'
    },
]

const Content = () => {
    return (
        <S.Content>
            <S.ImgWrapper>
                <S.Img src={imgTop} />
            </S.ImgWrapper>
            <S.Text>
                <S.Headline>
                    <S.Title>Who We Are</S.Title>
                    <S.Lead>Professional Team for Your Solution</S.Lead>
                </S.Headline>
                <S.TextBody>Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</S.TextBody>
            </S.Text>
                {
                    numbersData.map((item, key) => 
                        <Numbers number={item.number} tag={item.tag} key={key} />
                    )
                }
            <S.ImgWrapper>
                <S.Img src={imgBottom} />
            </S.ImgWrapper>
        </S.Content>
    )
}

export default Content;
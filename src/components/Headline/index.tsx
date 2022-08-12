import React from "react";
import Button from "../Button";
import S from  './style'

const Headline = () => {
    return(
        <S.headline>
            <S.text>Digital <br /> Marketing <br /> Solution For < br /> Your Business</S.text>
            <S.buttonHolder>
                <Button buttonTitle='Button'></Button>
                <Button buttonTitle='Button'></Button>
            </S.buttonHolder>
        </S.headline>
    )
}

export default Headline;
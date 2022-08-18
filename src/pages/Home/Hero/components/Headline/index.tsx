import React from "react";
import Button from "../../../../../components/Button";
import S from  './style'

const Headline = () => {
    return(
        <S.Headline>
            <S.Text>Digital <br /> Marketing <br /> Solution For <S.TextAccent>Your Business</S.TextAccent></S.Text>
            <S.ButtonHolder>
                <Button>Button</Button>
                <Button theme='transparent'>Button</Button>
            </S.ButtonHolder>
        </S.Headline>
    )
}

export default Headline;
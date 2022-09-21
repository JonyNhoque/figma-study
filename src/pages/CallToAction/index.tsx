import React from "react";
import Button from "../../components/Button";
import S from './style';
import bgImage from './src/ctaImg.png';


const CallToAction = () => {
    return(
        <S.CallToAction>
                <S.Text>
                    <S.Title>Let's Word <br/> Together</S.Title>
                    <Button color='#FFF' bgColor="#4640BE">Contact Us</Button>
                </S.Text>
            <S.Image src={bgImage} />
        </S.CallToAction>
    )
};

export default CallToAction;
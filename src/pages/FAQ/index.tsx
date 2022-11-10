import React from "react";
import imgSrc from './assets/imgFAQ.png';
import QuestionBox from "./components/QuestionBox";
import S from './style';

const modalData = [
    {
        'title': 'Sed ut perspiciatis unde omnis iste natus ?',
        'description': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.'
    },
    {
        'title': 'Temporibus autem quibusdam et aut ?',
        'description': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.'
    },
    {
        'title': 'Nam libero tempore, cum soluta?',
        'description': 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.'
    }
]

const FAQ = () => {
    return (
        <S.FAQ>
            <S.Headline>
                <S.Title>Frequently Asked Questions</S.Title>
                <S.Lead>How can we help?</S.Lead>
            </S.Headline>
            <S.QuestionBoxHolder>
                {
                    modalData.map((item, index) => {
                       return(
                        <QuestionBox title={item.title} description={item.description} key={index} />
                       )
                    })
                }
            </S.QuestionBoxHolder>
            <S.imgHolder>
                <S.img src={imgSrc} />
            </S.imgHolder>
        </S.FAQ>
    )
};

export default FAQ;
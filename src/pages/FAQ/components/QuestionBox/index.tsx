import React, { useState } from "react";
import S from './style';
import More from '../../assets/plus.svg';
import Less from '../../assets/minus.svg'

type TModal = {
    title: string,
    description?: string
};

const QuestionBox: React.FC<TModal> = ({title, description}) => {

    const [ isOpen, setIsOpen ] = useState(false);
    const onModalClick = (e: any) => {
        setIsOpen(!isOpen)
    }
    const imageSrc = isOpen ? Less : More;
 
    return (
    <S.QuestionBox onClick={onModalClick} >
        <S.QuestionBoxCell className={isOpen ? 'open' : ''}>
            <S.Title>
                <S.Text className='text'>{title}</S.Text>
                <S.Img src={imageSrc} className='action' alt='Robot boy using laptop'/>
            </S.Title>
            <S.Description>
                {description}
            </S.Description>
        </S.QuestionBoxCell>
    </S.QuestionBox>
    )
}

export default QuestionBox;
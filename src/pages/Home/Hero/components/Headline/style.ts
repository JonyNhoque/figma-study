import styled from 'styled-components';

const S = {
    Headline: styled.div`
    height: 368px;
    max-width: 380px;
    margin: 117px auto 0;   
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media(max-width: 375px){
        width: 320px;
    }
    `,

    Text: styled.h1`
    font-weight: 600;
    line-height: 72px;
    text-align: center;
    color: #fff;
    font-size: 48px;

    @media(max-width: 375px){
        font-size: 45;
    }
    `,

    TextAccent: styled.span`
    font-weight: 600;
    line-height: 72px;
    text-align: center;
    color: #FFC656;
    font-size: 48px;

    @media(max-width: 375px){
        font-size: 45;
    }
    `,

    ButtonHolder: styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 0px 20px;
    justify-content: space-between;
    width: 100%;
    height: 56px;
    `,
};

export default S;
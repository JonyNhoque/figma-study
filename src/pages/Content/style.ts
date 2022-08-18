import styled from "styled-components";

const S = {
    Content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0px;
    background-color: '#fff';
    `,

    ImgWrapper: styled.div`
    display: flex;
    justify-content: center;
    `,

    Img: styled.img`
    max-heigth: 100%;
    max-width: 100%;
    `,

    Text: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    `,

    Headline: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 25px;
    margin-bottom: 10px;
    `,

    Title: styled.h4`
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #4640BE;
    margin-bottom: 4px;
    `,

    Lead: styled.h2`
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    `,

    TextBody: styled.p`
    padding: 0px 25px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #666666;
    `

};

export default S;

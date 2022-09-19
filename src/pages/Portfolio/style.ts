import styled from "styled-components";

const S = {
    Portfolio: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 24px;
    background-color: #FFF;
    `,

    Headline: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 6px;
    margin-bottom: 32px;
    `,

    Title: styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #4640BE;
    `,

    Lead: styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    `,

    CardHolder: styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 25px;
    `
};

export default S
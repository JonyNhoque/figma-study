import styled from "styled-components";

const S = {
    Testimonials: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 24px;
    background-color: #4640BE;
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
    font-wight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #FFC656;
    margin-bottom: 6px;
    `,

    Lead: styled.h2`
    font-wight: 600;
    font-size: 32px;
    line-height: 42px;
    color: #FFF;
    `,

    Carousel: styled.div`
    width: 100vw;
    `,

    CardHolder: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    `,

    Dot: styled.div`
    height: 16px;
    width: 16px;
    border: 2px solid  #fff;
    border-radius: 50%;
    margin-top: 32px;

    &:focus {
        background: #fff;
    }
    `
}

export default S;
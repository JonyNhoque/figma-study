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

    Lead: styled.div`
    font-wight: 600;
    font-size: 32px;
    line-height: 42px;
    color: #FFF;
    `,

    Carousel: styled.div`
    max-width: 100vw;

    .slick-dots .slick-active div {
        background-color: #fff;
    }
    `,

    Dot: styled.div`
    height: 16px;
    width: 16px;
    border: 2px solid  #fff;
    border-radius: 50%;
    margin-top: 32px;
    `,
}

export default S;
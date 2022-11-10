import styled from 'styled-components';

const S = {
    CallToAction: styled.div`
    margin-top: -2px;
    display: flex;
    flex-direction: column;
    height: 574px;
    align-items: center;
    background: linear-gradient(
        to bottom,
        #4640BE 0%,
        #4640BE 50%,
        #333 50%,
        #333 100%
    );
    `,

    Text: styled.div`
    z-index: 1;
    margin-top: 80px;
    `,

    Title: styled.div`
    font-weight: 600;
    font-size: 32px;
    line-height: 44px;
    text-align: center;
    color: #000000;
    margin-bottom: 16px;
    `,

    Background: styled.div`
    height: 287px;
    width: 100vw;
    background-color: #333;
    `,

    Image: styled.img`
    position: absolute;
    max-width: 100%;
    `
};

export default S
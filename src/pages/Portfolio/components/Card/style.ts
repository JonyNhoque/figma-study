import styled from "styled-components";

const S = {
    Card: styled.div`
    height: 351px;
    width: 378px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;

    `,
    ImageHolder: styled.div`
    background-img: #020;
    height: 277px;
    width: 100%;
    margin-bottom: 16px;
    border-radius: 40px;
    `,
    Image: styled.img`
    src(${props => props.src})
    `,
    Title: styled.div`
    height: 58px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `,
    Name: styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #000000;
    `,
    Service: styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: #6D66FF;
    `,
};

export default S
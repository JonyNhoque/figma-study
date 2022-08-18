import styled from "styled-components";

const S ={
    NumberCell: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
    `,

    Number: styled.h2`
    font-weight: 700;
    font-size: 60px;
    line-height: 70px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    `,

    CellTag: styled.h3`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #4640BE;
    `
};

export default S;
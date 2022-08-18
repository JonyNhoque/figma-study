import styled from "styled-components";

const S = {
    Button: styled.button`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 6.5px 54px;
    color: ${props => props.theme === 'transparent' ? '#FFF' : '#4640BE'};
    background-color: ${props => props.theme === 'transparent' ? 'transparent' : "#FFF"};
    border-radius: 15px;
    border: 2px solid #FFFFFF;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 47px;
    `
};

export default S;
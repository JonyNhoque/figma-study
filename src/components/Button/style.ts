import styled from "styled-components";

type Props = {
    color?: string,
    bgColor?: string,
    hover?: boolean
}

const S = {
    Button: styled.button<Props>`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 6.5px 54px;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    border-radius: 15px;
    border: 2px solid #FFFFFF;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 47px;
    cursor: pointer;

    @media (max-width: 375px){
        padding: 6.5px 40px;
    }

    &:hover {
        color: ${props => props.hover ? '#fff' : props.color};
        background-color: ${props => props.hover ? 'transparent' : props.bgColor};
    };
    `
};

export default S;
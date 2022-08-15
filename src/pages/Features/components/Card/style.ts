import { notDeepEqual } from "assert";
import styled from "styled-components";

const S = {
    Card: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 30px;
    height: 396px;
    width: 90%;
    background-color: #ffffff;
    border-radius: 40px;
    margin-top: 32px;
    :first-child {
        margin-top: 0px;
    }
    `,
    IconHolder: styled.div`
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background-color: #4640BE;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    `,
    Title: styled.h4`
    margin-bottom: 12px;
    font-size: 16px;
    color: #000000;
    `,
    Description: styled.p`
    font-size: 14px;
    color: #666666;
    text-align: center;
    margin-bottom: 12px;
    `,
    Link: styled.a`
    color: #4640BE;
    text-decoration: underline;
    `
}

export default S;
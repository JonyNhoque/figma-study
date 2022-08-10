import styled from "styled-components";
import logo from '../../assets/hero/logo.svg';
import hamburgerNav from '../../assets/hero/align-right.svg'

const S = {
    NavBar: styled.div`
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0px 24px;
        height: 28.6px;
        width: 100vw;
        margin-top: 21.45px;
    `,
    Logo: styled.img`
        height: 28px;
        width: 130px;
        background-image: url(${logo});
        background-repeat: no-repeat;
    `,

    NavHamburger: styled.div`
        width: 32px;
        height: 28.6px;
        background-image: url(${hamburgerNav});
    `
}

export default S;
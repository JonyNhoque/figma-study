import styled from "styled-components";
import logo from '../../assets/logo.svg';
import hamburgerNav from '../../pages/Home/Hero/assets/align-right.svg'

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
    Logo: styled.div`
        height: 29px;
        width: 130px;
        background: url(${logo});
    `,

    NavHamburger: styled.div`
        width: 32px;
        height: 28.6px;
        background-image: url(${hamburgerNav});
    `
}

export default S;
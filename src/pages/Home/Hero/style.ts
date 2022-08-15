import styled from 'styled-components';
import bg from '../Hero/assets/bg.jpg';
import footerImg from '../Hero/assets/imgFooter.png'

const S = {
    hero: styled.div`
    display: flex;
    flex-direction: column;
    height: 926px;
    width: 100vw;
    background-image: url(${bg});
    `,
    hero__footerImg: styled.div`
    position: absolute;
    height: 926px;
    width: 100%;
    background-image: url(${footerImg});
    background-repeat: no-repeat;
    `
}

export default S;
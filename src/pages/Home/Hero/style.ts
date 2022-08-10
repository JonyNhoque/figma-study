import styled from 'styled-components';
import bg from '../../../assets/hero/bg.jpg';

const S = {
    hero: styled.div`
    display: flex;
    flex-direction: column;
    height: 926px;
    width: 100vw;
    background-color: #4640BE;
    `,
    
    hero__bg: styled.div`
    height: 926px;
    width: 100vw;
    background: url(${bg});
    opacity: 0.2;
    `
}

export default S;
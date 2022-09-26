import styled from 'styled-components';

type Props = {
    src: string,
}

const S = {
    FAQ: styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 25px;
    background-color: #4640BE;
    `,

    Headline: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 6px;
    margin-bottom: 32px;
    `,

    Title: styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFC656;
    `,

    Lead: styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFF;
    `,

    imgHolder: styled.div`
    width: 378px;
    height: 378px;
    margin: 0 auto;
    `,

    img: styled.img<Props>`
    src(${props => props.src})
    `,

    ModalHolder: styled.div`
    
    `
};

export default S
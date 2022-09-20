import styled from "styled-components";

type Props = {
    src: string;
}

const S ={
    Modal: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px
    `,

    ModalCell: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 18.5px;
    gap: 20px;
    border: 2px solid #FFFFFF;
    border-radius: 15px;
    color: #FFF;
    margin-bottom: 12px;
    `,

    Text: styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
    `,

    Action: styled.img<Props>`
    src(${props => props.src})
    `
}

export default S;
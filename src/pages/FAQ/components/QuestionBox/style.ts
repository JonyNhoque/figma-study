import styled from "styled-components";

const S ={
    QuestionBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;

    &:hover {
        cursor: pointer;
    }
    `,

    QuestionBoxCell: styled.div`
    max-height: 56px;
    overflow: hidden;
    align-items: center;
    padding: 16px 18.5px;
    gap: 20px;
    border: 2px solid #FFFFFF;
    border-radius: 15px;
    color: #FFF;
    margin-bottom: 12px;
    transition: all .3s cubic-bezier(0.4, 0, 1, 1);

    &.open {
        background-color: #fff;
        max-height: 300px;

        .text {
            color: #333;
        }
    }
    `,

    Title: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    `,

    Text: styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
    transition: color .3s cubic-bezier(0.4, 0, 1, 1);
    `,

    Description: styled.div`
    color: #666;
    transition: color .3s cubic-bezier(0.4, 0, 1, 1);
    `,

    Img: styled.img`
        max-width: 375px;
        object-fit: contain;
    `
}

export default S;
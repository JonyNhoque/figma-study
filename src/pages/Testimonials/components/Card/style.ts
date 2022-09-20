import styled from "styled-components";

const S ={ 
    Card: styled.div`
        width: 380px;
        flex: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 24px;
        padding: 40px;
        border-radius: 40px;
        background-color: #FFF;
        margin: 0 auto;
    `,

    Text: styled.p`
        font-weight: 400px;
        font-style: normal;
        font-size: 14px;
        text-align: center;
        line-height: 24px;
        color: #666666;
    `,

    PersonHolder: styled.div`
        display: flex;
    `,

    AvatarHolder: styled.div`
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: #666666;
        margin-right: 12px;
    `,

    Avatar: styled.img`
        src(${props => props.src})
    `,

    Person: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,

    Name: styled.h3`
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;
        color: #4640BE;
        margin-bottom: 10px;
    `,

    Ocupation: styled.h4`
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 10px;
        color: #666;
    `
};

export default S;
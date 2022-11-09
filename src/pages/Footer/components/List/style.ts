import styled from "styled-components";

const S = {
    List: styled.ul`

    `,

    ListSection: styled.div`
    margin-bottom: 48px;
    `,

    ListItem: styled.li`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
    list-style: none;
    margin-bottom: 12px;
    text-align: center;
    cursor: pointer;

    &: last-child {
        margin-bottom: 0px;
    };

    &: hover {
        color: #FFC656;
    }
    `,

    ListTitle: styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 12px;
    text-align: center;
    `
};

export default S
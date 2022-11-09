import styled from "styled-components";
import logo from './assets/logo.png';


type TIcon = {
    icon: string,
    link?: string
}

const S = {
    Footer: styled.div`
    background-color: #333;
    margin-top: -1px;
    padding: 80px 112px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `,

    Logo: styled.div`
    width: 163px;
    height: 40px;
    background-image: url(${logo});
    margin-bottom: 48px;
    `,

    List: styled.ul`

    `,

    ListItem: styled.li`
        url
    `,

    ListTitle: styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
    `,

    SocialIcons: styled.div`
    height: 20px;
    width: 152px;
    margin-bottom: 48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    `,

    Icon: styled.div<TIcon>`
    background: url(${props => props.icon});
    height: 20px;
    width: 20px;

    &:hover {
        cursor: pointer;
    }
    `,

    Copyright: styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
    text-align: center;
    `,
};

export default S
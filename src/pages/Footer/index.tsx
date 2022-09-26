import React from "react";
import List from "./components/List";
import S from './style';
import facebook from './assets/facebook.svg';
import twitter from './assets/twitter.svg';
import instagram from './assets/instagram.svg';
import github from './assets/github.svg';

const iconsData = [
    {
        icon: facebook,
        link: '#'
    },
    {
        icon: twitter,
        link: '#'
    },
    {
        icon: instagram,
        link: '#'
    },
    {
        icon: github,
        link: '#'
    }
]

const Footer = () => {
    return(
        <S.Footer>
            <S.Logo />
            <List />
            <S.SocialIcons>
                {
                    iconsData.map((item, i) => {
                        console.log(item.icon)
                        return(
                            <S.Icon icon={item.icon} link={item.link} key={i}/>
                        )
                    })
                }
            </S.SocialIcons>
            <S.Copyright>Copyright © 2022, Ratchanon</S.Copyright>
        </S.Footer>
    )
};

export default Footer

import React from "react";
import S from "./style";

const data = [
    {
        title: 'Our Services',
        links: [
            {link: 'Link One', url: '#'},
            {link: 'Link Two', url: '#'},
            {link: 'Link Three', url: '#'},
            {link: 'Link Four', url: '#'},
            {link: 'Link Five', url: '#'},
        ],
    },
    {
        title: 'About Us',
        links: [
            {link: 'Link Two', url: '#'},
            {link: 'Link Three', url: '#'},
            {link: 'Link Four', url: '#'},
        ],
    },
    {
        title: 'Contact',
        links: [
            {link: 'Link Two', url: '#'},
            {link: 'Link Three', url: '#'},
            {link: 'Link Four', url: '#'},
        ],
    }
]

const List = () => {
    return(
        <S.List>
                {
                    data.map((item, i) => {
                        return(
                        <S.ListSection key={i}>
                            <S.ListTitle>{item.title}</S.ListTitle>
                            {
                                item.links.map((item, i) => {
                                    return(
                                        <S.ListItem key={i}>{item.link}</S.ListItem>
                                    )
                                })
                            }
                        </S.ListSection>    
                        )
                    })
                }
        </S.List>
    )
};

export default List

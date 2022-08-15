import React from "react";
import Card from "./components/Card";
import S from "./style";
import webDesignIcon from './assets/webDesign.svg';
import consultanceIcon from './assets/consultance.svg';
import webDevelopmentIcon from './assets/webDevelopment.svg';

const cardData = [
    {
        icon: webDesignIcon,
        title: 'Web Design',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
    {
        icon: consultanceIcon,
        title: 'Consultance',
        description: 'Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes,',
    },
    {
        icon: webDevelopmentIcon,
        title: 'Web Development',
        description: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur.',
    },
]

const Features = () => {


    return (
        <S.Features>
            {
                cardData.map((item, key) => 
                    <Card 
                        icon={item.icon} 
                        title={item.title} 
                        description={item.description} 
                        key={key}
                    />
                )
            }
        </S.Features>
    )
};

export default Features;
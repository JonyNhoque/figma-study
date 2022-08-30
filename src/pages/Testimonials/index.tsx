import React from "react";
import Card from './components/Card';
import S from "./style";
import avatar from './assets/avatar.png';
import Slider from "react-slick";
import { toEditorSettings } from "typescript";

const testimonialData = [
    {
        src: avatar,
        name: 'Robert Johnson',
        ocupation: 'Graphic Designer'
    },

    {
        src: avatar,
        name: 'John Robertson',
        ocupation: 'Mechanic'
    },

    {
        src: avatar,
        name: 'Amanda Carlton',
        ocupation: 'Data Scientist'
    },

    {
        src: avatar,
        name: 'Gomez Gomides',
        ocupation: 'Consultant'
    }
]

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        customPaging: (i: any) => (
            <S.Dot {...i + 1} />
          )
      };

        return(
            <S.Carousel>
                <Slider {...settings}>
                    {
                        testimonialData.map((item, key) => {
                            return <Card src={item.src} name={item.name} ocupation={item.ocupation} key={key} />
                        })
                    }
                </Slider>
            </S.Carousel>
        )
}

const Testimonials = () => {

    return(
        <S.Testimonials>
                <S.Headline>
                    <S.Title>Testimonials</S.Title>
                    <S.Lead>Why People Love Us</S.Lead>
                </S.Headline>
                <Carousel />
        </S.Testimonials>
    )
}

export default Testimonials;
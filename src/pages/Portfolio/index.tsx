import React from "react";
import Card from "./components/Card";
import S from './style';
import Button from "../../components/Button";
import rocketImg from './assets/Frame 8 1.jpg';
import sketchImg from './assets/Frame 4 1.jpg';
import mrRobotImg from './assets/Frame 5 1.jpg';
import toDoImg from './assets/Frame 6 1.jpg';
import goodWorkplaceImg from './assets/Frame 7 1.jpg';
import singlePersonImg from './assets/Frame 3 6.jpg';

const cardData = [
    {
    "src": rocketImg,
    "name":  "Rocket Science",
    "service": "Web Development"  
   }, 
   {
    "src": sketchImg,
    "name":  "Sketch",
    "service": "Consultance"  
   }, 
   {
    "src": mrRobotImg,
    "name":  "Mr Robot",
    "service": "Web Design"  
   },
   {
    "src": toDoImg,
    "name":  "To-Do-List",
    "service": "Web Design"  
   },
   {
    "src": goodWorkplaceImg,
    "name":  "Good Workplace",
    "service": "Consultance"  
   },
   {
    "src": singlePersonImg,
    "name":  "Single Person",
    "service": "Web Development"  
   }
]

const Portfolio = () => {
   
    return(
        <S.Portfolio>
            <S.Headline>
                <S.Title>Portfolio</S.Title>
                <S.Lead>Our Projects</S.Lead>
            </S.Headline>
            <S.CardHolder>
                {
                    cardData.map((item, key) =>{

                        console.log(item)
                        return(
                            <Card src={item.src} name={item.name} service={item.service} key={key} />
                        )
                    })
                }
            </S.CardHolder>
            <Button color='#FFF' bgColor='#4640BE'>See More</Button>
        </S.Portfolio>
    )
};

export default Portfolio;
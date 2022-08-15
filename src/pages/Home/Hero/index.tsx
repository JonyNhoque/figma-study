import React from "react";
import Headline from "./components/Headline";
import NavBar from "../../../components/NavBar";
import S from './style';

const Hero = () => {
    return ( 
       <S.hero>
        <NavBar /> 
        <Headline />
        <S.hero__footerImg />
       </S.hero> 
    ) 
}; 

export default Hero; 
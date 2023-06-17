import React from "react";
import { Box} from "@mui/material";
import strategyImage from'../../Assets/images/Academy/1.png'
import marketingImage from'../../Assets/images/Academy/2.png'
import digitalTransformationImage from'../../Assets/images/Academy/3.png'
import businessProcessImage from'../../Assets/images/Academy/4.png'
import CarouselLayout from "./Components/CarouselLayout";

function AcademyLayout() {

  const carouselItems=[{image:strategyImage,title:'Corporate Training'},
    {image:marketingImage,title:'Master Classes'},
    {image:digitalTransformationImage,title:'Online Education'},
    {image:businessProcessImage,title:'Speakers'}]

  return (
    <Box>
      <CarouselLayout backgroundProps={{}} images={carouselItems} title="ACADEMY" subtitle={<div style={{width:'100%',textAlign:'start'}}>Educate and inspire your people by giving them the knowledge excel<br/> in the latest technology, tactics and traning</div>}/>
    </Box>
  );
}

export default AcademyLayout;

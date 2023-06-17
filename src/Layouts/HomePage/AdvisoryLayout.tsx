import React from "react";
import { Box} from "@mui/material";
import strategyImage from'../../Assets/images/Advisory/1.png'
import marketingImage from'../../Assets/images/Advisory/2.png'
import digitalTransformationImage from'../../Assets/images/Advisory/3.png'
import businessProcessImage from'../../Assets/images/Advisory/4.png'
import CarouselLayout from "./Components/CarouselLayout";

function AdvisoryLayout() {

  const carouselItems=[{image:strategyImage,title:'Strategy'},
    {image:marketingImage,title:'Marketing'},
    {image:digitalTransformationImage,title:'Digital Transformation'},
    {image:businessProcessImage,title:'Business Process'}]

  return (
    <Box>
      <CarouselLayout backgroundProps={{}} images={carouselItems} title="ADVISORY" subtitle={<div style={{width:'100%',textAlign:'start'}}>Our Strategic Consultants bring a voice of experience<br/> and experise to your organisation</div>}/>
    </Box>
  );
}

export default AdvisoryLayout;

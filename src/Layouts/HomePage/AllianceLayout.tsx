import React from "react";
import { Box} from "@mui/material";
import strategyImage from'../../Assets/images/Alliance/1.png'
import marketingImage from'../../Assets/images/Alliance/2.png'
import digitalTransformationImage from'../../Assets/images/Alliance/3.png'
import businessProcessImage from'../../Assets/images/Alliance/4.png'
import CarouselLayout from "./Components/CarouselLayout";

function AllianceLayout() {

  const carouselItems=[{image:strategyImage,title:'Consumer Profile'},
    {image:marketingImage,title:'Product Research'},
    {image:digitalTransformationImage,title:'Brand Development'},
    {image:businessProcessImage,title:'Technology Enablement'}]

  return (
    <Box>
      <CarouselLayout backgroundProps={{}} images={carouselItems} title="ALLIANCE" subtitle={<div style={{width:'100%',textAlign:'start'}}>Execute flawlessly with talent and expert artistry.<br/> Our Agency will become a trusted extension of you marketing department.</div>}/>
    </Box>
  );
}

export default AllianceLayout;

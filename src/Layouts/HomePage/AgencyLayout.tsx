import React from "react";
import { Box} from "@mui/material";
import strategyImage from'../../Assets/images/Agency/1.png'
import marketingImage from'../../Assets/images/Agency/2.png'
import digitalTransformationImage from'../../Assets/images/Agency/3.png'
import businessProcessImage from'../../Assets/images/Agency/4.png'
import CarouselLayout from "./Components/CarouselLayout";
import background from '../../Assets/images/Agency/AgencyBG.png'

const backgroundProps={backgroundImage:`url(${background})`,
backgroundSize: '200vh 140vh',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'bottom left'}

function AgencyLayout() {

  const carouselItems=[{image:strategyImage,title:'Brand Identity'},
    {image:marketingImage,title:'Creative'},
    {image:digitalTransformationImage,title:'Web & App'},
    {image:businessProcessImage,title:'Social'}]

  return (
    <Box>
      <CarouselLayout backgroundProps={{}} images={carouselItems} title="AGENCY" subtitle={<div style={{width:'100%',textAlign:'start'}}>Execute flawlessly with talent and expert artistry.<br/> Our Agency will become a trusted extension of you marketing department.</div>}/>
    </Box>
  );
}

export default AgencyLayout;

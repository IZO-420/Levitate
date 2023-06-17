import React, { useRef } from "react";
import { Box, Grid, IconButton, Typography,Theme, SxProps } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import CarouselItem from "./CarouselItem";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import background from "../../../Assets/images/Advisory/AdvisorybackG.png" 

interface backgroundProps  {
    backgroundImage?: String
backgroundSize?: String
backgroundRepeat?: String
backgroundPosition?: String
}

interface CarouselLayoutProps {
  images: {image: string
title:string}[];
  title: string;
  subtitle: JSX.Element;
  backgroundProps:SxProps<Theme>|{}
}

function CarouselLayout({ images, title, subtitle, backgroundProps}: CarouselLayoutProps) {
  const carousselRef = useRef<AliceCarousel>(null);
  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) =>
    e.preventDefault();
  const handlePrev = () => carousselRef.current?.slidePrev();
  const handleNext = () => carousselRef.current?.slideNext();

  const items = images.map((item)=><CarouselItem
  image={item.image}
  onDragStart={handleDragStart}
  title={item.title}
/>) 

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        height: "auto",
        padding: "0em 10em",
        ...backgroundProps,
      }}
    >
      <Grid container sx={{ width: "100%",
            marginBottom:'6em',
            marginTop:'6em',
            padding:'0em 2em'
        }}>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" sx={{ color: "white",fontWeight:700 }}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={2} />
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            opacity:0.7
          }}
        >
          <Typography variant="body2" sx={{ color: "white", fontFamily:'Poppins', fontWeight:'400'}}>
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ width: "100%" }}>
        <AliceCarousel
          mouseTracking
          items={items}
          infinite
          ref={carousselRef}
          keyboardNavigation={false}
          responsive={{
            0: {
              items: 1,
            },
            1024: {
              items: 4,
              itemsFit: "contain",
            },
          }}
          disableButtonsControls
          disableDotsControls
        />
      </Box>
      <Box
        sx={{
          width: "119vh",
          padding: "0em 20em",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop:'1em'
        }}
      >
        <IconButton onClick={handlePrev} sx={{ color: "white" }}>
          <WestIcon />
        </IconButton>
        <IconButton onClick={handleNext} sx={{ color: "white" }}>
          <EastIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default CarouselLayout;

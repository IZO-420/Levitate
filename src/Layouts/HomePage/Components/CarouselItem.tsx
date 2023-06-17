import React, { PropsWithChildren } from "react";
import { Box, Typography } from "@mui/material";
import backgroundGradiant from "../../Assets/images/homeBackgroundtext1.png";

interface CarouselItemProps{
    image:string
    title:string
    onDragStart:(e: React.DragEvent<HTMLImageElement>) => void
}

function CarouselItem({image,title,onDragStart}:CarouselItemProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "50vh",
        backgroundImage: `url(${image})`,
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        padding:"1.3em",
        margin:"0em .7em"
      }}
      
    >
      <Typography
        variant="h5"
        sx={{
          height: "80vh",
          color: "white",
          textAlign: "start",
          width: "100%",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default CarouselItem;

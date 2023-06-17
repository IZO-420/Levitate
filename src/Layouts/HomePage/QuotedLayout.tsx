import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import backgroundGradiant from "../../Assets/images/homeBackgroundtext1.png";

function QuotedLayout() {
  const [textBold,setTextBold]=useState('Business')
  const handleHover=()=>{setTextBold('Technology')}
  const handleHoverOut=()=>{setTextBold('Business')}

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        backgroundColor: "#000",
        width:'100%'
      }}
    >
        <Typography
        variant="h1"
        sx={{
            position:'absolute',
            fontSize:'8rem',
          height: "80vh",
          color: "white",
          textAlign: "center",
          width: "100%",
          display: "-webkit-box",
          '-webkit-box-pack':'center',
          '-webkit-box-align':'center'
        }}
      >
        future proof
        <br /> your <strong onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>{textBold}</strong>
      </Typography>
      <Typography
        variant="h1"
        sx={{
            zIndex:'100',
            fontSize:'8rem',
            height: "80vh",
          color: "transparent",
          textAlign: "center",
          width: "150%",
          backgroundImage: `url(${backgroundGradiant})`,
            backgroundPosition: 'center left',
            backgroundClip: "text",
          backgroundSize: "200vh 90vh",
          backgroundRepeat: "no-repeat",
          display: "-webkit-box",
          '-webkit-box-pack':'center',
          '-webkit-box-align':'center'
        }}
      >
        future proof
        <br /> your <strong onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>{textBold}</strong>
      </Typography>
    </Box>
  );
}

export default QuotedLayout;

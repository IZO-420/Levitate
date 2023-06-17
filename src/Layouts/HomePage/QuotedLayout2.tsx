import React from "react";
import { Box, Typography } from "@mui/material";
import vImage from "../../Assets/images/V.png";

function QuotedLayout2() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "120vh",
        // backgroundColor: "#000",
        padding: "0em 8em",
      }}
    >
      <img src={vImage} alt="V" style={{ height: "50%", marginRight:'5em' }} />
      <Typography
        variant="h1"
        sx={{
          color: "whitesmoke",
          textAlign: "start",
          width: "40%",
          lineHeight: '5.5rem'
        }}
      >
        we lift your <strong style={{letterSpacing: '0.25rem'}}>prespective</strong>
        <Typography variant="h4" sx={{
            marginTop:'1em',
          lineHeight: '2.3rem',
          fontWeight:'100',
          fontSize:'1.7rem',
        }}>
          a transformation group for <strong>brand,<br/> digital, and media</strong>
        </Typography>
      </Typography>
    </Box>
  );
}

export default QuotedLayout2;

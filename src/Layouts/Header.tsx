import React from "react";
import logo from "../Assets/images/Logo.png";
import { Box, Button, IconButton, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import {FaLinkedinIn} from 'react-icons/fa';


function Header() {
  return (
    <Box
      sx={{
        width: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "8vh",
        backgroundColor:"#000",
        padding:'1% 2%'
      }}
    >
       <img src={logo} alt="Logo" height="40%"/> 
      <Box
        sx={{
          width: "15%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button sx={{borderStyle:'solid',borderWidth:'.2em',padding:'1em 1.6em',borderRadius:'2em', color:'whitesmoke',fontFamily:'poppins', fontWeight:'700',fontSize:'.8rem'}}>Get in Touch</Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <IconButton ><TwitterIcon sx={{color:"whitesmoke"}} /></IconButton>
            <IconButton><FaLinkedinIn style={{color:"whitesmoke"}}/></IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

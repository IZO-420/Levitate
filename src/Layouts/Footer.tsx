import React from "react";
import logo from "../Assets/images/LogoBlack.png";
import { Box, Button, IconButton, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <Box
      sx={{
        width: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "7vh",
        backgroundColor: "#fff",
        padding: "3%",
      }}
    >
      <img src={logo} alt="Logo" height="60%" />
      <Typography>&copy; 2023, All Rights Reserved by LEVITATE</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Typography sx={{ fontWeight: 700,fontFamily:'Poppins' }}>Follow Us</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            
          }}
        >
          <IconButton sx={{ paddingLeft: "0", paddingRight: "0.1em" }}>
            <FaFacebookF style={{ color: "#000", fontSize: "1.2rem" }} />
          </IconButton>
          <IconButton sx={{ padding: "0.1em" }}>
            <FaInstagram style={{ color: "#000", fontSize: "1.2rem" }} />
          </IconButton>
          <IconButton sx={{ padding: "0.1em" }}>
            <TwitterIcon sx={{ color: "#000", fontSize: "1.2rem" }} />
          </IconButton>
          <IconButton sx={{ padding: "0.1em" }}>
            <FaLinkedinIn style={{ color: "#000", fontSize: "1.2rem" }} />
          </IconButton>
          <IconButton sx={{ padding: "0.1em" }}>
            <FaYoutube style={{ color: "#000", fontSize: "1.2rem" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

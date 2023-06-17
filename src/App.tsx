import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Typography } from "@mui/material";
import Header from "./Layouts/Header";
import Home from "./Pages/Home";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <Box >
      <Header />
      <Home/>
      <Footer/>
    </Box>
  );
}

export default App;

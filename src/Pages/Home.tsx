import React from "react";
import { Box } from "@mui/material";
import QuotedLayout from "../Layouts/HomePage/QuotedLayout";
import QuotedLayout2 from "../Layouts/HomePage/QuotedLayout2";
import AdvisoryLayout from "../Layouts/HomePage/AdvisoryLayout";
import AcademyLayout from "../Layouts/HomePage/AcademyLayout";
import AgencyLayout from "../Layouts/HomePage/AgencyLayout";
import AllianceLayout from "../Layouts/HomePage/AllianceLayout";
import ExperienceLayout from "../Layouts/HomePage/ExperienceLayout";
import MeetingLayout from "../Layouts/HomePage/MeetingLayout";
import background2 from "../Assets/images/Agency/AgencyBG.png";
import background from "../Assets/images/Advisory/AdvisorybackG.png";

const backgroundProps = {
  backgroundImage: `url(${background})`,
  backgroundSize: "201vh 140vh",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom left",
  backgroundColor: "#000",
};

const backgroundProps2 = {
  backgroundImage: `url(${background2})`,
  backgroundSize: "201vh 140vh",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom left",
  backgroundColor: "#000",
};

function Home() {
  return (
    <Box>
      <QuotedLayout />
      <Box sx={backgroundProps}>
      <QuotedLayout2 />
        <AdvisoryLayout />
      </Box>
      <Box sx={backgroundProps2}>
        <AcademyLayout />
        <AgencyLayout />
      </Box>
      <Box sx={{ backgroundColor: "black" }}>
        <AllianceLayout />
      </Box>
      <ExperienceLayout />
      <MeetingLayout />
    </Box>
  );
}

export default Home;

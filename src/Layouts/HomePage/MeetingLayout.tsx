import React, { useRef } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  styled,
} from "@mui/material";
import background from "../../Assets/images/bGMeeting.png";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CssTextField = styled(TextField)({
  borderColor: "white",
  color: "white",
  borderStyle: "solid",
  borderWidth: ".2em",
  borderRadius: "5em",
  height: "3.5em",
  width: "98%",
  "& .MuiOutlinedInput-input": {
    color: "#fff",
    fontSize: ".8rem",
    "::placeholder": {
      fontSize: ".8rem",
      opacity: 1,
      padding: "0em 0em 0em 3em",
    },
  },
  "& label.Mui-focused": {
    borderStyle: "unset",
  },
  "& .MuiInput-underline:after": {
    borderStyle: "unset",
  },
  "& .MuiOutlinedInput-root": {
    width: "100%",
    "& fieldset": {
      borderStyle: "unset",
    },
    "&:hover fieldset": {
      borderStyle: "unset",
    },
    "&.Mui-focused fieldset": {
      borderStyle: "unset",
    },
  },
});

const CssToggleButtonGroup = styled(ToggleButtonGroup)({
  width: "100%",
  height: "3.5em",
  borderStyle: "solid",
  borderRadius: "5em",
  borderColor: "white",
  borderWidth: ".2em",
  fontFamily: "Poppins",
  justifyContent: "space-between",
  "& button": {
    padding: "0em 3em !important",
  },
  ".Mui-selected": {
    backgroundColor: "#0547fd !important",
    borderColor: "#0547fd",
    borderRadius: "5em",
    borderWidth: ".2em",
    color: "#fff",
    outlineStyle: "solid",
    outlineColor: "#0547fd",
    outlineOffset: "-0.1em",
    outlineWidth: "0.4em",
  },
  ".MuiToggleButtonGroup-grouped:not(:last-of-type)": {
    borderRadius: "5em",
    padding: ".5em 2em",
    color: "#fff",
    fontSize: ".7rem",
    borderStyle: "none",
    ":hover": {
      backgroundColor: "transparent",
    },
  },
  ".MuiToggleButtonGroup-grouped:last-of-type": {
    fontSize: ".7rem",
    padding: ".5em 2em",
    borderRadius: "3em",
    borderStyle: "none",
    color: "#fff",
  },
});

function MeetingLayout() {
  const [alignment, setAlignment] = React.useState<string | null>("Advisory");
  const [step, setStep] = React.useState<number>(0);
  const datePickerRef = useRef(null);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };
  const [alignment2, setAlignment2] = React.useState<string | null>("Strategy");
  const handleAlignment2 = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment2(newAlignment);
  };
  return (
    <Box
      sx={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "10em 26em 10em 10em",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        minHeight: `${step === 0 ? 80 : 90}vh`,
      }}
    >
      <Typography variant="h2" sx={{ color: "white" }}>
        Schedule a <strong>meeting</strong>
        <br /> for a discovery session
      </Typography>
      {step === 0 ? (
        <Box>
          <Typography variant="h4" sx={{ color: "white", padding: "1em 0em" }}>
            Schedule a <strong>meeting right now.</strong>
          </Typography>
          <Grid
            container
            sx={
              {
                //   width: "100%",
              }
            }
          >
            <Grid item xs={4} sx={{ padding: "1em 1em 1em 0em" }}>
              <CssTextField
                variant="outlined"
                placeholder="Full Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={4} sx={{ padding: "1em" }}>
              <CssTextField
                variant="outlined"
                placeholder="Company Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={4} sx={{ padding: "1em" }}>
              <CssTextField
                variant="outlined"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={8}
              sx={{
                padding: "1em 1em 1em 0em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CssToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton
                  value="Advisory"
                  aria-label="Advisory"
                  sx={{ color: "#fff" }}
                >
                  Advisory
                </ToggleButton>
                <ToggleButton
                  value="Academy"
                  aria-label="Academy"
                  sx={{ color: "#fff" }}
                >
                  Academy
                </ToggleButton>
                <ToggleButton
                  value="Agency"
                  aria-label="Agency"
                  sx={{ color: "#fff" }}
                >
                  Agency
                </ToggleButton>
                <ToggleButton
                  value="Alliance"
                  aria-label="Alliance"
                  sx={{ color: "#fff" }}
                >
                  Alliance
                </ToggleButton>
              </CssToggleButtonGroup>
            </Grid>
            <Grid item xs={4} sx={{ padding: "1em" }}>
              <CssTextField placeholder="Phone Number" type="phone" fullWidth />
            </Grid>
            <Grid item xs={12} sx={{ padding: "1em 1em 1em 0em" }}>
              <CssToggleButtonGroup
                value={alignment2}
                exclusive
                onChange={handleAlignment2}
                aria-label="text alignment"
              >
                <ToggleButton
                  value="Strategy"
                  aria-label="Strategy"
                  sx={{ color: "#fff" }}
                >
                  Strategy
                </ToggleButton>
                <ToggleButton
                  value="Marketing"
                  aria-label="Marketing"
                  sx={{ color: "#fff" }}
                >
                  Marketing
                </ToggleButton>
                <ToggleButton
                  value="Digital Transformation"
                  aria-label="Digital Transformation"
                  sx={{ color: "#fff" }}
                >
                  Digital Transformation
                </ToggleButton>
                <ToggleButton
                  value="Business Process"
                  aria-label="Business Process"
                  sx={{ color: "#fff" }}
                >
                  Business Process
                </ToggleButton>
                <ToggleButton
                  value="System Integration"
                  aria-label="System Integration"
                  sx={{ color: "#fff" }}
                >
                  System Integration
                </ToggleButton>
                <ToggleButton
                  value="Data Science"
                  aria-label="Data Science"
                  sx={{ color: "#fff" }}
                >
                  Data Science
                </ToggleButton>
              </CssToggleButtonGroup>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0547fd",
                  borderRadius: "3em",
                  color: "#fff",
                  padding: ".8em",
                  width: "14em",
                  marginTop: "2.5em",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  ":hover":{
                    backgroundColor: "#0547fd",
                    }
                }}
                onClick={() => {
                  setStep(1);
                  console.log(datePickerRef);
                }}
              >
                Continue
                <Typography
                  sx={{
                    borderRadius: "2em",
                    color: "#fff",
                    backgroundColor: "#000",
                    padding: ".6em",
                    fontSize: ".7rem",
                    marginLeft: "2.8em",
                    fontFamily: "Poppins",
                    fontWeight: "700",
                    display: "flex",
                    justifyContent: "center",
                    alignItem: "center",
                  }}
                >
                  1/2
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box>
          <Typography variant="h4" sx={{ color: "white", padding: "1em 0em" }}>
            Pick a <strong>date and time.</strong>
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container>
              <Grid item xs={6} sx={{ padding: "1em 1em 1em 0em" }}>
                <DatePicker
                  ref={datePickerRef}
                  slots={{
                    openPickerIcon: KeyboardArrowDownIcon,
                  }}
                  sx={{
                    borderColor: "#fff",
                    color: "#fff",
                    width: "100%",
                    borderRadius: "5em",
                    borderStyle: "solid",
                    borderWidth: ".2em",
                    ".MuiInputBase-input": {
                      textAlign: "center",
                      color: "#fff",
                      "::placeholder": {
                        opacity: 1,
                        color: "#fff",
                        content: '"test"',
                      },
                    },
                    ".MuiSvgIcon-root": {
                      color: "#fff",
                    },
                    ".MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderStyle: "unset",
                      },
                      "&:hover fieldset": {
                        borderStyle: "unset",
                      },
                      "&.Mui-focused fieldset": {
                        borderStyle: "unset",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={3} sx={{ padding: "1em" }}>
                <TimePicker
                  slots={{
                    openPickerIcon: KeyboardArrowDownIcon,
                  }}
                  sx={{
                    width: "100%",
                    borderColor: "#fff",
                    color: "#fff",
                    borderRadius: "5em",
                    borderStyle: "solid",
                    borderWidth: ".2em",
                    ".MuiSvgIcon-root": {
                      color: "#fff",
                    },
                    ".MuiInputBase-input": {
                      textAlign: "center",
                      color: "#fff",
                      "::placeholder": { opacity: 1, color: "#fff" },
                    },
                    ".MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderStyle: "unset",
                      },
                      "&:hover fieldset": {
                        borderStyle: "unset",
                      },
                      "&.Mui-focused fieldset": {
                        borderStyle: "unset",
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={2} sx={{ padding: "1em" }}></Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#0547fd",
                    borderRadius: "3em",
                    color: "#fff",
                    padding: ".8em",
                    width: "18em",
                    marginTop: "2.5em",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    ":hover":{
                    backgroundColor: "#0547fd",
                    }
                  }}
                  onClick={() => {
                    setStep(0);
                    console.log(datePickerRef);
                  }}
                >
                  Schedule a meeting
                  <Typography
                    sx={{
                      borderRadius: "2em",
                      color: "#fff",
                      backgroundColor: "#000",
                      padding: ".6em",
                      fontSize: ".7rem",
                      marginLeft: "2.8em",
                      fontFamily: "Poppins",
                      fontWeight: "700",
                      display: "flex",
                      justifyContent: "center",
                      alignItem: "center",
                    }}
                  >
                    {`${step + 1}`}/2
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </LocalizationProvider>
        </Box>
      )}
    </Box>
  );
}

export default MeetingLayout;

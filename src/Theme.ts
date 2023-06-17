import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: green[500],
    },
  },
  typography:{
    fontFamily:'ITC Avant Garde Pro Md'
  },
  
});
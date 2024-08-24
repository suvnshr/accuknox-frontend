import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';


// Custom theme for the components
let theme = createTheme({
  shape: {
    borderRadius: 10
  },
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: indigo[700],
    },

  },

  // Override is required for the tabs component 
  // because we are using primary theme as white color
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: indigo[700]
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: indigo[700],
          },
        }
      }
    }
  },

  // Use custom fonts
  typography: {
    fontFamily: '"DM Sans", sans-serif'
  }
});

// make the fonts responsive
theme = responsiveFontSizes(theme)

export default theme;
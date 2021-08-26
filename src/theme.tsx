import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const colors = {
  primary: {
    light: "#C8F4F9",
    main: "#3CACAE",
    dark: "#358687",
    contrastText: "#fff",
  },
  secondary: {
    light: "#EEB5EB",
    main: "#C26DBC",
    dark: "#8f5e8b",
    contrastText: "#fff",
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: colors.primary.light,
      main: colors.primary.main,
      dark: colors.primary.dark,
      contrastText: colors.primary.contrastText,
    },
    secondary: {
      light: colors.secondary.light,
      main: colors.secondary.main,
      dark: colors.secondary.dark,
      contrastText: colors.secondary.contrastText,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiButton: {
      textPrimary: {
        color: colors.primary.contrastText,
      },
      textSecondary: {
        color: colors.secondary.main,
      },
      containedPrimary: {
        backgroundColor: colors.primary.dark,
        '&:hover': {
          backgroundColor: colors.primary.main,
        }
      },
      
      
    }
  }
});

export default theme;
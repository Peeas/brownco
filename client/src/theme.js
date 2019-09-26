import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({

    palette: {
      primary: {
          light: "#ff993f",
          main: "#F86800",
          dark: "#be3700",
          contrastText: "#ffffff",
      },
      secondary: {
          light: "#fff",
          main: "#000000",
          dark: "#000000",
          contrastText: "#ffffff"
      }
    }
  });
  export default theme;
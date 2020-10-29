import { createMuiTheme } from '@material-ui/core/styles';

const watermelon = createMuiTheme({
    palette: {
        primary: {
            main: '#4caf50',
            light: '#6fbf73',
            dark: '#357a38'
          },
          secondary: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#ffcc00',
          },
          tonalOffset: 0.2,
    },
    typography: { 
       useNextVariants: true
    }
 });

 export default watermelon;
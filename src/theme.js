import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const yellow = 'rgba(249, 195, 61, 1)'; // Hex #F9C33D

// Create a theme instance.
const theme = createMuiTheme({
    typography: {
        fontFamily: 'Roboto',
        fontSize: 14,
        h1: {
            fontFamily: 'Helvetica',
            fontSize: 64,
        },
        h2: {
            fontFamily: 'Helvetica',
            fontSize: 72,
            fontWeight: '400',
        },
        h3: {
            fontFamily: 'Ego',
            fontSize: 24,
        },
        h4: {
            fontFamily: 'Ego',
            fontSize: 18,
        },
        h5: {
            fontFamily: 'Roboto',
            fontSize: 14,
            fontWeight: 500,
        },
        h6: {
            fontFamily: 'Roboto',
            fontSize: 14,
            fontWeight: 400,
        },
        body1: {
            fontFamily: 'Helvetica',
            fontSize: 16,
            color: '#fffff',
            fontWeight: 400,
            marginBottom: 16,
            marginTop: 16,
        },
        body2: {
            fontFamily: 'Roboto',
            fontSize: 14,
            color: '#989898',
            fontWeight: 400,
            marginBottom: 16,
        },
        overline: {
            fontFamily: 'Roboto',
            fontSize: 14,
            fontWeight: 500,
            color: yellow,
            textTransform: 'uppercase',
        },
        button: {
            fontFamily: 'Ego',
            fontSize: 14,
            textTransform: 'unset',
        },
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#ffffff',
            contrastText: '#ffffff',
        },
        secondary: {
            main: yellow, //'rgba(44, 44, 44, 1)',
            contrastText: 'rgb(212, 212, 212)',
        },
        text: {
            primary: '#ffffff',
        },
        springus: {
            yellow, // Hex #F9C33D
            orange: 'rgba(247, 147, 30, 1)', // Hex #F7931E
            grey: 'rgba(118, 118, 118, 1)', // Hex #767676
            black: 'rgba(44, 44, 44, 1)', // Hex #2C2C2C
        },
        background: {
          primary: '#282c34',
          secondary: '#282c34',
        },
        alert: {
            red: 'rgba(226, 58, 45, 1)',
        },
    },
    overrides: {
        MuiAvatar: {
            root: {
                fontFamily: 'Roboto',
                fontWeight: 'bold',
            },
            colorDefault: {
                backgroundColor: 'white',
            },
        },
        MuiListItemText: {
            primary: {
                color: '#ffffff',
            },
        },
        MuiListItemAvatar: {
            root: {
                minWidth: 40,
            },
        },
    },
});


export default theme;
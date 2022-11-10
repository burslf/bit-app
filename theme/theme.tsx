import { ThemeProvider, Button, createTheme } from '@rneui/themed';

const mainTheme = createTheme({
  components: {
    Button: {
      raised: true,
      radius:'md',
    },
  },
  lightColors: {
    background: '#296D91',
    primary: "#000000",
    secondary: "blue"
  },
  darkColors: {
    background: '#296D91',
    primary: "#ffffff",
    secondary: "#2D2955"
  },
  mode: "dark"
});

export {mainTheme}
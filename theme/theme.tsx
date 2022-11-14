import { ThemeProvider, Button, createTheme } from '@rneui/themed';

const mainTheme = createTheme({
  components: {
    Button: {
      raised: true,
      radius:'md',
    },
  },
  lightColors: {
    background: '#9800FF',
    primary: "#000000",
    secondary: "blue"
  },
  darkColors: {
    background: '#9800FF',
    primary: "#ffffff",
    secondary: "#8400DE"
  },
  mode: "dark"
});

export {mainTheme}
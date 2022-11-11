import { useTheme } from "@rneui/themed";
import { CSSProperties } from "react";
import { ViewStyle } from "react-native";
import * as Animatable from "react-native-animatable";

const GetStarted = () => {
  const { theme } = useTheme();

  const styles = {
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    text: {
      textAlign: "center",
      color: theme.colors.primary,
      fontWeight: 'bold',
      fontSize: 19
    },
  };

  return (
    <Animatable.View style={(styles.container as ViewStyle)}>
      <Animatable.Text
        animation={"slideInDown"}
        iterationCount={5}
        direction="alternate"
        style={(styles.text as ViewStyle)}
      >
        Hello
      </Animatable.Text>
    </Animatable.View>
  );
};

export default GetStarted;

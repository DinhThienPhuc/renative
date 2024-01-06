import { COLOR_3580FF, COLOR_FFFFFF, getFontStyle } from "$utils";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_3580FF,
  },
  greeting: {
    color: COLOR_FFFFFF,
    ...getFontStyle({
      fontSize: 40,
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: 48,
    }),
  },
});

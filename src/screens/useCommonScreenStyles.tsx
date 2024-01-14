import { useTheme } from "$services";
import { StyleSheet } from "react-native";

export const useCommonScreenStyles = () => {
  const { colors } = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: colors.body,
    },
  });
};

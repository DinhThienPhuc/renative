import { Flex } from "$components";
import { THEMES, useTheme } from "$services";
import { TAny } from "$utils";
import { Button } from "react-native";
import { useCommonScreenStyles } from "../useCommonScreenStyles";

export const HomeScreen = ({ navigation }: { navigation: TAny }) => {
  const { theme, setTheme } = useTheme();
  const styles = useCommonScreenStyles();

  return (
    <Flex alignItems="center" style={styles.container}>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate("HomeDetail")}
      />
      <Button
        onPress={() => navigation.navigate("MyModal")}
        title="Open Modal"
      />
      <Button
        onPress={() => navigation.navigate("MyModal2")}
        title="Open Modal 2 ne"
      />
      <Button
        onPress={() =>
          setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
        }
        title="Toggle theme"
      />
    </Flex>
  );
};

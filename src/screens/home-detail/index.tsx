import { Flex } from "$components";
import { TAny } from "$utils";
import { Button, Text } from "react-native";
import { useCommonScreenStyles } from "../useCommonScreenStyles";

export const HomeDetailScreen = ({ navigation }: { navigation: TAny }) => {
  const styles = useCommonScreenStyles();

  return (
    <Flex alignItems="center" style={styles.container}>
      <Text>Home detail screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </Flex>
  );
};

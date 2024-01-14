import { Flex } from "$components";
import { Image, Text } from "react-native";
import { styles } from "./styles";

export const SplashScreen = () => {
  return (
    <Flex alignItems="center" style={styles.container}>
      <Image
        style={{ width: 87, height: 81 }}
        source={require("../../assets/images/logo.png")}
      />
      <Text style={styles.greeting}>Jarvis</Text>
    </Flex>
  );
};

import { Flex } from "$components";
import { Button, Text } from "react-native";
import { useCommonScreenStyles } from "../useCommonScreenStyles";

export const AlarmCreatorScreen = () => {
  const styles = useCommonScreenStyles();

  return (
    <Flex alignItems="center" style={styles.container}>
      <Text>Alarm Creator screen</Text>
      <Button title="Create alarm" />
    </Flex>
  );
};

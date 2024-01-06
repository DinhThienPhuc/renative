import { Flex } from "$components";
import { TAny } from "$utils";
import { Button, Text } from "react-native";
import { useCommonScreenStyles } from "../useCommonScreenStyles";

export const Alarms = ({ navigation }: { navigation: TAny }) => {
  const styles = useCommonScreenStyles();

  return (
    <Flex alignItems="center" style={styles.container}>
      <Text>Alarms screen</Text>
      <Button
        title="Go to Alarm Detail"
        onPress={() => navigation.navigate("AlarmDetail")}
      />
    </Flex>
  );
};

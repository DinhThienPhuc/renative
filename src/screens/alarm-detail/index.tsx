import { Flex } from "$components";
import { TAny } from "$utils";
import { Button, Text } from "react-native";
import { useCommonScreenStyles } from "../useCommonScreenStyles";

export const AlarmDetailScreen = ({ navigation }: { navigation: TAny }) => {
  const styles = useCommonScreenStyles();

  return (
    <Flex alignItems="center" style={styles.container}>
      <Text>Alarm Detail screen</Text>
      <Button
        title="Go to Alarms"
        onPress={() => navigation.navigate("Alarms")}
      />
    </Flex>
  );
};

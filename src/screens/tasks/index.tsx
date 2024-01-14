import { Flex } from "$components";
import { TAny } from "$utils";
import { Button, Text } from "react-native";
import { useCommonScreenStyles } from "../useCommonScreenStyles";

export const TasksScreen = ({ navigation }: { navigation: TAny }) => {
  const styles = useCommonScreenStyles();

  return (
    <Flex alignItems="center" style={styles.container}>
      <Text>Tasks screen</Text>
      <Button
        title="Go to Task Detail"
        onPress={() => navigation.navigate("TaskDetail")}
      />
    </Flex>
  );
};

import { Flex } from "$components";
import { TAny } from "$utils";
import { Button, Text } from "react-native";
import { useCommonScreenStyles } from "../useCommonScreenStyles";

export const TaskDetailScreen = ({ navigation }: { navigation: TAny }) => {
  const styles = useCommonScreenStyles();

  return (
    <Flex alignItems="center" style={styles.container}>
      <Text>Task detail screen</Text>
      <Button
        title="Go to Tasks"
        onPress={() => navigation.navigate("Tasks")}
      />
    </Flex>
  );
};

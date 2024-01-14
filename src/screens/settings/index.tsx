import { Flex } from "$components";
import { TAny } from "$utils";
import { Button, Text } from "react-native";
import { useCommonScreenStyles } from "../useCommonScreenStyles";

export const SettingsScreen = ({ navigation }: { navigation: TAny }) => {
  const styles = useCommonScreenStyles();

  return (
    <Flex alignItems="center" style={styles.container}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Setting Detail"
        onPress={() => navigation.navigate("SettingDetail")}
      />
    </Flex>
  );
};

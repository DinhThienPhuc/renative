import { Flex } from "$components";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "react-native";
import { useCommonScreenStyles } from "../useCommonScreenStyles";

const SCREEN = {
  SettingDetail: "SettingDetail",
  Setting: "Setting",
};

type RootStackParamList = {
  [screen in keyof typeof SCREEN]: undefined;
};

export const SettingDetailScreen = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, "SettingDetail">
    >();

  const styles = useCommonScreenStyles();

  return (
    <Flex alignItems="center" style={styles.container}>
      <Text>Detail Setting screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Setting")}
      />
    </Flex>
  );
};

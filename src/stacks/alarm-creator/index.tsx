import { NativeStackNavigator } from "$navigations";
import { AlarmCreatorScreen } from "$screens";
import useMainStacks from "../useMainStacks";

export const AlarmCreatorStackScreens = () => {
  const { commonScreensNavigationProps } = useMainStacks();

  return (
    <NativeStackNavigator
      navigatorProps={commonScreensNavigationProps}
      screens={[
        {
          name: "AlarmCreator",
          component: AlarmCreatorScreen,
          options: {
            title: "Alarm Creator",
          },
        },
      ]}
    />
  );
};

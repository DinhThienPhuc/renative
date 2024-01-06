import { NativeStackNavigator } from "$navigations";
import { AlarmDetailScreen, Alarms } from "$screens";
import useMainStacks from "../useMainStacks";

export const AlarmStackScreens = () => {
  const { commonScreensNavigationProps } = useMainStacks();

  return (
    <NativeStackNavigator
      navigatorProps={commonScreensNavigationProps}
      screens={[
        {
          name: "Alarms",
          component: Alarms,
          options: {
            title: "Alarms",
          },
        },
        {
          name: "AlarmDetail",
          component: AlarmDetailScreen,
          options: {
            title: "Alarm detail",
          },
        },
      ]}
    />
  );
};

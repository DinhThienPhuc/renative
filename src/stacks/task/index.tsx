import { NativeStackNavigator } from "$navigations";
import { TaskDetailScreen, TasksScreen } from "$screens";
import useMainStacks from "../useMainStacks";

export const TaskStackScreens = () => {
  const { commonScreensNavigationProps } = useMainStacks();

  return (
    <NativeStackNavigator
      navigatorProps={commonScreensNavigationProps}
      screens={[
        {
          name: "Tasks",
          component: TasksScreen,
          options: {
            title: "Tasks",
          },
        },
        {
          name: "TaskDetail",
          component: TaskDetailScreen,
          options: {
            title: "Task detail",
          },
        },
      ]}
    />
  );
};

import { SplashScreen } from "$screens";
import { ThemesProvider, initFasFontAwesomeIcons, schema } from "$services";
import { MainStackScreens } from "$stacks";
import { TAny } from "$utils";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useRef, useState } from "react";
import { Button, Text, View } from "react-native";

initFasFontAwesomeIcons();

const RootStack = createNativeStackNavigator();

function ModalScreen({ navigation }: { navigation: TAny }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function ModalScreen2({ navigation }: { navigation: TAny }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal 222222!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loadDataTimeoutId = useRef<number>();

  useEffect(() => {
    // Load data from here
    loadDataTimeoutId.current && clearTimeout(loadDataTimeoutId.current);
    loadDataTimeoutId.current = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <ThemesProvider schema={schema}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Group>
            <RootStack.Screen name="Root" component={MainStackScreens} />
          </RootStack.Group>
          <RootStack.Group screenOptions={{ presentation: "modal" }}>
            <RootStack.Screen name="MyModal" component={ModalScreen} />
            <RootStack.Screen name="MyModal2" component={ModalScreen2} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemesProvider>
  );
};

export default App;

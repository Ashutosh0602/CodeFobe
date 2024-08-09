import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppin-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppin-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppin-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppin-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppin-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppin-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppin-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });

  return (
    <>
      <NavigationContainer>
        <SafeAreaProvider>
          {/* <StatusBar
            backgroundColor="linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(255,255,255,1) 100%)"
            translucent={true}
          /> */}
          <Stack.Navigator>
            <Stack.Screen
              component={Navigation}
              name="Home"
              options={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: "horizontal",
                animationTypeForReplace: "push",
                animation: "slide_from_right",
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

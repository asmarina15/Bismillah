import React from "react";
import 'react-native-gesture-handler';
import SplashScreen from './src/screens/splash';
import SignInScreen from './src/screens/signin';
import SignUpScreen from './src/screens/SignUp';
import WelcomeScreen from './src/screens/welcome'; 
import RegisterScreen from './src/screens/Login';
// import DetailScreen from './src/screens/Detail';
// import SideNavigation from './src/screens/SideNavigation';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignInScreen"
                    component={SignInScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUpScreen"
                    component={SignUpScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name="RegisterScreen"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                /> */}
            </Stack.Navigator>
            {/* <Stack.Navigator initialRouteName="WelcomeScreen">
                <Stack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name="DetailScreen" 
                    component={DetailScreen}
                />
            </Stack.Navigator> */}
        </NavigationContainer>
    );
};

export default App;

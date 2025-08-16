import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding1, Onboarding2, Onboarding3, Onboarding4, Onboarding5 } from './src/screens/Onboarding';
import Login from './src/screens/Auth/Login';
import Signup from './src/screens/Auth/Signup';
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Onboarding4" component={Onboarding4} />
        <Stack.Screen name="Onboarding5" component={Onboarding5} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

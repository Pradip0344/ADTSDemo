import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import EventDetails from '../screens/EventDetails';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';


const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={EventDetails} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
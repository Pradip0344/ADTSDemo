/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import Navigation from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
// import firebase from '@react-native-firebase/app';

// const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_PROJECT_ID.appspot.com',
//   messagingSenderId: 'YOUR_SENDER_ID',
//   appId: 'YOUR_APP_ID',
// };

export default function App() {
  useEffect(() => {
    // if (!firebase.apps.length) {
    //   firebase.initializeApp(firebaseConfig);
    // }
  }, []);

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

import React from 'react';
import { View, Text, Button } from 'react-native';
// import auth from '@react-native-firebase/auth';

export default function ProfileScreen({ navigation }) {
  // const user = auth().currentUser;

  const handleLogout = async () => {
    // await auth().signOut();
    navigation.replace('Login');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email: {user?.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
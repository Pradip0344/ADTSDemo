import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
// import auth from '@react-native-firebase/auth';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // try {
    //   await auth().signInWithEmailAndPassword(email, password);
      navigation.replace('Home');
    // } catch (error) {
    //   Alert.alert('Login Error', error.message);
    // }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Don't have an account? Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}
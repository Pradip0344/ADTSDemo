import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
// import auth from '@react-native-firebase/auth';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    // try {
    //   await auth().createUserWithEmailAndPassword(email, password);
    //   Alert.alert('Success', 'Account created!');
    //   navigation.replace('Home');
    // } catch (error) {
    //   Alert.alert('Sign Up Error', error.message);
    // }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}
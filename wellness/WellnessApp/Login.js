import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './Styles';

const LoginPage = ({ navigation, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const hardcodedUsername = 'user';
    const hardcodedPassword = 'pass';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      const mockToken = 'mock-token';
      await AsyncStorage.setItem('userToken', mockToken);
      onLogin(navigation); // Call the onLogin function passed from App.js
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Wellness in the Wild {"\n\n"} Please log in below:</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Log In" onPress={handleLogin} style={styles.mainButton}/>
    </View>
  );
};

export default LoginPage;
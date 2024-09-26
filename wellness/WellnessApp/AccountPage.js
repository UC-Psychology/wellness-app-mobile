import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const getMockToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        // Here you would fetch the account details using the token
        // Below is just a simulation
        setName('John Doe');
        setEmail('john@example.com');
      }
    };

    getMockToken();
  }, []);

  const handleSave = () => {
    // Save the user's updated info
  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
};

export default AccountPage;
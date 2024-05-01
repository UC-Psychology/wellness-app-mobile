import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AccountPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Save the user's name and email
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
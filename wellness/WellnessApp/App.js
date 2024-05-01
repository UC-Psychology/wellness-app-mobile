import React from 'react';
import { TouchableOpacity, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurveyPage from './SurveyPage';
import AccountPage from './AccountPage';
import LoginPage from './Login';
import { styles } from './Styles';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
 return (
  <View style={styles.container}>
    <Text style={styles.titleText}>Welcome to the "Wellness in the Wild" App!</Text>
    <TouchableOpacity style={styles.mainButton} onPress={() => navigation.navigate('SurveyPage')}>
      <Text style={styles.buttonText}>Survey</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.mainButton} onPress={() => navigation.navigate('AccountPage')}>
      <Text style={styles.buttonText}>Manage Account</Text>
    </TouchableOpacity>
    <StatusBar style="auto" />
  </View>
 );
};

const handleLoginSuccess = ( navigation ) => {
  console.log('Login successful!');
  navigation.navigate('Home');
};

export default function App() {
 return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login">
        {(props) => <LoginPage {...props} onLogin={() => handleLoginSuccess(props.navigation)} />}
      </Stack.Screen>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerLeft: () => null, 
          gestureEnabled: false,
      }} />
      <Stack.Screen name="SurveyPage" component={SurveyPage} />
      <Stack.Screen name="AccountPage" component={AccountPage} />
    </Stack.Navigator>
  </NavigationContainer>
 );
}

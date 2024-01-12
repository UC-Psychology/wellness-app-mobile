import React from 'react';
import { TouchableOpacity, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurveyPage from './SurveyPage';
import { styles } from './Styles';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
 return (
  <View style={styles.container}>
    <Text style={styles.surveyText}>Welcome to the "Wellness in the Wild" App!</Text>
    <TouchableOpacity style={styles.mainButton} onPress={() => navigation.navigate('SurveyPage')}>
      <Text style={styles.buttonText}>Survey</Text>
    </TouchableOpacity>
    <StatusBar style="auto" />
  </View>
 );
};

export default function App() {
 return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SurveyPage" component={SurveyPage} />
    </Stack.Navigator>
  </NavigationContainer>
 );
}

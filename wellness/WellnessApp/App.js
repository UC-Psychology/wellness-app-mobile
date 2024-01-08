import React from 'react';
import { Button, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurveyPage from './SurveyPage';
import { styles } from './Styles';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
 return (
  <View style={styles.container}>
    <Text>Welcome to the "Wellness in the Wild" App!</Text>
    <Button title="Go to New Page" onPress={() => navigation.navigate('SurveyPage')} />
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

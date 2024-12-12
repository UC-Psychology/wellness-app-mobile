import React from 'react';
import { TouchableOpacity, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountPage from './AccountPage';
import LoginPage from './Login';
import { styles } from './Styles';

import SurveyPageOverallFeeling from './survey_pages/SurveyPageOverallFeeling';
import SurveyPageSilhouette from './survey_pages/SurveyPageSilhouette';
import SurveyPageLocation from './survey_pages/SurveyPageLocation';
import SurveyPageTemperature from './survey_pages/SurveyPageTemperature';
import SurveyPageLighting from './survey_pages/SurveyPageLighting';
import SurveyPageMaterials from './survey_pages/SurveyPageMaterials';
import SurveyPageActivities from './survey_pages/SurveyPageActivities';
import SurveyPageFinal from './survey_pages/SurveyPageFinal';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
 return (
  <View style={styles.container}>
    <Text style={styles.titleText}>Welcome to the "Wellness in the Wild" App!</Text>
    <TouchableOpacity style={styles.mainButton} onPress={() => navigation.navigate('SurveyPageOverallFeeling')}>
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
      <Stack.Screen name="SurveyPageOverallFeeling" component={SurveyPageOverallFeeling} />
      <Stack.Screen name="SurveyPageSilhouette" component={SurveyPageSilhouette} />
      <Stack.Screen name="SurveyPageLocation" component={SurveyPageLocation} />
      <Stack.Screen name="SurveyPageTemperature" component={SurveyPageTemperature} />
      <Stack.Screen name="SurveyPageLighting" component={SurveyPageLighting} />
      <Stack.Screen name="SurveyPageMaterials" component={SurveyPageMaterials} />
      <Stack.Screen name="SurveyPageActivities" component={SurveyPageActivities} />
      <Stack.Screen name="SurveyPageFinal" component={SurveyPageFinal} />
      <Stack.Screen name="AccountPage" component={AccountPage} />
    </Stack.Navigator>
  </NavigationContainer>
 );
}

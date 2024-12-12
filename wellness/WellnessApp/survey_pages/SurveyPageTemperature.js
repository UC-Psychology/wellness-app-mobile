import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, SafeAreaView} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BodySilhouette from '.././BodySilhouette';
import SliderComponent from '../SliderComponent';
import { styles } from '../Styles';

const SurveyPageTemperature = ({navigation, route}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const surveyData = route.params;
    const [temperature_value, setTemperatureValue] = useState(surveyData.temperature_value || 0.5);
    const [temperature_comfort, setTemperatureComfort] = useState(surveyData.temperature_comfort || 0.5);


    const onScroll = (event) => {
      const scrollPosition = event.nativeEvent.contentOffset.y;
      setScrollY(scrollPosition);
    };

    const goToNextPage = () => {
        surveyData.temperature_value = temperature_value;
        surveyData.temperature_comfort = temperature_comfort;
        navigation.navigate('SurveyPageLighting', surveyData);
    };

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEnabled={!isDragging}
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                >
                    <SliderComponent
                        promptText="Using the slider, describe the temperature of the place/space you are in:"
                        leftText="Very Cold"
                        rightText="Very Hot"
                        value={temperature_value}
                        onValueChange={setTemperatureValue}
                    />
                    <Text style={styles.smallText}>Using the slider, personally, how comfortable is this temperature for you?</Text>
                    {/* TODO: Add temperature slider here - Uncomfortable <-> Very Comfortable*/}

                    <TouchableOpacity style={styles.mainButton} onPress={goToNextPage}>
                        <Text style={styles.buttonText}>Next Page</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </GestureHandlerRootView>
    );
};

export default SurveyPageTemperature;

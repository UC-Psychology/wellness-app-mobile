import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles } from '../Styles';

const SurveyPageLighting = ({ navigation, route }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const surveyData = route.params;
    const [lighting, setLightingType] = useState(surveyData.lighting || "none");
    const [light_brightness, setLightingBrightness] = useState(surveyData.light_brightness || 0.5);
    const [light_comfort, setLightingComfort] = useState(surveyData.light_comfort || 0.5);

    const onScroll = (event) => {
      const scrollPosition = event.nativeEvent.contentOffset.y;
      setScrollY(scrollPosition);
    };

    const goToNextPage = () => {
        surveyData.lighting = lighting;
        surveyData.light_brightness = light_brightness;
        surveyData.light_comfort = light_comfort;
        navigation.navigate('SurveyPageMaterials', surveyData);
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
                    <Text style={styles.smallText}>Click one icon to describe the lighting in your environment?</Text>
                    {/* TODO: Add lighting icons here - Overhead Lighting, Sun/Natural Lighting, Floor/Table Lamps, Fire/Candle Lights*/}

                    <Text style={styles.smallText}>Using the slider, describe the brightness of the light of the place/space you are in?</Text>
                    {/* TODO: Add brightness slider here - Very Low Light <-> Very Bright*/}

                    <Text style={styles.smallText}>Using the slider, personally, how comfortable is this level of lighting?</Text>
                    {/* TODO: Add brightness slider here - Very Uncomfortable <-> Very Comfortable*/}
                    <TouchableOpacity style={styles.mainButton} onPress={goToNextPage}>
                        {/* TODO: Pass survey state into JSON object */}
                        <Text style={styles.buttonText}>Next Page</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </GestureHandlerRootView>
    );
};

export default SurveyPageLighting;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles } from '../Styles';

const SurveyPageOverallFeeling = ({navigation}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [layout, setLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const [shareMoreInputValue, setShareMoreInputValue] = useState("");
    const [locationInputValue, setLocationInputValue] = useState("");
    const [temperature_value, setTemperatureValue] = useState(0.5);
    const [temperature_comfort, setTemperatureComfort] = useState(0.5);
    const [lighting, setLightingType] = useState("none");
    const [light_brightness, setLightingBrightness] = useState(0.5);
    const [light_comfort, setLightingComfort] = useState(0.5);
    const [materials, setMaterials] = useState("none");
    const [material_comfort, setMaterialComfort] = useState(0.5);
    const [activitiesInputValue, setActivitiesInputValue] = useState("");
    const [mental_limitation, setMentalLimitation] = useState(0.5);
    const [physical_limitation, setPhysicalLimitation] = useState(0.5);
    const [anythingElseInputValue, setAnythingElseInputValue] = useState("");

    const goToNextPage = () => {
        const surveyData = {
            shareMoreInputValue,
            locationInputValue,
            temperature_value,
            temperature_comfort,
            lighting,
            light_brightness,
            light_comfort,
            materials,
            material_comfort,
            activitiesInputValue,
            mental_limitation,
            physical_limitation,
            anythingElseInputValue
        };
        navigation.navigate('SurveyPageSilhouette', { surveyData });
    };

    const onScroll = (event) => {
      const scrollPosition = event.nativeEvent.contentOffset.y;
      setScrollY(scrollPosition);
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
                    {/* Add some intro text here */}
                    <Text style={styles.surveyText}>In this moment, how are you feeling overall?</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.unhappyButton} onPress={() => console.log(':( Pressed')}>
                        <Text style={styles.buttonText}>:(</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.neutralButton} onPress={() => console.log(':| Pressed')}>
                        <Text style={styles.buttonText}>:|</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.happyButton} onPress={() => console.log(':) Pressed')}>
                        <Text style={styles.buttonText}>:)</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.surveyText}>Optional: Would you like to share more about your feelings or anything else you're experiencing right now?</Text>
                    <TextInput
                        editable
                        multiline
                        numberOfLines={4}
                        maxLength={400}
                        onChangeText={text => {
                            setShareMoreInputValue(text), 
                            console.log(shareMoreInputValue)
                        }}
                        value={shareMoreInputValue}
                        placeholder="I feel..."
                        style={{padding: 10}}
                        />
                    <TouchableOpacity style={styles.mainButton} onPress={goToNextPage}>
                        <Text style={styles.buttonText}>Next Page</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </GestureHandlerRootView>
    );
};

export default SurveyPageOverallFeeling;

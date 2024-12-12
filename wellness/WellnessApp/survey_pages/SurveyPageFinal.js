import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles } from '../Styles';

const SurveyPage = ({ navigation, route }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    
    const surveyData = route.params;
    const [mental_limitation, setMentalLimitation] = useState(surveyData.mental_limitation || 0.5);
    const [physical_limitation, setPhysicalLimitation] = useState(surveyData.physical_limitation || 0.5);
    const [anythingElseInputValue, setAnythingElseInputValue] = useState(surveyData.anythingElseInputValue || "");

    const onScroll = (event) => {
      const scrollPosition = event.nativeEvent.contentOffset.y;
      setScrollY(scrollPosition);
    };

    const onSubmit = () => {
        console.log("Submit button pressed");
        getGeolocation();
        surveyData.mental_limitation = mental_limitation;
        surveyData.physical_limitation = physical_limitation;
        surveyData.anythingElseInputValue = anythingElseInputValue;
        console.log(surveyData);
        {/* TODO: Send data to backend */}
        navigation.navigate('Home');
    };

    const getGeolocation = () => {
        console.log("Get geolocation button pressed");
        if (navigator == undefined) {
            console.log("Geolocation is not supported on this device: navigator is undefined");
        } else if (navigator.geolocation == undefined) {
            console.log("Geolocation is not supported on this device: navigator.geolocation is undefined");
        } else {
            console.log("Geolocation is supported on this device");
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position.coords.latitude, position.coords.longitude);
                },
                (error) => {
                    console.log(error);
                }
            );
        }
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

                    <Text style={styles.smallText}>Are you experiencing any limitations due to your <Text style={{fontWeight: 'bold'}}>experimental health</Text> while participating in these activities in this space?</Text>
                    {/* TODO: Add limitation slider here - Yes, limited a lot <-> No, not limited at all*/}

                    <Text style={styles.smallText}>Are you experiencing any limitations due to your <Text style={{fontWeight: 'bold'}}>physical health/abilities</Text> while participating in these activities in this space?</Text>
                    {/* TODO: Add limitation slider here - Yes, limited a lot <-> No, not limited at all*/}

                    <Text style={styles.smallText}>Anything else you'd like us to know?</Text>
                    <TextInput
                        editable
                        multiline
                        numberOfLines={4}
                        maxLength={400}
                        onChangeText={text => {
                            setAnythingElseInputValue(text), 
                            console.log(anythingElseInputValue)
                        }}
                        value={anythingElseInputValue}
                        placeholder="I feel..."
                        style={{padding: 10}}
                        />
                    <TouchableOpacity style={styles.mainButton} onPress={() => onSubmit()}>
                        {/* TODO: Pass survey state into JSON object */}
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </GestureHandlerRootView>
    );
};

export default SurveyPage;

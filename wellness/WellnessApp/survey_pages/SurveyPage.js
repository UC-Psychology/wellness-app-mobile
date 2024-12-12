import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, SafeAreaView} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BodySilhouette from '.././BodySilhouette';
import SliderComponent from '../SliderComponent';
import { styles } from '../Styles';

const SurveyPage = () => {
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

    const onScroll = (event) => {
      const scrollPosition = event.nativeEvent.contentOffset.y;
      setScrollY(scrollPosition);
    };

    const onSubmit = () => {
        console.log("Submit button pressed");
        getGeolocation();
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
                    <Text style={styles.smallText}>Feelings, both mental and physical, can be experienced in different parts ofthe body. Based on the rating you just provided, use the image below to show where you're feeling these sensations.</Text>
                    <SafeAreaView>
                        <BodySilhouette />
                    </SafeAreaView>

                    <Text style={styles.smallText}>What is your current location? For example, Community park, Library, Home, Work, Bus...</Text>
                    <TextInput
                        editable
                        multiline
                        numberOfLines={4}
                        maxLength={400}
                        onChangeText={text => {
                            setLocationInputValue(text), 
                            console.log(locationInputValue)
                        }}
                        value={locationInputValue}
                        placeholder="I'm at..."
                        style={{padding: 10}}
                        />

                    <SliderComponent
                        promptText="Using the slider, describe the temperature of the place/space you are in:"
                        leftText="Very Cold"
                        rightText="Very Hot"
                        value={temperature_value}
                        onValueChange={setTemperatureValue}
                    />
                    <Text style={styles.smallText}>Using the slider, personally, how comfortable is this temperature for you?</Text>
                    {/* TODO: Add temperature slider here - Uncomfortable <-> Very Comfortable*/}

                    <Text style={styles.smallText}>Click one icon to describe the lighting in your environment?</Text>
                    {/* TODO: Add lighting icons here - Overhead Lighting, Sun/Natural Lighting, Floor/Table Lamps, Fire/Candle Lights*/}

                    <Text style={styles.smallText}>Using the slider, describe the brightness of the light of the place/space you are in?</Text>
                    {/* TODO: Add brightness slider here - Very Low Light <-> Very Bright*/}

                    <Text style={styles.smallText}>Using the slider, personally, how comfortable is this level of lighting?</Text>
                    {/* TODO: Add brightness slider here - Very Uncomfortable <-> Very Comfortable*/}

                    <Text style={styles.smallText}>Of the following materials, which one do you see the most in surroundings?</Text>
                    {/* TODO: Add material icons here - Metal, Wood, Plastic, Cloth/Plastic*/}

                    <Text style={styles.smallText}>Using the slider, how comfortable are you surrounded this material?</Text>
                    {/* TODO: Add material slider here - Uncomfortable <-> Very Comfortable*/}

                    <Text style={styles.smallText}>What activities or purpose brought you to this space today? For example... </Text>
                    <TextInput
                        editable
                        multiline
                        numberOfLines={4}
                        maxLength={400}
                        onChangeText={text => {
                            setActivitiesInputValue(text), 
                            console.log(activitiesInputValue)
                        }}
                        value={activitiesInputValue}
                        placeholder="I'm here to..."
                        style={{padding: 10}}
                        />

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

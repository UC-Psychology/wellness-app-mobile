import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, SafeAreaView} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BodySilhouette from './BodySilhouette';
import { styles } from './Styles';

const SurveyPage = () => {
    const [inputValue, setInputValue] = useState("");
    const [isDragging, setIsDragging] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [layout, setLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });

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
                    <Text style={styles.surveyText}>Optional: Would you like to share more about
                    your feelings or anything else you're experiencing right now?</Text>
                    <TextInput
                        editable
                        multiline
                        numberOfLines={4}
                        maxLength={400}
                        onChangeText={text => {
                            setInputValue(text), 
                            console.log(inputValue)
                        }}
                        value={inputValue}
                        placeholder="I feel..."
                        style={{padding: 10}}
                        />
                    <Text style={styles.smallText}>Feelings, both mental and physical, can be experienced in different parts ofthe body. Based on the rating you just provided, use the image below to show where you're feeling these sensations.</Text>
                    <SafeAreaView>
                        <BodySilhouette />
                    </SafeAreaView>
                    
                    <Text style={styles.surveyText}>Anything else you'd like us to know?</Text>
                    <TextInput
                        editable
                        multiline
                        numberOfLines={4}
                        maxLength={400}
                        onChangeText={text => {
                            setInputValue(text), 
                            console.log(inputValue)
                        }}
                        value={inputValue}
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

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, SafeAreaView} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BodySilhouette from '.././BodySilhouette';
import SliderComponent from '../SliderComponent';
import { styles } from '../Styles';

const SurveyPageActivities = ({ navigation, route }) => {
    const [inputValue, setInputValue] = useState("");
    const [isDragging, setIsDragging] = useState(false);
   
    const surveyData = route.params;
    const [activitiesInputValue, setActivitiesInputValue] = useState(surveyData.activitiesInputValue || "");

    const onScroll = (event) => {
      const scrollPosition = event.nativeEvent.contentOffset.y;
      setScrollY(scrollPosition);
    };

    const goToNextPage = () => {
        surveyData.activitiesInputValue = activitiesInputValue;
        navigation.navigate('SurveyPageFinal', surveyData);
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
                    <TouchableOpacity style={styles.mainButton} onPress={goToNextPage}>
                        {/* TODO: Pass survey state into JSON object */}
                        <Text style={styles.buttonText}>Next Page</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </GestureHandlerRootView>
    );
};

export default SurveyPageActivities;

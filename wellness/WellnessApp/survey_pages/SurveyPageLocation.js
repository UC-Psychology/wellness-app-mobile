import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles } from '../Styles';

const SurveyPageLocation = ({navigation, route}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const surveyData = route.params;
    const [locationInputValue, setLocationInputValue] = useState(surveyData.inputValue || "");
    

    const onScroll = (event) => {
      const scrollPosition = event.nativeEvent.contentOffset.y;
      setScrollY(scrollPosition);
    };

    const goToNextPage = () => {
        surveyData.locationInputValue = locationInputValue
        navigation.navigate('SurveyPageTemperature', surveyData);
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
                    <Text style={styles.smallText}>What is your current location? For example, {"\n\t"}- Community park {"\n\t"}- Library {"\n\t"}- Home {"\n\t"}- Work {"\n\t"}- Bus</Text>
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
                    <TouchableOpacity style={styles.mainButton} onPress={goToNextPage}>
                        <Text style={styles.buttonText}>Next Page</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </GestureHandlerRootView>
    );
};

export default SurveyPageLocation;

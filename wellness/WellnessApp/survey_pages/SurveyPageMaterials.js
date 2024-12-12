import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles } from '../Styles';

const SurveyPageMaterials = ({ navigation, route }) => {
    const [inputValue, setInputValue] = useState("");
    const [isDragging, setIsDragging] = useState(false);
    
    const surveyData = route.params;
    const [materials, setMaterials] = useState(surveyData.materials || "none");
    const [material_comfort, setMaterialComfort] = useState(surveyData.material_comfort || 0.5);

    const onScroll = (event) => {
      const scrollPosition = event.nativeEvent.contentOffset.y;
      setScrollY(scrollPosition);
    };

    const goToNextPage = () => {
        surveyData.materials = materials;
        surveyData.material_comfort = material_comfort;
        navigation.navigate('SurveyPageActivities', surveyData);
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
                    <Text style={styles.smallText}>Of the following materials, which one do you see the most in surroundings?</Text>
                    {/* TODO: Add material icons here - Metal, Wood, Plastic, Cloth/Plastic*/}

                    <Text style={styles.smallText}>Using the slider, how comfortable are you surrounded this material?</Text>
                    {/* TODO: Add material slider here - Uncomfortable <-> Very Comfortable*/}

                    <TouchableOpacity style={styles.mainButton} onPress={goToNextPage}>
                        <Text style={styles.buttonText}>Next Page</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </GestureHandlerRootView>
    );
};

export default SurveyPageMaterials;

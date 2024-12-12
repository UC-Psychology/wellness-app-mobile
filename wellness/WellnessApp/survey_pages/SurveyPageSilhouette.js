import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BodySilhouette from '.././BodySilhouette';
import { styles } from '../Styles';

const SurveyPageSilhouette = ({navigation, route}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [layout, setLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const surveyData = route.params;

    const onScroll = (event) => {
      const scrollPosition = event.nativeEvent.contentOffset.y;
      setScrollY(scrollPosition);
    };

    const goToNextPage = () => {
        {/* TODO: Set survey data */}
        navigation.navigate('SurveyPageLocation', surveyData);
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
                    <Text style={styles.smallText}>Feelings, both mental and physical, can be experienced in different parts ofthe body. Based on the rating you just provided, use the image below to show where you're feeling these sensations.</Text>
                    <SafeAreaView>
                        <BodySilhouette />
                    </SafeAreaView>
                    <TouchableOpacity style={styles.mainButton} onPress={goToNextPage}>
                        <Text style={styles.buttonText}>Next Page</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </GestureHandlerRootView>
    );
};

export default SurveyPageSilhouette;

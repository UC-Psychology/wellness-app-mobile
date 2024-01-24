import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Sticker from './StickerElement';
import BodySilhouette from './BodySilhouette';
import { styles } from './Styles';

const SurveyPage = () => {
    const [inputValue, setInputValue] = useState("");
    const [isDragging, setIsDragging] = useState(false);
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEnabled={!isDragging}
                >
                    <Text style={styles.surveyText}>How are you feeling?</Text>
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
                    <View style={styles.buttonContainer}>
                        <Text style={styles.smallText}>Drag and Drop:</Text>
                        <Sticker setIsDragging={setIsDragging}/>{}
                    </View>
                    < BodySilhouette />
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
                        style={{padding: 10}}
                        />
                    <TouchableOpacity style={styles.mainButton} onPress={() => console.log('Submit Pressed')}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </GestureHandlerRootView>
    );
};

export default SurveyPage;

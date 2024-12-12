import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import { styles } from './Styles';

class SliderComponent extends Component {
    state = {
        value: 0.2,
    };

    render() {
        const { promptText, leftText, rightText, value, onValueChange } = this.props;

        return (
            <View>
                <Text>{promptText}</Text>
                <View style={styles.sliderContainer}>
                    <Text>{leftText}</Text>
                    <Slider
                        value={value}
                        onValueChange={onValueChange}
                        minimumValue={0}
                        maximumValue={1}
                        trackClickable={true}
                    />
                    <Text>{rightText}</Text>
                </View>
                <Text>Value: {value}</Text>
            </View>
        );
    }
}

export default SliderComponent;
import React from "react";
import Svg, {
  Rect,
} from "react-native-svg";

import TouchableOpacityG from './TouchableOpacityG';

const SvgTest = () => (
    <Svg width="200" height="300" viewBox="0 0 100 200">
        <Rect
            x="0"
            y="0"
            width="100"
            height="50"
            fill="red"
            onPress={e => {
                console.log('press1');
            }}
        />
        <TouchableOpacityG
            onPress={e => {
                console.log('press2');
            }}>
            <Rect x="0" y="50" width="100" height="50" fill="blue" />
        </TouchableOpacityG>
        <TouchableOpacityG
            onPress={e => {
                console.log('press3');
            }}>
            <Rect x="0" y="100" width="100" height="50" fill="green" />
        </TouchableOpacityG>
    </Svg>
);

export default SvgTest
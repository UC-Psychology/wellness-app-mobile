import React, { useRef } from 'react';
import { Animated, PanResponder, View, Image } from 'react-native';


const Sticker = ({ setIsDragging }) => {
    const pan = useRef(new Animated.ValueXY()).current;
  
    const panResponder = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onStartShouldSetPanResponderCapture: () => {
            setIsDragging(true); // start of dragging
            return true;
        },
        onMoveShouldSetPanResponderCapture: () => {
            setIsDragging(true); // during dragging
            return true;
          },
        onPanResponderMove: Animated.event(
          [null, { dx: pan.x, dy: pan.y }],
          { useNativeDriver: false }
        ),
        onPanResponderRelease: (e, gestureState) => {
            setIsDragging(false); // We're done dragging
            console.log("Sticker dropped at: ", gestureState.moveX, gestureState.moveY);
        },
      })
    ).current;
  
    return (
      <View {...panResponder.panHandlers}>
        <Animated.Image
          source={require('./assets/happySticker.png')}
          style={{
            width: 100,
            height: 100,
            transform: [{ translateX: pan.x }, { translateY: pan.y }],
          }}
        />
      </View>
    );
  };
  
  export default Sticker;
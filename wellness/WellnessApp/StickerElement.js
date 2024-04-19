import React, { useRef } from 'react';
import { Animated, PanResponder, View } from 'react-native';


const Sticker = ({ setIsDragging, scrollY, stickerType }) => {
    // TODO: make stickers able to be picked back up after dropping
    // TODO: make stickers render above image
    var stickerSource = '';
    switch (stickerType) {
      case "happySticker":
        stickerSource = require('./assets/happySticker.png');
        break;
      case "neutralSticker":
        stickerSource = require('./assets/neutralSticker.png');
        break;
      case "unhappySticker":
        stickerSource = require('./assets/unhappySticker.png');
        break;
    }

    const scrollYRef = useRef(scrollY);
    scrollYRef.current = scrollY;

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
            // need to add checks to see if sticker is on image (we can statically pass this from the layout and use math with the scroll view)
            setIsDragging(false); // We're done dragging
            console.log(stickerType,"dropped at: ", gestureState.moveX, gestureState.moveY);
            const dropYRelativeToScrollView = gestureState.moveY + scrollYRef.current;
            console.log('Sticker relative to view:', dropYRelativeToScrollView);
        },
      })
    ).current;
  
    return (
      <View {...panResponder.panHandlers}>
        <Animated.Image
          source={stickerSource}
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
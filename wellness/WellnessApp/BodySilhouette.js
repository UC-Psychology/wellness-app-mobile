import React from 'react';
import Svg, { G, Path, Rect } from 'react-native-svg';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { default as Silhouette } from './assets/Silhouette.svg'; 

const BodySilhouette = () => {
  const handleHeadClick = () => {
    console.log('Head clicked!');
  };

  const handleRightArmClick = () => {
    console.log('Right arm clicked!');
  };

  const handleLeftArmClick = () => {
    console.log('Left arm clicked!');
  };

  const handleTorsoClick = () => {
    console.log('Torso clicked!');
  };

  const handleRightLegClick = () => {
    console.log('Right leg clicked!');
  };

  const handleLeftLegClick = () => {
    console.log('Left leg clicked!');
  };

  return (
    <View>
      <Svg width="144" height="423.33334" viewBox="0 0 144 423.33334">
        {/* Render the SVG path */}
        <Silhouette />
        {/* Render the clickable areas */}
        <TouchableOpacity onPress={handleHeadClick} style={styles.touchable}>
          <Rect
            x="43.432678"
            y="4.3782153"
            width="58.594055"
            height="64.431671"
            fill="transparent"
            style={{ fill: 'none', strokeWidth: 0.911393 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRightArmClick} style={styles.touchable}>
          <Rect
            x="2.4871385"
            y="75.539589"
            width="34.678261"
            height="162.59001"
            fill="transparent"
            style={{ fill: 'none', strokeWidth: 0.911393 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLeftArmClick} style={styles.touchable}>
          <Rect
            x="107.40193"
            y="70.488144"
            width="35.407963"
            height="166.23854"
            fill="transparent"
            style={{ fill: 'none', strokeWidth: 0.911393 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTorsoClick} style={styles.touchable}>
          <Rect
            x="36.702976"
            y="71.757439"
            width="70.594055"
            height="139.05446"
            fill="transparent"
            style={{ fill: 'none', strokeWidth: 0.911393 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRightLegClick} style={styles.touchable}>
          <Rect
            x="34.513866"
            y="210.0822"
            width="36.298031"
            height="186.56734"
            fill="transparent"
            style={{ fill: 'none', strokeWidth: 0.911393 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLeftLegClick} style={styles.touchable}>
          <Rect
            x="71.754417"
            y="211.72569"
            width="37.027744"
            height="180.72963"
            fill="transparent"
            style={{ fill: 'none', strokeWidth: 0.911393 }}
          />
        </TouchableOpacity>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  touchable: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 0, 0, 0.2)', // Add semi-transparent red background for debugging
  },
});

export default BodySilhouette;
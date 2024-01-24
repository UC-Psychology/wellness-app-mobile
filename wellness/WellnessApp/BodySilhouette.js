import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { styles } from './Styles';

const BodySilhouette = () => {
    const [layout, setLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
  
    const onLayout = (event) => {
      const { x, y, width, height } = event.nativeEvent.layout;
      setLayout({ x, y, width, height });
    };
  
    return (
      <View onLayout={onLayout} style={ styles.silhouetteContainer }>
        <Image source={require('./assets/Silhouette.jpg')} style={styles.bodySilhouette}/>
      </View>
    );
};

export default BodySilhouette;
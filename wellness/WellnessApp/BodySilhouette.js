import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './Styles';

const BodySilhouette = () => {
    return (
      <View style={ styles.silhouetteContainer }>
        <Image source={require('./assets/Silhouette.jpg')} style={styles.bodySilhouette}/>
      </View>
    );
};

export default BodySilhouette;
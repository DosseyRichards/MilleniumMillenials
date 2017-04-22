import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Image
} from 'react-vr';

export default class whoreRoom extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('MilleniumFalcon8K.jpg')}/>
        <Text
          style={{
            backgroundColor: 'white',
            color:'black',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>

          Lotus Technologies was HERE ;) - LotusTech.NYC
          <Image source={asset('lotus_logo.png')}
              style={{width: 190, height: 90}} />
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('whoreRoom', () => whoreRoom);

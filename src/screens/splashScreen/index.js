import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{marginRight: 40}}
        source={require('../../assets/splashScreen.jpg')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SplashScreen;

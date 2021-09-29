import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
const HeaderComp = () => {
  return (
    <View style={styles.headerContainer}>
      <Icon name="format-align-left" size={25} />
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Icon name="location-pin" size={25} style={{marginTop: 10}} />
        <View style={styles.location}>
          <Text style={{fontWeight: 'bold', marginLeft: 20}}>
            Delivery To :
          </Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text>Mohali, Punjab</Text>
            <MaterialCommunity name="menu-down" size={25} />
          </View>
        </View>
      </View>
      <Icon name="shopping-cart" size={25} />
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
  },
  location: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
});

export default HeaderComp;

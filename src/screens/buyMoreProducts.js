import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
const BuyMoreProducts = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconTop}>
        <View style={styles.iconBack}>
          <IonIcons
            onPress={() => navigation.navigate('home')}
            name="md-arrow-back"
            size={25}
          />
        </View>
        <View style={styles.iconBack}>
          <AntIcon name="shoppingcart" size={25} />
        </View>
      </View>
      <View style={styles.productContainer}>
        <View style={styles.productCard}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{marginTop: 30}}
              source={require('../assets/Melon.png')}
            />
            <IonIcons style={styles.heartIcon} name="heart-outline" size={25} />
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 16, paddingLeft: 8}}>Water melon</Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 8,
              }}>
              <Image source={require('../assets/star.png')} />
              <Text style={{color: '#16162E', fontSize: 10}}>4.5</Text>
            </View>
          </View>
          <Text style={{fontSize: 14, paddingLeft: 8, color: '#d3d3d3'}}>
            4 Pic
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 18, paddingLeft: 8, fontWeight: 'bold'}}>
              $12.50
            </Text>
            <View
              style={{
                backgroundColor: '#40AA54',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                padding: 5,
                borderRadius: 5,
              }}>
              <AntIcon name="shoppingcart" color="white" size={25} />
            </View>
          </View>
        </View>
        <View style={styles.productCard}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{marginTop: 30}}
              source={require('../assets/papaya.png')}
            />
            <IonIcons style={styles.heartIcon} name="heart-outline" size={25} />
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 16, paddingLeft: 8}}>Papaya</Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 8,
              }}>
              <Image source={require('../assets/star.png')} />
              <Text style={{color: '#16162E', fontSize: 10}}>4.5</Text>
            </View>
          </View>
          <Text style={{fontSize: 14, paddingLeft: 8, color: '#d3d3d3'}}>
            4 Pic
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 18, paddingLeft: 8, fontWeight: 'bold'}}>
              $12.50
            </Text>
            <View
              style={{
                backgroundColor: '#40AA54',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                padding: 5,
                borderRadius: 5,
              }}>
              <AntIcon name="shoppingcart" color="white" size={25} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.productContainer}>
        <View style={styles.productCard}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{marginTop: 30}}
              source={require('../assets/Strawberry.png')}
            />
            <IonIcons style={styles.heartIcon} name="heart-outline" size={25} />
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 16, paddingLeft: 8}}>Strawberry</Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 8,
              }}>
              <Image source={require('../assets/star.png')} />
              <Text style={{color: '#16162E', fontSize: 10}}>4.5</Text>
            </View>
          </View>
          <Text style={{fontSize: 14, paddingLeft: 8, color: '#d3d3d3'}}>
            4 Pic
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 18, paddingLeft: 8, fontWeight: 'bold'}}>
              $12.50
            </Text>
            <View
              style={{
                backgroundColor: '#40AA54',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                padding: 5,
                borderRadius: 5,
              }}>
              <AntIcon name="shoppingcart" color="white" size={25} />
            </View>
          </View>
        </View>
        <View style={styles.productCard}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{marginTop: 30}}
              source={require('../assets/oreo.png')}
            />
            <IonIcons style={styles.heartIcon} name="heart-outline" size={25} />
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 16, paddingLeft: 8}}>Oreo</Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 8,
              }}>
              <Image source={require('../assets/star.png')} />
              <Text style={{color: '#16162E', fontSize: 10}}>4.5</Text>
            </View>
          </View>
          <Text style={{fontSize: 14, paddingLeft: 8, color: '#d3d3d3'}}>
            4 Pic
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 18, paddingLeft: 8, fontWeight: 'bold'}}>
              $12.50
            </Text>
            <View
              style={{
                backgroundColor: '#40AA54',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                padding: 5,
                borderRadius: 5,
              }}>
              <AntIcon name="shoppingcart" color="white" size={25} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.productContainer}>
        <View style={styles.productCard}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{marginTop: 30}}
              source={require('../assets/lays.png')}
            />
            <IonIcons style={styles.heartIcon} name="heart-outline" size={25} />
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 16, paddingLeft: 8}}>Lays</Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 8,
              }}>
              <Image source={require('../assets/star.png')} />
              <Text style={{color: '#16162E', fontSize: 10}}>4.5</Text>
            </View>
          </View>
          <Text style={{fontSize: 14, paddingLeft: 8, color: '#d3d3d3'}}>
            4 Pic
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 18, paddingLeft: 8, fontWeight: 'bold'}}>
              $12.50
            </Text>
            <View
              style={{
                backgroundColor: '#40AA54',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                padding: 5,
                borderRadius: 5,
              }}>
              <AntIcon name="shoppingcart" color="white" size={25} />
            </View>
          </View>
        </View>
        <View style={styles.productCard}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{marginTop: 30}}
              source={require('../assets/apple.png')}
            />
            <IonIcons style={styles.heartIcon} name="heart-outline" size={25} />
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 16, paddingLeft: 8}}>Apple</Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 8,
              }}>
              <Image source={require('../assets/star.png')} />
              <Text style={{color: '#16162E', fontSize: 10}}>4.5</Text>
            </View>
          </View>
          <Text style={{fontSize: 14, paddingLeft: 8, color: '#d3d3d3'}}>
            4 Pic
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 18, paddingLeft: 8, fontWeight: 'bold'}}>
              $12.50
            </Text>
            <View
              style={{
                backgroundColor: '#40AA54',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
                padding: 5,
                borderRadius: 5,
              }}>
              <AntIcon name="shoppingcart" color="white" size={25} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  iconTop: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 6,
    paddingRight: 6,
    marginTop: -60,
  },
  productCard: {
    height: 230,
    width: 166,
    backgroundColor: '#FFFFFF',
    elevation: 1,
    marginTop: 10,
    borderRadius: 5,
  },
  iconBack: {
    backgroundColor: '#FFFFFF',
    padding: 3,
    elevation: 2,
    borderRadius: 5,
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  productContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingLeft: 7,
    paddingRight: 7,
  },
  heartIcon: {
    marginTop: 10,
  },
});
export default BuyMoreProducts;

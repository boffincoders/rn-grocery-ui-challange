import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import HeaderComp from '../../components/Header';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <StatusBar backgroundColor="#828282" />
      <HeaderComp />
      <View
        style={{
          padding: 20,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <TextInput
          style={styles.input}
          placeholder="Search Product"
          underlineColorAndroid="transparent"
        />
        <View style={styles.filter}>
          <IonIcons
            style={{color: 'white', textAlign: 'center'}}
            name="options-outline"
            size={25}
          />
        </View>
      </View>
      <View style={styles.categories}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingRight: 18,
            paddingLeft: 18,

            marginTop: 10,
          }}>
          <Text style={{color: '#16162E', fontSize: 18, fontWeight: 'bold'}}>
            Categories
          </Text>
          <Text style={{color: '#F33A63', fontSize: 14, fontWeight: 'bold'}}>
            See all
          </Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.slider}>
            <View style={styles.categoryBox}>
              <Image source={require('../../assets/Carrot.png')} />
              <Text style={{color: '#16162E', fontSize: 10}}>Vegetables</Text>
            </View>
            <View style={styles.categoryBox}>
              <Image source={require('../../assets/Fish.png')} />
              <Text style={{color: '#16162E', fontSize: 10}}>Fish</Text>
            </View>
            <View style={styles.categoryBox}>
              <Image source={require('../../assets/Drink.png')} />
              <Text style={{color: '#16162E', fontSize: 10}}>Drinks</Text>
            </View>
            <View style={styles.categoryBox}>
              <Image source={require('../../assets/Meat.png')} />
              <Text style={{color: '#16162E', fontSize: 10}}>Meat</Text>
            </View>
            <View style={styles.categoryBox}>
              <Image source={require('../../assets/Drink.png')} />
              <Text style={{color: '#16162E', fontSize: 10}}>Drinks</Text>
            </View>
            <View style={styles.categoryBox}>
              <Image source={require('../../assets/Meat.png')} />
              <Text style={{color: '#16162E', fontSize: 10}}>Meat</Text>
            </View>
            <View style={styles.categoryBox}>
              <Image source={require('../../assets/Drink.png')} />
              <Text style={{color: '#16162E', fontSize: 10}}>Drinks</Text>
            </View>
            <View style={styles.categoryBox}>
              <Image source={require('../../assets/Meat.png')} />
              <Text style={{color: '#16162E', fontSize: 10}}>Meat</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabs}>
        <Text style={styles.tabFont}>Popular pack</Text>
        <Text style={styles.tabFont}>Top item</Text>
        <Text style={styles.tabFontNew}>Whats new</Text>
        <Text style={styles.tabFont}>Stock</Text>
      </View>
      <View style={styles.categories}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingRight: 18,
            paddingLeft: 18,
            marginTop: 10,
          }}>
          <Text style={{color: '#16162E', fontSize: 18, fontWeight: 'bold'}}>
            Hot Meal
          </Text>

          <Text
            onPress={() => navigation.navigate('moreProducts')}
            style={{color: '#F33A63', fontSize: 14, fontWeight: 'bold'}}>
            Buy More
          </Text>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.salesSlider}>
            <View style={styles.sales}>
              <Image source={require('../../assets/lays.png')} />
              <View style={styles.label}>
                <Text style={{color: 'white', textAlign: 'center'}}>-05%</Text>
              </View>
            </View>
            <View style={styles.sales}>
              <Image source={require('../../assets/canyy.png')} />
              <View style={styles.label}>
                <Text style={{color: 'white', textAlign: 'center'}}>-05%</Text>
              </View>
            </View>
            <View style={styles.sales}>
              <Image source={require('../../assets/tropi.png')} />
              <View style={styles.label}>
                <Text style={{color: 'white', textAlign: 'center'}}>-05%</Text>
              </View>
            </View>
            <View style={styles.sales}>
              <Image source={require('../../assets/oreo.png')} />
              <View style={styles.label}>
                <Text style={{color: 'white', textAlign: 'center'}}>-05%</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.categories}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingRight: 18,
            paddingLeft: 18,
            marginTop: 10,
          }}>
          <Text style={{color: '#16162E', fontSize: 18, fontWeight: 'bold'}}>
            Popular product
          </Text>
          <Text style={{color: '#F33A63', fontSize: 14, fontWeight: 'bold'}}>
            See all
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <View style={styles.productCard}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Image
                style={{marginTop: 30}}
                source={require('../../assets/orange.png')}
              />
              <IonIcons
                style={styles.heartIcon}
                name="heart-outline"
                size={25}
              />
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text style={{fontSize: 16, paddingLeft: 8}}>Malta</Text>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingRight: 8,
                }}>
                <Image source={require('../../assets/star.png')} />
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
            <TouchableOpacity
              onPress={() => navigation.navigate('productCheckout')}>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  style={{marginTop: 30, height: 80, width: 100}}
                  source={require('../../assets/garlic.png')}
                />
                <IonIcons
                  style={styles.heartIcon}
                  name="heart"
                  size={25}
                  color="#F33A63"
                />
              </View>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text style={{fontSize: 16, paddingLeft: 8}}>Garlic</Text>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingRight: 8,
                  }}>
                  <Image source={require('../../assets/star.png')} />
                  <Text style={{color: '#16162E', fontSize: 10}}>4.5</Text>
                </View>
              </View>
              <Text style={{fontSize: 14, paddingLeft: 8, color: '#d3d3d3'}}>
                Weight : 1Kg
              </Text>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                <Text
                  style={{fontSize: 18, paddingLeft: 8, fontWeight: 'bold'}}>
                  $17.00
                </Text>
                <View
                  style={{
                    backgroundColor: '#40AA54',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                    padding: 5,
                    borderRadius: 8,
                  }}>
                  <AntIcon name="shoppingcart" color="white" size={25} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
  },
  location: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  searchBar: {
    width: '100%',
    padding: 20,
  },
  input: {
    paddingTop: 10,
    width: 300,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#424242',
    borderRadius: 8,
  },
  label: {
    backgroundColor: '#FF4646',
    width: 100,
    marginTop: -13,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    marginLeft: -10,
  },
  filter: {
    backgroundColor: '#40AA54',
    padding: 10,
    textAlign: 'center',
    borderRadius: 5,
    elevation: 5,
  },
  categories: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  slider: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
  },
  salesSlider: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
  },
  heartIcon: {
    marginTop: 10,
  },
  categoryBox: {
    height: 74,
    width: 69,
    padding: 7,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    margin: 10,
    elevation: 1,
    borderRadius: 3,
  },
  tabs: {
    padding: 15,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  tabFont: {
    fontSize: 14,
  },
  tabFontNew: {
    fontSize: 14,
    color: '#63B974',
    fontWeight: 'bold',
    borderBottomColor: '#63B974',
    borderBottomWidth: 2,
  },
  sales: {
    height: 100,
    width: 100,
    backgroundColor: '#FFFFFF',
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    margin: 10,
  },
  productCard: {
    height: 230,
    width: 166,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    borderRadius: 5,
  },
});

export default HomeScreen;

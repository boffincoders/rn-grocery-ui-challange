import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
const Checkout = ({navigation}) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.iconTop}>
          <View style={styles.iconBack}>
            <IonIcons name="md-arrow-back" size={25} />
          </View>
          <View style={styles.iconBack}>
            <IonIcons name="heart" size={25} color="#F33A63" />
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/garlic.png')} />
        </View>
      </View>
      <View style={styles.productInfo}>
        <View style={styles.manageText}>
          <Text style={{fontSize: 30, color: '#16162E'}}>Garlic</Text>
          <View style={styles.innerText}>
            <TouchableOpacity
              onPress={() => {
                if (quantity === 0) {
                  setQuantity(0);
                } else {
                  setQuantity(quantity - 1);
                }
              }}>
              <View style={styles.iconBack}>
                <AntIcon name="minus" size={25} color="#70BF7F" />
              </View>
            </TouchableOpacity>
            <Text style={{fontSize: 20}}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <View style={styles.iconBack}>
                <AntIcon name="plus" size={25} color="#70BF7F" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            fontSize: 14,
            paddingLeft: 8,
            color: '#6A6A79',
            marginTop: -10,
          }}>
          Weight : 1Kg
        </Text>
        <Text
          style={{
            fontSize: 30,
            paddingLeft: 8,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          $17.00
        </Text>
        <View style={styles.productAbout}>
          <Text style={{color: '#16162E', fontSize: 16}}>About Product</Text>
          <Text style={{color: '#6A6A79', marginTop: 8}}>
            Garlic is a species of bulbous flowering plant in the onion genus
            Allium. Its close
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              paddingLeft: 8,
              marginTop: 15,
              fontWeight: 'bold',
            }}>
            Similar Product
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.slider}>
              <View style={styles.categoryBox}>
                <Image source={require('../../assets/tomato.png')} />
              </View>
              <View style={styles.categoryBox}>
                <Image source={require('../../assets/wildleek.png')} />
              </View>
              <View style={styles.categoryBox}>
                <Image source={require('../../assets/lemon.png')} />
              </View>
              <View style={styles.categoryBox}>
                <Image source={require('../../assets/onion.png')} />
              </View>
              <View style={styles.categoryBox}>
                <Image source={require('../../assets/redchili.png')} />
              </View>
              <View style={styles.categoryBox}>
                <Image source={require('../../assets/wildleek.png')} />
              </View>
              <View style={styles.categoryBox}>
                <Image source={require('../../assets/wildleek.png')} />
              </View>
              <View style={styles.categoryBox}>
                <Image source={require('../../assets/wildleek.png')} />
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('cart')}>
            <View style={styles.cart}>
              <Text
                style={{
                  color: '#40AA54',
                  fontSize: 18,
                  marginLeft: 15,
                  marginRight: 15,
                }}>
                Add to Cart
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.buyNow}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  marginLeft: 15,
                  marginRight: 15,
                  textTransform: 'uppercase',
                }}>
                Buy now
              </Text>
            </View>
          </TouchableOpacity>
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
  },
  header: {
    width: '100%',
    zIndex: 1,
    marginTop: 100,
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
  slider: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
  },
  iconBack: {
    backgroundColor: '#FFFFFF',
    padding: 3,
    elevation: 2,
    borderRadius: 5,
  },
  productInfo: {
    backgroundColor: '#F7F7F7',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 80,
    height: '60%',
    marginBottom: 0,
    paddingBottom: 0,
  },
  manageText: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  innerText: {
    display: 'flex',
    width: 150,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  productAbout: {
    marginTop: 8,
    paddingLeft: 8,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50,
  },
  cart: {
    borderColor: '#c1f4ca',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  buyNow: {
    backgroundColor: '#40AA54',
    padding: 10,
    borderRadius: 10,
  },
});

export default Checkout;

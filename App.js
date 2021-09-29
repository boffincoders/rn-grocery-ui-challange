import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import Checkout from './src/screens/checkout';
import BuyMoreProducts from './src/screens/buyMoreProducts';
import Cart from './src/screens/Cart';
import SplashScreen from './src/screens/splashScreen';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();
const App = () => {
  const [splashScreen, setSplashScreen] = useState(true);
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 1000);
  }, [splashScreen]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {splashScreen && (
          <Stack.Screen name="splash" component={SplashScreen} />
        )}
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="productCheckout" component={Checkout} />
        <Stack.Screen name="moreProducts" component={BuyMoreProducts} />
        <Stack.Screen name="cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

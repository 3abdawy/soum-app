import React from 'react';
import {PRODUCTS} from './routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from '@screens/Home/Products';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={PRODUCTS}>
      <Stack.Screen name={PRODUCTS} component={Products} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

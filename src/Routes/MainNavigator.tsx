import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UseCheckInternetConnection} from '@shared/Hooks/UseCheckInternetConnection';
import ConnectionLostSnackBar from '@shared/Components/ConnectionLostSnackBar';
import {createNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from '@screens/Home/Products';
import {PRODUCTS} from './routes';

export const navigationRef = createNavigationContainerRef();
const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  const {isConnected} = UseCheckInternetConnection();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitle: 'SOUM Filter demo',
        }}>
        <Stack.Screen name={PRODUCTS} component={Products} />
      </Stack.Navigator>
      {isConnected || isConnected === null ? null : <ConnectionLostSnackBar />}
    </NavigationContainer>
  );
};

export default MainNavigator;

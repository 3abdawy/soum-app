import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from '@screens/LandingScreen';
import {LANDING_SCREEN} from './routes';

const Stack = createNativeStackNavigator();

const LandingNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={LANDING_SCREEN}>
      <Stack.Screen name={LANDING_SCREEN} component={Landing} />
    </Stack.Navigator>
  );
};

export default LandingNavigator;

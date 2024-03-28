import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomLeftHeader from '@shared/Components/CustomHeader/CustomLeftHeader';
import Products from '@screens/Home/Products';

const Stack = createNativeStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={Products}
        options={{headerLeft: () => <CustomLeftHeader />}}
      />
    </Stack.Navigator>
  );
};

export default ProductsStack;

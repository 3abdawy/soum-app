import React from 'react';
import {SafeAreaView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import Products from '@screens/Home/Products';
import CustomHeader from '@shared/Components/CustomHeader';
import Colors from '@shared/Theme/Colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={() => ({
        title: '',
        drawerPosition: 'left',
        drawerType: 'front',
        header: ({navigation}) => (
          <SafeAreaView style={{backgroundColor: Colors.Base.Primary.White}}>
            <CustomHeader navigation={navigation} />
          </SafeAreaView>
        ),
      })}>
      <Drawer.Screen name="ProductsList" component={Products} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

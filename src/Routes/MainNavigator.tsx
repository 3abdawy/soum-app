import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import {UseCheckInternetConnection} from '@shared/Hooks/UseCheckInternetConnection';
import ConnectionLostSnackBar from '@shared/Components/ConnectionLostSnackBar';
import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

const MainNavigator = () => {
  const {isConnected} = UseCheckInternetConnection();
  const navigatorHandler = () => <DrawerNavigator />;

  return (
    <NavigationContainer ref={navigationRef}>
      {navigatorHandler()}
      {isConnected || isConnected === null ? null : <ConnectionLostSnackBar />}
    </NavigationContainer>
  );
};

export default MainNavigator;

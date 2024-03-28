import React, {useEffect} from 'react';
import MainNavigator from './src/Routes/MainNavigator';
import {I18nextProvider} from 'react-i18next';
import i18n from '@shared/Localization';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import 'react-native-devsettings';

const App = () => {
  // Force RTL
  useEffect(() => {
    if (I18nManager.isRTL !== true) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
      RNRestart.Restart();
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <MainNavigator />
    </I18nextProvider>
  );
};

export default App;

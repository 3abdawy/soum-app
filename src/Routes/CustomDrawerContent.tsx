import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Typography from '@shared/Components/Typography';
import Colors from '@shared/Theme/Colors';
import SVGIcon from '@shared/Components/SVGIcon';
import CustomButton from '@shared/Components/Buttons/CustomButton';
import {UseTranslationHook} from '@shared/Hooks/UseTranslationHook';
import {UseUserStore} from '@store/User';
import {performLogout} from '@shared/Utils/Authentication';

const CustomDrawerContent = props => {
  const {t} = UseTranslationHook();

  const cancelSVGData = {
    iconName: 'cancel',
    iconColor: Colors.Base.Primary.Normal,
    iconSize: 18,
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        testID="close_btn"
        label=""
        icon={() => <SVGIcon data={cancelSVGData} />}
        onPress={() => props.navigation.closeDrawer()}
      />
      <View style={styles.container}>
        <View style={styles.drawerImage}>
          <SVGIcon
            data={{
              iconName: 'roundedProfile',
              iconColor: Colors.Base.Primary.Normal,
              iconSize: 70,
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logoutContainer: {
    alignItems: 'flex-start',
    padding: 20,
  },
  drawerHeader: {
    backgroundColor: Colors.Base.Primary.Light,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  drawerImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Colors.Base.Primary.Light,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

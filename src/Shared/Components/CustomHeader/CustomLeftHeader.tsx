import React from 'react';
import {TouchableOpacity} from 'react-native';
import SVGIcon from '@shared/Components/SVGIcon';
import Colors from '@shared/Theme/Colors';

const CustomLeftHeader = ({navigation}) => {
  const burgerSVGData = {
    iconName: 'burgerMenu',
    iconColor: Colors.Base.Primary.Dark,
    iconSize: 18,
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      testID="sideMenu_btn">
      <SVGIcon data={burgerSVGData} />
    </TouchableOpacity>
  );
};
export default CustomLeftHeader;

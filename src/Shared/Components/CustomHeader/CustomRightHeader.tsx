import React from 'react';
import Colors from '@shared/Theme/Colors';
import {View} from 'react-native';
import SVGIcon from '@shared/Components/SVGIcon';

const CustomRightHeader = () => {
  const soumSVG = {
    iconName: 'wifi',
    iconColor: Colors.Base.Primary.Dark,
    iconSize: 32,
  };
  return (
    <View>
      <SVGIcon data={soumSVG} />
    </View>
  );
};

export default CustomRightHeader;

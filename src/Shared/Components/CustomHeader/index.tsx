import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomRightHeader from './CustomRightHeader';
import CustomLeftHeader from './CustomLeftHeader';
import Colors from '@shared/Theme/Colors';

const CustomHeader = ({navigation}) => (
  <View style={styles.header}>
    <CustomRightHeader />
    <CustomLeftHeader navigation={navigation} />
  </View>
);
export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: Colors.Base.Primary.White,
  },
});

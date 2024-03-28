import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import Colors from '@shared/Theme/Colors';

const FullScreenLoader = () => {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color={Colors.Brand.Primary.Normal} />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    zIndex: 1,
  },
});

export default FullScreenLoader;

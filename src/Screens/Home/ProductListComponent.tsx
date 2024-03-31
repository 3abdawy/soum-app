import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const ProductListComponent = ({products}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.product}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  product: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
});

export default ProductListComponent;

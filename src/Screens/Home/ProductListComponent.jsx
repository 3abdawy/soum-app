import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Typography from '@shared/Components/Typography';
import {UseTranslationHook} from '@shared/Hooks/UseTranslationHook';
import Colors from '@shared/Theme/Colors';

const ProductListComponent = ({products}) => {
  const {t} = UseTranslationHook();
  const renderItem = ({item}) => {
    return (
      <View style={styles.product}>
        <Typography style={styles.text}>{item.title}</Typography>
      </View>
    );
  };
  return (
    <FlatList
      ListHeaderComponent={
        <Typography variant="title" fontWeight="bold">
          {t('PRODUCTS_SCREEN.PRODUCTS_SHOWN')} : {products.length}
        </Typography>
      }
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
    borderBottomColor: Colors.Base.Primary.Normal,
  },
  text: {
    fontSize: 16,
  },
});

export default ProductListComponent;

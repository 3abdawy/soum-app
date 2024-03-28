import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {UseTranslationHook} from '@shared/Hooks/UseTranslationHook';
import TreeNode from './TreeNode';
import {products} from './data/products.json';

const Products = () => {
  const {t} = UseTranslationHook();
  return (
    <>
      <ScrollView
        style={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}>
        <TreeView data={products} />
      </ScrollView>
    </>
  );
};

const TreeView = ({data}) => {
  return (
    <View style={styles.container}>
      {data.map(rootNode => (
        <TreeNode key={rootNode.id} node={rootNode} />
      ))}
    </View>
  );
};

export default Products;

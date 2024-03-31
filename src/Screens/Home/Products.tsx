import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {products} from './data/products.js';
import {categories} from './data/categories.js';
import ProductListComponent from './ProductListComponent';
import SelectionPathComponent from './SelectionPathComponent';
import {
  findCategoryById,
  getAllParentIds,
  getAllChildIds,
} from '@shared/Utils/categoryUtils';

const Products = () => {
  const [activeSelections, setActiveSelections] = useState(new Set());
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered =
      activeSelections.size > 0
        ? products.filter(product => activeSelections.has(product.categoryId))
        : products;
    setFilteredProducts(filtered);
  }, [activeSelections]);

  const toggleSelection = categoryId => {
    const newSelections = new Set(activeSelections);
    if (newSelections.has(categoryId)) {
      newSelections.delete(categoryId);
      const allDescendantIds = getAllChildIds(
        findCategoryById(categories, categoryId),
      );
      allDescendantIds.forEach(id => newSelections.delete(id));
    } else {
      newSelections.add(categoryId);
      const allParentIds = getAllParentIds(categories, categoryId);
      allParentIds.forEach(id => newSelections.add(id));
    }
    setActiveSelections(newSelections);
  };

  return (
    <View style={styles.container}>
      <SelectionPathComponent
        categories={categories}
        activeSelections={activeSelections}
        toggleSelection={toggleSelection}
      />
      <ProductListComponent products={filteredProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default Products;

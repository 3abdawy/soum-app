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

  console.log({activeSelections, filteredProducts});

  useEffect(() => {
    const filtered =
      activeSelections.size > 0
        ? products.filter(product => activeSelections.has(product.categoryId))
        : products;
    setFilteredProducts(filtered);
  }, [activeSelections]);

  // useEffect(() => {
  //   const collectAllRelevantCategoryIds = (categoryId, allIds = new Set()) => {
  //     const category = findCategoryById(categories, categoryId);
  //     if (!category) return allIds;

  //     allIds.add(category.id); // Add the current category ID

  //     // Recursively add IDs for all subcategories
  //     const childIds = getAllChildIds(category);
  //     childIds.forEach(childId => allIds.add(childId));

  //     return allIds;
  //   };

  //   // Determine all category IDs to consider for product filtering
  //   const allCategoryIdsForFiltering = new Set();
  //   activeSelections.forEach(catId => {
  //     collectAllRelevantCategoryIds(catId, allCategoryIdsForFiltering);
  //   });

  //   // Filter products based on the determined category IDs
  //   const filtered = products.filter(product =>
  //     allCategoryIdsForFiltering.has(product.categoryId),
  //   );

  //   setFilteredProducts(filtered.length > 0 ? filtered : products);
  // }, [activeSelections]);

  const toggleSelection = categoryId => {
    const newSelections = new Set(activeSelections);
    const category = findCategoryById(categories, categoryId);

    if (newSelections.has(categoryId)) {
      // Deselect the category and all its children
      newSelections.delete(categoryId);
      getAllChildIds(category).forEach(id => newSelections.delete(id));
    } else {
      // Select the category and its parents without automatically selecting children
      newSelections.add(categoryId);
      getAllParentIds(categories, categoryId).forEach(id =>
        newSelections.add(id),
      );
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

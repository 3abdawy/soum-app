import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const FilterComponent = ({products, selectionPath, onSelect}) => {
  const lastSelectedItem = selectionPath[selectionPath.length - 1] || {
    children: products,
  };

  return (
    <View style={styles.filterContainer}>
      {lastSelectedItem.children.map(child => (
        <TouchableOpacity
          key={child.id}
          onPress={() => onSelect(child)}
          style={styles.filterButton}>
          <Text style={styles.filterText}>{child.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  filterButton: {
    margin: 5,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  filterText: {
    color: '#ffffff',
  },
});

export default FilterComponent;

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const renderCategories = (
  categories,
  activeSelections,
  toggleSelection,
  level = 0,
) => {
  return categories.map(category => (
    <View key={category.id} style={{paddingLeft: level * 20}}>
      <TouchableOpacity
        style={styles.category}
        onPress={() => toggleSelection(category.id)}>
        <Text style={styles.text}>{category.title}</Text>
        <Text style={styles.checkbox}>
          {activeSelections.has(category.id) ? '☑' : '☐'}
        </Text>
      </TouchableOpacity>
      {activeSelections.has(category.id) &&
        category.children &&
        category.children.length > 0 &&
        renderCategories(
          category.children,
          activeSelections,
          toggleSelection,
          level + 1,
        )}
    </View>
  ));
};

const SelectionPathComponent = ({
  categories,
  activeSelections,
  toggleSelection,
}) => {
  return (
    <View style={styles.container}>
      {renderCategories(categories, activeSelections, toggleSelection)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  text: {
    marginRight: 10,
  },
  checkbox: {
    fontSize: 18,
  },
});

export default SelectionPathComponent;

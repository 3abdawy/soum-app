import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const TreeNode = ({node}) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => {
    if (node.children) {
      setExpanded(!expanded);
    } else {
      // Handle leaf node selection (e.g., navigate to a detail view)
    }
  };

  return (
    <View style={styles.node}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.title}>{node.title}</Text>
      </TouchableOpacity>
      {expanded && node.children && (
        <View style={styles.children}>
          {node.children.map(child => (
            <TreeNode key={child.id} node={child} />
          ))}
        </View>
      )}
    </View>
  );
};

export default TreeNode;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  node: {
    marginTop: 5,
  },
  title: {
    fontWeight: 'bold',
  },
  children: {
    paddingLeft: 20,
  },
});

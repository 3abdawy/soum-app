export const findCategoryById = (categories, id) => {
  let result = null;
  for (const category of categories) {
    if (category.id === id) {
      return category;
    }
    if (category.children) {
      result = findCategoryById(category.children, id);
      if (result) {
        return result;
      }
    }
  }
  return result;
};

export const getAllParentIds = (categories, id, parents = []) => {
  for (const category of categories) {
    if (category.children.some(child => child.id === id)) {
      parents.push(category.id);
      getAllParentIds(categories, category.id, parents); // Recurse to find further parents
    } else if (category.children.length > 0) {
      getAllParentIds(category.children, id, parents);
    }
  }
  return parents;
};

export const getAllChildIds = (category, ids = []) => {
  if (category && category.children) {
    category.children.forEach(child => {
      ids.push(child.id);
      getAllChildIds(child, ids); // Recursive call for nested children
    });
  }
  return ids;
};

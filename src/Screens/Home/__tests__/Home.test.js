import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SelectionPathComponent from '@screens/Home/SelectionPathComponent';
import {categories} from '../data/categories';

describe('SelectionPathComponent', () => {
  it('renders categories and allows selection toggle', () => {
    const mockToggleSelection = jest.fn();
    const {getByText} = render(
      <SelectionPathComponent
        categories={categories}
        activeSelections={new Set()}
        toggleSelection={mockToggleSelection}
      />,
    );

    // Assuming "Electronics" is actually the top-level category title in categories data
    const categoryButton = getByText('Electronics');
    expect(categoryButton).not.toBeNull(); // Verify the category is rendered

    fireEvent.press(categoryButton); // Simulate pressing the category
    expect(mockToggleSelection).toHaveBeenCalledWith(expect.any(String)); // Check if toggle function is called with an ID
  });
});

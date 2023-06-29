import React from 'react';
import { render, screen } from '@testing-library/react-native';

import RecipesScreen from '../RecipesScreen';

it('renders the recipes screen', () => {
  render(<RecipesScreen />);

  expect(screen.getByText('Recipes!')).toBeDefined();
});

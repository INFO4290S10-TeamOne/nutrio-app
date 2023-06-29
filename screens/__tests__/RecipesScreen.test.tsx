import React from 'react';
import renderer from 'react-test-renderer';

import RecipesScreen from '../RecipesScreen';

it('renders the recipes screen', () => {
  const tree = renderer.create(<RecipesScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

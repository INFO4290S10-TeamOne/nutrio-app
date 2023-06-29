import React from 'react';
import renderer from 'react-test-renderer';
import { NativeBaseWrapper } from '../../jest/setup';

import RecipesScreen from '../RecipesScreen';

it('renders the recipes screen', () => {
  const tree = renderer.create(<NativeBaseWrapper children={<RecipesScreen />} />).toJSON();
  expect(tree).toMatchSnapshot();
});

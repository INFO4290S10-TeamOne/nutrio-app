import React from 'react';
import { render, screen } from '@testing-library/react-native';

import ScaleScreen from '../ScaleScreen';
import { NativeBaseWrapper } from '../../jest/setup';

it('renders the scale screen', () => {
  render(<NativeBaseWrapper children={<ScaleScreen />} />);

  expect(screen.getByText('Weight')).toBeDefined();
  expect(screen.getByText('Change item')).toBeDefined();
  expect(screen.getByText('Calories')).toBeDefined();
  expect(screen.getByText('Protein')).toBeDefined();
  expect(screen.getByText('Fat')).toBeDefined();
});

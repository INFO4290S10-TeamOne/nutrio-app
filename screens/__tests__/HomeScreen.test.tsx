import React from 'react';
import { render, screen } from '@testing-library/react-native';

import HomeScreen from '../HomeScreen';

it('renders the home screen', () => {
  render(<HomeScreen />);

  expect(screen.getByText('Home!')).toBeDefined();
});

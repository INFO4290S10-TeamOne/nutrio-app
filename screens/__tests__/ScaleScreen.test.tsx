import React from 'react';
import { render, screen } from '@testing-library/react-native';

import ScaleScreen from '../ScaleScreen';

it('renders the scale screen', () => {
  render(<ScaleScreen />);

  expect(screen.getByText('0.g')).toBeDefined();
});

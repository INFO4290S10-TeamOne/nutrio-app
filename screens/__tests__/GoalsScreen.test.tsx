import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { NativeBaseWrapper } from '../../jest/setup';

import GoalsScreen from '../GoalsScreen';

it('renders the goals screen', () => {
  render(<NativeBaseWrapper children={<GoalsScreen />} />);
  expect(screen.getByText('Goals!')).toBeDefined();
});

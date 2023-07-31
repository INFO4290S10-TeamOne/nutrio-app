import React from 'react';
import { render, screen } from '@testing-library/react-native';
import {it, expect} from '@jest/globals';

import GoalsScreen from '../GoalsScreen';

it('renders the goals screen', () => {
  render(<GoalsScreen />);

  expect(screen.getByText('Goals!')).toBeDefined();
});

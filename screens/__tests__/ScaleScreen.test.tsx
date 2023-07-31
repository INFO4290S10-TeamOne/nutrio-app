import React from 'react';
import { render, screen } from '@testing-library/react-native';
import {it, expect} from '@jest/globals';
import ScaleScreen from '../ScaleScreen';

it('renders the scale screen', () => {
  render(<ScaleScreen />);

  expect(screen.getByText('Scale!')).toBeDefined();
});

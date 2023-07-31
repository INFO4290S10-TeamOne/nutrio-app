import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { NativeBaseWrapper } from '../../jest/setup';
import {it, expect} from '@jest/globals';

import HomeScreen from '../HomeScreen';

it('renders the home screen', () => {
  render(<NativeBaseWrapper children={<HomeScreen />} />);

  expect(screen.getByText('Welcome!')).toBeDefined();
});

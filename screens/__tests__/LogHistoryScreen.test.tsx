import React from 'react';
import { render, screen } from '@testing-library/react-native';
import {it, expect} from '@jest/globals';
import LogHistoryScreen from '../LogHistoryScreen';

it('renders the log history screen', () => {
  render(<LogHistoryScreen />);

  expect(screen.getByText('Loading...')).toBeDefined();
});
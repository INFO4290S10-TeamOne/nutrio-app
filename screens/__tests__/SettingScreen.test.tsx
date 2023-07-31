import React from 'react';
import { render, screen } from '@testing-library/react-native';
import {it, expect} from '@jest/globals';
import SettingsScreen from '../SettingsScreen';

it('renders the home screen', () => {
  render(<SettingsScreen />);

  expect(screen.getByText('Settings!')).toBeDefined();
});

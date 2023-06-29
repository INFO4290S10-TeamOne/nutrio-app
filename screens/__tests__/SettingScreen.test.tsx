import React from 'react';
import { render, screen } from '@testing-library/react-native';

import SettingsScreen from '../SettingsScreen';

it('renders the home screen', () => {
  render(<SettingsScreen />);

  expect(screen.getByText('Settings!')).toBeDefined();
});

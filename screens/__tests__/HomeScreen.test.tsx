import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { NativeBaseWrapper } from '../../jest/setup';

import HomeScreen from '../HomeScreen';

describe('HomeScreen', () => {
  it('renders the home screen', () => {
    render(<NativeBaseWrapper children={<HomeScreen />} />);
    expect(screen.getByText('Welcome!')).toBeDefined();
  });

  it("Shows today's date", () => {
    render(<NativeBaseWrapper children={<HomeScreen />} />);
    expect(screen.getByText(new Date().toDateString())).toBeDefined();
  });
});

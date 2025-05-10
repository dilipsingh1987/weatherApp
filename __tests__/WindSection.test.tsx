import React from 'react';
import { render } from '@testing-library/react-native';
import WindSection from '../src/components/WindSection';

describe('WindSection', () => {
  it('renders wind data correctly', () => {
    const { getByText } = render(
      <WindSection speed={12} deg={270} pressure={1012} textColor="#000" backgroundColor="#eee" />,
    );

    expect(getByText('💨 Wind')).toBeTruthy();
    expect(getByText(/Wind: 12 kph/)).toBeTruthy();
    expect(getByText(/Direction: 270°/)).toBeTruthy();
    expect(getByText(/Pressure: 1012 hPa/)).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react-native';
import TimeSection from '../src/components/TimeSection';

describe('TimeSection', () => {
  it('renders all four time boxes', () => {
    const sunrise = 1715335200; // e.g., epoch for 6:00 AM
    const sunset = 1715382000; // e.g., epoch for 7:00 PM

    const { getByText } = render(
      <TimeSection sunrise={sunrise} sunset={sunset} textColor="#000" backgroundColor="#eee" />,
    );

    expect(getByText('Sunrise')).toBeTruthy();
    expect(getByText('Sunset')).toBeTruthy();
    expect(getByText('Moonrise')).toBeTruthy();
    expect(getByText('Moonset')).toBeTruthy();
  });
});

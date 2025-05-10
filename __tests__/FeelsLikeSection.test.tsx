import React from 'react';
import { render } from '@testing-library/react-native';
import FeelsLikeSection from '../src/components/FeelsLikeSection';

describe('FeelsLikeSection', () => {
  it('renders feels like and humidity values', () => {
    const { getByText } = render(
      <FeelsLikeSection feelsLike={29.2} humidity={85} textColor="#000" backgroundColor="#eee" />,
    );

    expect(getByText('🧊 Feels Like')).toBeTruthy();
    expect(getByText('Feels like: 29°C')).toBeTruthy();
    expect(getByText('Humidity: 85%')).toBeTruthy();
  });
});

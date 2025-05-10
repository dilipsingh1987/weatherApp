import React from 'react';
import { render } from '@testing-library/react-native';
import TimeBox from '../src/components/TimeBox';

describe('TimeBox', () => {
  it('renders label and value with styles', () => {
    const { getByText } = render(
      <TimeBox label="Sunrise" value="06:00 AM" textColor="#000" backgroundColor="#eee" />,
    );

    expect(getByText('Sunrise')).toBeTruthy();
    expect(getByText('06:00 AM')).toBeTruthy();
  });
});

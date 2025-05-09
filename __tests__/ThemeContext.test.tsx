import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { ThemeProvider } from '../src/theme/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeToggleComponent from '../src/theme/ThemeToggleComponent';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(() => Promise.resolve(null)), // default: no saved theme
}));

describe('ThemeContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('toggles to dark mode and persists it', async () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeToggleComponent />
      </ThemeProvider>,
    );

    fireEvent.press(getByTestId('theme-toggle-button'));

    await waitFor(() => {
      expect(getByTestId('theme-value').props.children).toBe('dark');
    });

    expect(AsyncStorage.setItem).toHaveBeenCalledWith('darkMode', 'true');
  });

  it('restores dark mode from AsyncStorage (simulating app restart)', async () => {
    // Simulate that dark mode was stored
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce('true');

    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeToggleComponent />
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(getByTestId('theme-value').props.children).toBe('dark');
    });
  });

  it('defaults to light mode when no value stored', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null); // simulate first launch

    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeToggleComponent />
      </ThemeProvider>,
    );

    await waitFor(() => {
      expect(getByTestId('theme-value').props.children).toBe('light');
    });
  });
});

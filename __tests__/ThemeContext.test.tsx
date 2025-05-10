import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { ThemeProvider } from '../src/theme/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeToggleComponent from '../src/theme/ThemeToggleComponent';

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(() => Promise.resolve(null)), // default: no saved value
}));

describe('ThemeContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('toggles from light to dark mode and persists it', async () => {
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

  it('restores dark mode on mount if stored as true', async () => {
    // Simulate dark mode persisted in storage
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

  it('defaults to light mode when no theme is stored', async () => {
    // Simulate first launch (no stored theme)
    (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null);

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

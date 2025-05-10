import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import MenuButton from '../src/components/MenuButton';
import { ThemeContext } from '../src/theme/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  removeItem: jest.fn(),
}));

jest.mock('../src/components/ThemeToggle', () => {
  const { Text } = require('react-native');
  return ({ onClose }: { onClose: () => void }) => (
    <Text testID="ThemeToggle" onPress={onClose}>
      Theme Toggle
    </Text>
  );
});

describe('MenuButton', () => {
  const renderWithTheme = (isDarkMode = false) =>
    render(
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme: jest.fn() }}>
        <MenuButton />
      </ThemeContext.Provider>,
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('opens the menu on button press', async () => {
    const { getByTestId, getByText } = renderWithTheme();
    fireEvent.press(getByTestId('menu-button'));

    await waitFor(() => {
      expect(getByText('Clear Last Search')).toBeTruthy();
    });
  });

  it('clears last search and closes menu on "Clear Last Search" press', async () => {
    const { getByTestId, getByText, queryByText } = renderWithTheme();

    // Open the menu
    fireEvent.press(getByTestId('menu-button'));

    // Wait for the menu to open and then click on "Clear Last Search"
    await act(async () => {
      fireEvent.press(getByText('Clear Last Search'));
    });

    // Wait for AsyncStorage to be called and check that the menu closed
    await waitFor(() => {
      expect(AsyncStorage.removeItem).toHaveBeenCalledWith('lastCity');
      expect(queryByText('Clear Last Search')).toBeNull();
    });
  });

  it('closes modal on overlay press', async () => {
    const { getByTestId, getByText, queryByText } = renderWithTheme();

    // Open the menu
    fireEvent.press(getByTestId('menu-button'));

    await waitFor(() => {
      expect(getByText('Clear Last Search')).toBeTruthy();
    });

    // Close the modal by pressing the overlay
    fireEvent.press(getByTestId('overlay'));

    expect(queryByText('Clear Last Search')).toBeNull();
  });

  it('renders ThemeToggle and closes modal on toggle press', async () => {
    const { getByTestId, queryByText } = renderWithTheme();

    // Open the menu
    fireEvent.press(getByTestId('menu-button'));

    // Press the ThemeToggle button and verify the modal closes
    await act(async () => {
      fireEvent.press(getByTestId('ThemeToggle'));
    });

    expect(queryByText('Clear Last Search')).toBeNull();
  });
});

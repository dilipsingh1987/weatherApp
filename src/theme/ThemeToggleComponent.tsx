import React from 'react';
import { View, Button, Text } from 'react-native';
import { useTheme } from './ThemeContext';

const ThemeToggleComponent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View>
      <Text testID="theme-value">{isDarkMode ? 'dark' : 'light'}</Text>
      <Button title="Toggle Theme" onPress={toggleTheme} testID="theme-toggle-button" />
    </View>
  );
};

export default ThemeToggleComponent;

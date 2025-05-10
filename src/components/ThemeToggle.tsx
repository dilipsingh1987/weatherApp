import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { themeStyles } from '../styles/themeStyles';

const ThemeToggle = ({ onClose }: { onClose?: () => void }) => {
  const { toggleTheme, isDarkMode } = useTheme();

  const handleToggle = () => {
    toggleTheme();
    onClose?.();
  };

  return (
    <TouchableOpacity onPress={handleToggle}>
      <Text style={isDarkMode ? themeStyles.darkText : themeStyles.lightText}>Toggle Theme</Text>
    </TouchableOpacity>
  );
};

export default ThemeToggle;

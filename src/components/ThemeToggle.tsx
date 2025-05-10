import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import screenStyle from '../styles/screenStyles';

const ThemeToggle = ({ onClose }: { onClose?: () => void }) => {
  const { toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
    onClose?.();
  };

  return (
    <TouchableOpacity onPress={handleToggle}>
      <Text style={screenStyle.menuItems}>Toggle Theme</Text>
    </TouchableOpacity>
  );
};

export default ThemeToggle;

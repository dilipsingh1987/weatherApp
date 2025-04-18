import React from 'react';
import { Button } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { toggleTheme } = useTheme();
  return <Button title="Toggle Theme" onPress={toggleTheme} />;
};

export default ThemeToggle;
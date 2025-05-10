import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text, Pressable, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../theme/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { menuStyles } from '../styles/menustyles';

const MenuButton = () => {
  const [visible, setVisible] = useState(false);
  const { isDarkMode } = useTheme();

  const clearLastSearch = async () => {
    await AsyncStorage.removeItem('lastCity');
    setVisible(false);
  };

  const menuIcon = isDarkMode
    ? require('../assets/icons/menu_icon_dark.png')
    : require('../assets/icons/menu_icon_light.png');

  return (
    <>
      <TouchableOpacity onPress={() => setVisible(true)} style={menuStyles.menuButton}>
        <Image
          testID="menu-button"
          source={menuIcon}
          style={menuStyles.menuIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Modal transparent animationType="fade" visible={visible}>
        <Pressable testID="overlay" style={menuStyles.overlay} onPress={() => setVisible(false)}>
          <View
            style={[
              menuStyles.dropdown,
              isDarkMode ? menuStyles.dropdownDark : menuStyles.dropdownLight,
            ]}
          >
            <TouchableOpacity onPress={clearLastSearch}>
              <Text
                style={[menuStyles.item, isDarkMode ? menuStyles.textDark : menuStyles.textLight]}
              >
                Clear Last Search
              </Text>
            </TouchableOpacity>

            <ThemeToggle onClose={() => setVisible(false)} />
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

export default MenuButton;

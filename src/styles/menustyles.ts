import { Platform, StyleSheet } from 'react-native';

export const menuStyles = StyleSheet.create({
  menuButton: {
    marginRight: 10,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  overlay: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'ios' ? 80 : 60,
    paddingRight: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  dropdown: {
    width: 200,
    padding: 10,
    borderRadius: 8,
    elevation: 5,
  },
  dropdownDark: {
    backgroundColor: '#333',
  },
  dropdownLight: {
    backgroundColor: '#fff',
  },
  item: {
    fontSize: 16,
    paddingVertical: 8,
  },
  textDark: {
    color: '#fff',
  },
  textLight: {
    color: '#000',
  },
});

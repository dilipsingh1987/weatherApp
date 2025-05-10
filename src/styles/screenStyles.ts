import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  textStyle: {
    marginVertical: 4,
    fontSize: 18,
    color: '#888',
  },
  darkBg: {
    backgroundColor: '#000',
  },
  lightBg: {
    backgroundColor: '#fff',
  },
  textInputDark: {
    color: '#fff',
  },
  textInputLight: {
    color: '#000',
  },
  marginBottom10: {
    marginBottom: 10,
  },
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },

  searchButton: {
    position: 'absolute',
    right: 5,
    top: '50%',
    transform: [{ translateY: -20.8 }],
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 4,
    zIndex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },

  menuButton: {
    padding: 10,
  },

  dropdownMenu: {
    position: 'absolute',
    top: 40,
    right: 0,
    width: 180,
    backgroundColor: '#eee',
    borderRadius: 6,
    elevation: 4,
    padding: 10,
  },

  menuItems: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',
  },
  menuIcon: {
    fontSize: 18,
  },
  menuIconLight: {
    color: '#000',
  },
  menuIconDark: {
    color: '#fff',
  },
  searchText: {
    fontSize: 17,
  },
  searchTextDark: {
    color: '#fff',
  },
  searchTextLight: {
    color: '#000',
  },
  textInputWithButton: {
    paddingRight: 70,
  },
});

export const lightStyles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#f0f0f0',
    color: '#000',
  },
  buttonText: {
    color: '#fff',
  },
  placeholder: {
    color: '#555',
  },
});

export const darkStyles = StyleSheet.create({
  background: {
    backgroundColor: '#121212',
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
  },
  buttonText: {
    color: '#fff',
  },
  placeholder: {
    color: '#aaa',
  },
});

export const lightColors = {
  background: '#f2f2f2',
  text: '#000',
  header: '#e0e0e0',
};

export const darkColors = {
  background: '#121212',
  text: '#fff',
  header: '#1f1f1f',
};

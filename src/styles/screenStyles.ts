import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  textInputDark: {
    color: '#fff',
  },
  textInputLight: {
    color: '#000',
  },
  textStyle: {
    marginVertical: 4,
    fontSize: 18,
    color: '#888',
  },
  marginBottom10: {
    marginBottom: 10,
  },
  searchButton: {
    position: 'absolute',
    right: 5,
    top: '50%',
    transform: [{ translateY: -20 }],
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#ccc',
    borderRadius: 4,
    zIndex: 1,
  },
  textInputWithButton: {
    paddingRight: 70,
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
  darkBg: {
    backgroundColor: '#000',
  },
  lightBg: {
    backgroundColor: '#fff',
  },
});

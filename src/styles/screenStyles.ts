// screenStyles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  loading: {
    marginVertical: 20,
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  card: {
    marginTop: 30,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
  },
  city: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  condition: {
    fontSize: 20,
    marginVertical: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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
});

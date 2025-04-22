import { StyleSheet } from 'react-native';

export const stylesWeatherCard = StyleSheet.create({
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    alignItems: 'center',
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 48,
    fontWeight: '300',
    color: '#00796b',
  },
  condition: {
    fontSize: 20,
    color: '#004d40',
  },
});

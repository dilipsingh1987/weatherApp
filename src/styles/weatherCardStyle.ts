// weatherCardStyle.ts
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
  cardDark: {
    backgroundColor: '#263238',
  },
  cityDark: {
    color: '#fff',
  },
  tempDark: {
    color: '#4dd0e1',
  },
  conditionDark: {
    color: '#80cbc4',
  },
  cardContainer: {
    borderRadius: 16,
    padding: 16,
    marginVertical: 12,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationBlock: {
    flex: 1,
  },
  cityText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  countryText: {
    fontSize: 16,
    marginBottom: 6,
  },
  tempText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  reportedText: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  iconBlock: {
    alignItems: 'center',
  },
  weatherIcon: {
    width: 60,
    height: 60,
  },
  conditionText: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  timeBox: {
    width: '48%',
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    padding: 10,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
  },
  value: {
    fontWeight: '600',
    fontSize: 14,
  },
  subCard: {
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLight: {
    backgroundColor: '#fff',
  },
  boxDark: {
    backgroundColor: '#37474F',
  },
  boxLight: {
    backgroundColor: '#f1f1f1',
  },
  textDark: {
    color: '#fff',
  },
  textLight: {
    color: '#000',
  },
});

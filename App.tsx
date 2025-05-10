import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import WeatherScreen from './src/screens/WeatherScreen';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MenuButton from './src/components/MenuButton';
import { darkColors, lightColors } from './src/styles/screenStyles';

const Stack = createNativeStackNavigator();

function WeatherStack() {
  const { isDarkMode } = useTheme();
  const themeColors = isDarkMode ? darkColors : lightColors;

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: themeColors.header,
        },
        headerTitleStyle: {
          color: themeColors.text,
        },
        headerRight: () => <MenuButton />,
      }}
    >
      <Stack.Screen
        name="Weather"
        component={WeatherScreen}
        options={{ title: 'Weather Search Page' }}
      />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <WeatherStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

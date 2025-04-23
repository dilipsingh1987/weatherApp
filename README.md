
React Native Weather App
A simple weather application built with React Native that allows users to search for the current weather by city name. It features a dark/light theme toggle, persistent last search using AsyncStorage, using Redux Toolkit, Redux-Saga and OpenWeatherMap API to show weather info.


## Features

- Search for any city’s weather
- Debounced search input
- Offline handling with NetInfo
- Redux-Saga for async API calls
- Unit tests with Jest + axios-mock-adapter
- Styled using StyleSheet (no inline styles!)
- ESLint & code formatting enforced

Getting Started
Prerequisites
Node.js ≥ 16.x

npm or yarn

React Native CLI

Android Studio or Xcode (for running on emulator or device)
<details> <summary>Installation:</summary>
Clone the repository or unzip the folder.


git clone https://github.com/your-username/react-native-weather-app.git
cd react-native-weather-app
</details>
<details> <summary>Install dependencies:</summary>

npm install
# or
yarn
Install iOS pods (only for macOS):


cd ios && pod install && cd ..
Create a .env file in the root and add your OpenWeatherMap API key:



API_KEY=your_api_key_here
</details>
<details> <summary>Running the App:</summary>
Android:

npx react-native run-android
iOS (macOS only):

npx react-native run-ios
</details>
<details> <summary> Running Testsp:</summary>

npx jest
</details>
<details> <summary> Project Structure:</summary>

src/
├── components/        # Reusable UI components
├── hooks/             # Custom hooks
├── redux/             # State management
├── screens/           # App screens
├── services/          # API calls
├── styles/            # Shared styles
├── theme/             # Theme context
├── utils/             # Helper functions
└── types/             # TypeScript interfaces
</details>

Architectural Decisions
State Management: Redux Toolkit is used for managing weather-related state.

API Layer: All network requests are abstracted in weatherService.ts to separate business logic from UI.

Theme Management: A custom ThemeContext enables toggling between dark and light mode.

Persistent Storage: AsyncStorage is used to store the last searched city, retrieved automatically on app start.

Testing: Jest is configured for unit testing with axios-mock-adapter to mock API requests.

OpenWeatherMap API key is required to run the app.



### Search Weather

![image (1)](https://github.com/user-attachments/assets/cfbe618e-f1b8-4698-8b09-4482cebb5906)


### Dark Theme

![image (3)](https://github.com/user-attachments/assets/12ff44f5-a44d-457e-95db-eabdf75758ce)


### Default Theme
![screenshot7](https://github.com/user-attachments/assets/7d72a6db-2ee8-4279-9f17-42c48497257e)


License
This project is for educational/demo purposes.


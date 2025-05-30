
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

## Duplicate the `.env.example` file and rename it to `.env`:

cp .env.example .env


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



### Search Weather Light Theme

![light_mode](https://github.com/user-attachments/assets/dba2e806-3566-4981-a83d-9a25c1d12058)

### Search Weather Dark Theme 

![image (2)](https://github.com/user-attachments/assets/324d4a4a-b9b3-4034-be73-b9686b8948b2)

### Default Theme

![Simulator Screenshot - iPhone 15 Pro - 2025-05-11 at 05 37 04](https://github.com/user-attachments/assets/7c260b74-c99e-4cf3-932f-5a58163ab883)

### Menu Dropdown

![image (2)](https://github.com/user-attachments/assets/536fb32c-d9a7-4fd8-8936-9118cc6e0b5c)


License
This project is for educational/demo purposes.


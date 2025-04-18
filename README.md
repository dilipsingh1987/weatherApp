React Native Weather App
A simple weather application built with React Native that allows users to search for the current weather by city name. It features a dark/light theme toggle, persistent last search using AsyncStorage, and data from the OpenWeatherMap API.

🚀 Getting Started
📦 Prerequisites
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
🧱 Architectural Decisions
State Management: Redux Toolkit is used for managing weather-related state.

API Layer: All network requests are abstracted in weatherService.ts to separate business logic from UI.

Theme Management: A custom ThemeContext enables toggling between dark and light mode.

Persistent Storage: AsyncStorage is used to store the last searched city, retrieved automatically on app start.

Testing: Jest is configured for unit testing with axios-mock-adapter to mock API requests.

OpenWeatherMap API key is required to run the app.



📸 ### 🔍 Search Weather

![Search Weather](src/assets/images/screenshot1.png)
![Search Weather](src/assets/images/screenshot2.png)
![Search Weather](src/assets/images/screenshot5.png)

### 🌗 Dark Theme

![Dark Theme](src/assets/images/screenshot3.png)
![Dark Theme](src/assets/images/screenshot4.png)
![Dark Theme](src/assets/images/screenshot6.png)

### Default Theme
![By Default Theme](src/assets/images/screenshot7.png)

📜 License
This project is for educational/demo purposes.


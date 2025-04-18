React Native Weather App
A simple weather application built with React Native that allows users to search for the current weather by city name. It features a dark/light theme toggle, persistent last search using AsyncStorage, and data from the OpenWeatherMap API.

🚀 Getting Started
📦 Prerequisites
Node.js ≥ 16.x

npm or yarn

React Native CLI

Android Studio or Xcode (for running on emulator or device)

🛠 Installation
Clone the repository or unzip the folder.

bash
Copy
Edit
git clone https://github.com/your-username/react-native-weather-app.git
cd react-native-weather-app
Install dependencies:

bash
Copy
Edit
npm install
# or
yarn
Install iOS pods (only for macOS):

bash
Copy
Edit
cd ios && pod install && cd ..
Create a .env file in the root and add your OpenWeatherMap API key:

ini
Copy
Edit
API_KEY=your_api_key_here
▶️ Running the App
Android:
bash
Copy
Edit
npx react-native run-android
iOS (macOS only):
bash
Copy
Edit
npx react-native run-ios
🧪 Running Tests
bash
Copy
Edit
npx jest
📂 Project Structure
bash
Copy
Edit
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
🧱 Architectural Decisions
State Management: Redux Toolkit is used for managing weather-related state.

API Layer: All network requests are abstracted in weatherService.ts to separate business logic from UI.

Theme Management: A custom ThemeContext enables toggling between dark and light mode.

Persistent Storage: AsyncStorage is used to store the last searched city, retrieved automatically on app start.

Testing: Jest is configured for unit testing with axios-mock-adapter to mock API requests.

📸 ### 🔍 Search Weather

![Search Weather](assets/images/screenshot1.png)
![Search Weather](assets/images/screenshot2.png)
![Search Weather](assets/images/screenshot5.png)

### 🌗 Dark Theme

![Dark Theme](assets/images/screenshot3.png)
![Dark Theme](assets/images/screenshot4.png)
![Dark Theme](assets/images/screenshot6.png)
![By Default Theme](assets/images/screenshot7.png)

📜 License
This project is for educational/demo purposes.


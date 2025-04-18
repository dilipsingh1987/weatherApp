module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-redux|@react-navigation|redux-persist|@react-native-async-storage)/)',
  ],
  moduleNameMapper: {
    '^@env$': '<rootDir>/__mocks__/envMock.js',
  },
};

module.exports = {
  presets: [
    '@babel/preset-react',
    'module:metro-react-native-babel-preset',
    '@babel/preset-env',
  ],
  plugins: [
    'react-native-reanimated/plugin',
    ['@babel/plugin-transform-class-properties', {loose: true}],
    ['@babel/plugin-transform-private-methods', {loose: true}],
    ['@babel/plugin-transform-private-property-in-object', {loose: true}],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '*': './src',
          '@assets': './src/Assets',
          '@config': './src/Config',
          '@screens': './src/Screens',
          '@routes': './src/Routes',
          '@services': './src/Services',
          '@shared': './src/Shared',
          '@store': './src/Store',
        },
      },
    ],
  ],
};

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",
      // 'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['src'], // Enable absolute paths from the 'src' folder
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx'
          ],
        },
      ],
    ],
  };
};

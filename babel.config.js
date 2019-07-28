module.exports = {
  presets: [
    [
      'zillow',
      {
        modules: false,
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-export-default-from'],
  env: {
    cjs: {
      presets: ['zillow'],
    },
    test: {
      presets: ['zillow'],
    },
  },
};

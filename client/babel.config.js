module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: { version: '3.29', proposals: true },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties'],
}

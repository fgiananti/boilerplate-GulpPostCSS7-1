const path = require('path');

module.exports = {
  entry: {
    App: './app/assets/scripts/App.js',
    Vendor: './app/assets/scripts/Vendor.js'
  },
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env']
        }
      }
    ]
  }
};

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_KOFIC_API_KEY': JSON.stringify(process.env.REACT_APP_KOFIC_API_KEY),
      'process.env.REACT_APP_NAVER_MOVIE_CLIENT_ID': JSON.stringify(process.env.REACT_APP_NAVER_MOVIE_CLIENT_ID),
      'process.env.REACT_APP_NAVER_MOVIE_CLIENT_SECRET': JSON.stringify(process.env.REACT_APP_NAVER_MOVIE_CLIENT_SECRET),
      'process.env.REACT_APP_YOUTUBE_API_KEY_FIRST': JSON.stringify(process.env.REACT_APP_YOUTUBE_API_KEY_FIRST),
      'process.env.REACT_APP_YOUTUBE_API_KEY_SECOND': JSON.stringify(process.env.REACT_APP_YOUTUBE_API_KEY_SECOND),
      'process.env.PUBLIC_URL': JSON.stringify(process.env.API_KEY),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          esModule: false,
        },
      },
      {
        test: /\.(png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
    proxy: {
      '/v1': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
      },
      '/v3': {
        target: 'https://www.googleapis.com/youtube',
        changeOrigin: true,
      },
    },
  },
  mode: 'production',
  output: {
    filename: 'main.js',
    publicPath: '/',
  },
  performance: {
    hints: false,
  },
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  return {
    mode: isDev ? 'development' : 'production',
    cache: isDev ? { type: 'filesystem' } : false,
    entry: './src/main.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDev ? 'bundle.js' : 'bundle.[contenthash].js',
      clean: !isDev,
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: isDev,
              cacheCompression: false,
              presets: isDev
                ? ['@babel/preset-react']
                : ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                url: {
                  filter: (url) => {
                    if (url.startsWith('/images/') || url.startsWith('/resources/')) {
                      return false;
                    }
                    return true;
                  },
                },
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        inject: true,
        scriptLoading: 'blocking',
      }),
      ...(isDev
        ? []
        : [
            new CopyWebpackPlugin({
              patterns: [
                { from: 'public/images', to: 'images' },
                { from: 'public/resources', to: 'resources' },
              ],
            }),
          ]),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      static: [
        { directory: path.join(__dirname, 'public/images'), publicPath: '/images' },
        { directory: path.join(__dirname, 'public/resources'), publicPath: '/resources' },
      ],
      host: '127.0.0.1',
      port: 3000,
      hot: true,
      historyApiFallback: true,
    },
  };
};

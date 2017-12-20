// const path = require('path')
const Autoprefixer = require('autoprefixer')
const { CheckerPlugin } = require('awesome-typescript-loader')
// const Webpack = require('webpack')

// const appPath = Path.resolve(__dirname, '../src')
// const libPath = [Path.resolve(__dirname, '../node_modules')]

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { 
        test: /\.(ts|tsx)?$/,
        loader: 'awesome-typescript-loader'
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },

      {
        test: /\.less$/,
        include: __dirname + '/src',
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader?modules&less',
            options: {
              sourceMap: true,
              modules: true,
              camelCase: true,
              localIdentName: '[folder]__[local]--[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [Autoprefixer],
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              paths: [
                __dirname + '/src/styles',
                __dirname + '/node_modules/antd/dist'
              ],
              sourceMap: true,
            },
          },
        ],
      },
    ]
  },

  plugins: [
    new CheckerPlugin()
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
}


// {
//   test: /\.less$/,
//   include: resolve(__dirname, '../src'),
//   use: [
//     'style-loader',
//     {
//       loader: 'css-loader',
//       options: {
//         sourceMap: true,
//         modules: true,
//         camelCase: true,
//         localIdentName: '[folder]__[local]--[hash:base64:5]',
//       },
//     },
//     {
//       loader: 'postcss-loader',
//       options: {
//         plugins: () => [Autoprefixer],
//         sourceMap: true,
//       },
//     },
//     {
//       loader: 'less-loader',
//       options: {
//         paths: [
//           resolve(__dirname, '../src/styles'),
//           resolve(__dirname, '../node_modules/antd/dist'),
//         ],
//         sourceMap: true,
//       },
//     },
//   ],
// },

// {
//   test: /\.(less|css)$/,
//   include: resolve(__dirname, '../node_modules'),
//   use: [
//     'style-loader',
//     {
//       loader: 'css-loader',
//       options: {
//         sourceMap: true,
//       },
//     },
//     {
//       loader: 'postcss-loader',
//       options: {
//         plugins: () => [Autoprefixer],
//         sourceMap: true,
//         options: {
//           grid: true,
//         },
//       },
//     },
//     {
//       loader: 'less-loader',
//       options: {
//         sourceMap: true,
//       },
//     },
//   ],
// },

// {
//   test: /\.(otf|ttf|woff|eot|mp4|jpg)$/,
//   use: [
//     {
//       loader: 'file-loader',
//     },
//   ],
// },

// {
//   test: /\.(jpg|png|gif)$/,
//   use: ['file-loader'],
// }





//   {
//     test: /\.svg$/,
//     use: [
//         {
//             loader: 'babel-loader',
//         },
//         {
//             loader: 'react-svg-loader',
//             options: {
//                 jsx: true, // true outputs JSX tags
//             },
//         },
//     ],
//   },

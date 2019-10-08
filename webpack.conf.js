// const Uglify = require("uglifyjs-webpack-plugin");
// const proxyTarget = 'https://whitelabeling.gooddata.com/';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [

  ],
  module: {
    rules: [

    ],
  },
};

module.exports = {
    entry: './src',
    output: {
        // path: './dist',
        filename: 'index.js',
        // library: 'CharityBase',
        libraryTarget: 'window'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hmr: process.env.NODE_ENV === 'development',
                      },
                    },
                    'css-loader',
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // all options are optional
          filename: 'index.css',
          // filename: '[name].css',
          // chunkFilename: '[id].css',
          ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    optimization: {
      minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              output: {
                comments: false,
              },
            },
          }),
      ],
      // splitChunks: {
      //   chunks: 'all',
      // },
    },
    devServer: {
        contentBase: './demo',
        port: 3000,
        // https: true,
        // proxy: {
        //     '/gdc': {
        //         cookieDomainRewrite: "localhost",
        //         target: proxyTarget,
        //         secure: false,
        //         changeOrigin: true,
        //         onProxyReq: proxyReq => {
        //             // Browers may send Origin headers even with same-origin
        //             // requests. To prevent CORS issues, we have to change
        //             // the Origin to match the target URL.
        //             if (proxyReq.getHeader('origin')) {
        //                 proxyReq.setHeader('origin', proxyTarget);
        //             }
        //         }
        //     },
        //     "/packages": {
        //         "changeOrigin": true,
        //         "cookieDomainRewrite": "localhost",
        //         "target": proxyTarget
        //     },
        //     "/lib": {
        //         "changeOrigin": true,
        //         "cookieDomainRewrite": "localhost",
        //         "target": proxyTarget
        //     },
        //     "/images": {
        //         "changeOrigin": true,
        //         "cookieDomainRewrite": "localhost",
        //         "target": proxyTarget
        //     },
        //     "/*.html": {
        //         "cookieDomainRewrite": "localhost",
        //         "changeOrigin": true,
        //         "secure": false,
        //         "target": proxyTarget
        //     }
        // }
    }
}
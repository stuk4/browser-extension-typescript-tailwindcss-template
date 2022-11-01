const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   entry: {
      popup:path.resolve('src/popup.ts'),
      // popup: path.resolve(__dirname,"src","popup","popup.ts"),
      background: path.resolve(__dirname,"src","background","background.ts"),
      contentScript: path.resolve(__dirname,"src","contentScript","contentScript.ts"),
   },

   resolve: {
      extensions: [".ts", ".js",'.tsx'],
   },
   module: {
      rules: [
         {
            test: /\.(js|ts)x?$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
          },
         // {
         //    test: /\.tsx?$/,
         //    loader: "ts-loader",
         //    exclude: /node_modules/,
         // },
         {
            test: /\.css$/i,
            use: ['postcss-loader'],
          },
         {
            test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
            type: 'asset/resource'
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
      ],
   },
   plugins: [
      new CleanWebpackPlugin({
         cleanStaleWebpackAssets: false,
       }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname,"src", "manifest.json"), 
                    to: path.resolve(__dirname,"dist")
                
                },
                {
                  from: path.resolve(__dirname,"src","assets"), 
                  to: path.resolve(__dirname,"dist")
              
               },
               {
                  from: path.resolve(__dirname,"src","popup"), 
                  to: path.resolve(__dirname,"dist")
              
               }
            ]
        }
      ),
      // new HtmlPlugin({
      //    title: 'Pomodoro Timer',
      //    filename: 'popup.html',
      //    chunks: ['popup'],
      //    template: 'src/popup/popup.html',
      //  })
   ],
   output: {
      filename: "[name].js",
      path: path.join(__dirname, "dist"),
      clean:true
   },
   // optimization: {
   //    splitChunks: {
   //      chunks(chunk) {
   //        return chunk.name !== 'contentScript' && chunk.name !== 'background'
   //      }
   //    },
   //  }
};
// Option for react app
// function getHtmlPlugins(chunks) {
//    return chunks.map(chunk => new HtmlPlugin({
//      title: 'Pomodoro Timer',
//      filename: `${chunk}.html`,
//      chunks: [chunk],
//    }))
//  }
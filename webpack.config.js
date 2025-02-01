// This one the original snipet from the tutorial
// const path = require("path");
 
// module.exports = {
//   mode: "production",
//   entry: {
//     ["global"]: "./src/index.js",
//   },
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "[name].js",
//     library: "[name]",
//     libraryTarget: "umd",
//     globalObject: "this",
//     umdNamedDefine: true,
//     clean: true,
//   },
// };
 

// //Second one given to my by Cloude

// // We need the 'path' module to work with file and directory paths
// const path = require("path");

// // Export our webpack configuration object
// module.exports = {
//   // Set mode to "production" for optimized output
//   // Other options are "development" and "none"
//   mode: "production",

//   // Define entry points - where webpack starts bundling
//   entry: {
//     // "global" is the name of our bundle
//     // "./src/index.js" is the main file webpack will start with
//     ["global"]: "./src/index.js",
//   },

//   // Define how webpack should output our bundled code
//   output: {
//     // Where to put the bundled files (absolute path)
//     path: path.resolve(__dirname, "dist"),
    
//     // How to name the bundled file
//     // [name] will be replaced with the entry point name (in this case, "global")
//     filename: "[name].js",
    
//     // Clean the dist folder before each build
//     clean: true,
//   },

//   // Module rules tell webpack how to handle different types of files
//   module: {
//     rules: [
//       {
//         // This rule will apply to all .js files
//         test: /\.js$/,
//         // Don't process any files in node_modules
//         exclude: /node_modules/,
//         use: {
//           // Use babel-loader to process our JavaScript
//           loader: 'babel-loader',
//           options: {
//             // Use @babel/preset-env to convert modern JS to older JS
//             presets: ['@babel/preset-env']
//           }
//         }
//       }
//     ]
//   },

//   // Teach webpack how to handle modules
//   resolve: {
//     // File extensions webpack will try to resolve
//     extensions: ['.js'],
//     // Where to look for modules
//     modules: ['node_modules']
//   }
// };





const path = require("path");
const webpack = require('webpack');

module.exports = {
  mode: "production",
  entry: {
    ["global"]: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "[name]",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    // Expose GSAP globally
    new webpack.ProvidePlugin({
      gsap: 'gsap'
    })
  ],
  // This helps with GSAP integration
  externals: {
    'gsap': 'gsap'
  }






  },
  {
    "permissions": [
      "storage"
    ]
  }

};
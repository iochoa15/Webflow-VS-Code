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





// const path = require("path");
// const webpack = require('webpack');

// module.exports = {
//   mode: "production",
//   entry: {
//     ["global"]: "./src/index.js",
//     ["about"]: "./src/about.js",
//     ["casestudies"]: "./src/casestudies.js",
//     ["work"]: "./src/work.js",
//   },
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "[name].js",
//     library: "[name]",
//     libraryTarget: "umd",
//     globalObject: "this",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           }
//         }
//       }
//     ]
//   },
//   plugins: [
//     // Expose GSAP globally
//     new webpack.ProvidePlugin({
//       gsap: 'gsap'
//     })
//   ],
//   // This helps with GSAP integration
//   externals: {
//     'gsap': 'gsap'
//   },
//   devServer: {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS", 
//   "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
//   "Permissions-Policy": "interest-cohort=()"
//     }
//   },
//   resolve: {
//     extensions: ['.js']
//   }
// };
//   {
//     resolve: {
//         extensions: ['.js']
//     }
// };



// const path = require("path");
// const webpack = require('webpack');

// module.exports = {
//   mode: "production",
//   // Define multiple entry points
//   entry: {
//     "global": "./src/index.js",
//     "about": "./src/about.js",
//     "casestudies": "./src/casestudies.js",
//     "work": "./src/work.js"
//   },
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "[name].js",
//     library: "[name]",
//     libraryTarget: "umd",
//     globalObject: "this",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//             // Add this to handle ES6 modules
//             plugins: ['@babel/plugin-transform-modules-commonjs']
//           }
//         }
//       }
//     ]
//   },
//   plugins: [
//     // Make GSAP available in all files
//     new webpack.ProvidePlugin({
//       gsap: 'gsap'
//     })
//   ],
//   // External dependencies
//   externals: {
//     'gsap': 'gsap'
//   },
//   // Add this to see more detailed error messages
//   stats: {
//     errorDetails: true
//   }
// };


//02/06/2025
// These are required Node.js modules
// 'path' helps us work with file and directory paths
const path = require("path");
// 'webpack' gives us access to webpack's built-in plugins
const webpack = require('webpack');

// Export our webpack configuration object
module.exports = {
  // Set mode to "production" for optimized output
  mode: "production",

  // Define entry points - these are the files webpack will start with
  // Each key will become a separate bundle
  entry: {
    "global": "./src/index.js",      // Main animations file
    "about": "./src/about.js",       // About page specific code
    "casestudies": "./src/casestudies.js", // Case studies page code
    "work": "./src/work.js"          // Work page specific code
  },

  // Tell webpack how and where to save the compiled files
  output: {
    // The absolute path where files will be saved
    path: path.resolve(__dirname, "dist"),
    // How to name the output files - [name] gets replaced with the entry key
    filename: "[name].js",
    // The URL path where files will be available in the browser
    publicPath: "http://localhost:3000/"
  },

  // Module rules tell webpack how to handle different types of files
  module: {
    rules: [
      {
        // This rule applies to all .js files
        test: /\.js$/,
        // Don't process files in node_modules
        exclude: /node_modules/,
        use: {
          // Use babel-loader to make our JS work in older browsers
          loader: 'babel-loader',
          options: {
            // Use preset-env to automatically determine which JS features need to be transformed
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  // Development server configuration
  devServer: {
    // The port your dev server will run on
    port: 3000,
    // Where the server will run
    host: 'localhost',
    // Headers to allow cross-origin requests (needed for Webflow)
    headers: {
      // Allow requests from any origin
      "Access-Control-Allow-Origin": "*",
      // Allow these HTTP methods
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      // Allow these headers in requests
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    // Configure the static file serving
    static: {
      // Where to serve files from
      directory: path.join(__dirname, 'dist')
    }
  }
};

// Key changes from your previous configuration:

// Removed UMD-specific settings that were causing issues
// Added proper CORS headers for cross-origin requests
// Configured the dev server properly
// Simplified the overall configuration while maintaining functionality
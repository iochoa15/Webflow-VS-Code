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
// Import required Node.js modules
const path = require("path"); // Helps handle file paths
const webpack = require('webpack'); // Import webpack itself

// Export the webpack configuration object
module.exports = {
 // Set build mode to production for optimized output
 mode: "production",

 // Enable experimental features
 experiments: {
   // Allow top-level await in modules (useful for async imports)
   topLevelAwait: true,
 },

 // Define entry points - the starting files for each bundle
 entry: {
   // Each key will create a separate bundle with that name
   "global": "./src/index.js",      // Main JS file
   "about": "./src/about.js",       // About page JS
   "casestudies": "./src/casestudies.js", // Case studies JS
   "work": "./src/work.js"          // Work page JS
 },

 // Configure how webpack outputs the bundles
 output: {
   // Where to put the compiled files (absolute path)
   path: path.resolve(__dirname, "dist"),
   // How to name the output files ([name] gets replaced with entry point name)
   filename: "[name].js",
   // Base URL for all assets
   publicPath: "http://localhost:3000/",
   crossOriginLoading: 'anonymous' // New line
 },

 // Module rules tell webpack how to process different types of files
 module: {
   rules: [
     {
       // Process all .js files
       test: /\.js$/,
       // Don't process node_modules
       exclude: /node_modules/,
       use: {
         // Use babel-loader to convert modern JS to browser-compatible JS
         loader: 'babel-loader',
         options: {
           // Preset configurations for Babel
           presets: [
             ['@babel/preset-env', {
               // Handle modules automatically
               modules: 'auto',
               // Define browser targets (last 2 versions of each browser)
               targets: {
                 browsers: ['last 2 versions']
               }
             }]
           ],
           // Babel plugins for additional features
           plugins: [
             // Helps with async/await and other runtime features
             '@babel/plugin-transform-runtime',
             // Converts ES6 modules to CommonJS format
             '@babel/plugin-transform-modules-commonjs'
           ]
         }
       }
     }
   ]
 },

 // Development server configuration
 devServer: {
   // Port number for the dev server
   port: 3000,
   // Where to host the server
   host: 'localhost',
   // CORS headers to allow cross-origin requests (needed for Webflow)
   headers: {
     // Allow requests from any origin
     "Access-Control-Allow-Origin": "*",
     // Allow these HTTP methods
     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
     // Allow these request headers
     "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
   },
   // Static file serving configuration
   static: {
     // Where to serve static files from
     directory: path.join(__dirname, 'dist')
   }
 }
};
// Key changes from your previous configuration:

// Removed UMD-specific settings that were causing issues
// Added proper CORS headers for cross-origin requests
// Configured the dev server properly
// Simplified the overall configuration while maintaining functionality
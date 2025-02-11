# Webflow GSAP Integration Guide

## Daily Development Workflow

### 1. Local Development and Testing

When making changes to your animations, follow these steps for local development:

1. Start your development server:
```bash
npx webpack serve --progress
```

2. Make changes to your JavaScript files in the `src` folder

3. Test your changes at `http://localhost:3000`

### 2. Deploying Updates

When your animations are working locally and you're ready to deploy:

1. Build the production version:
```bash
npx webpack
```

2. Copy the built files to the docs folder:
```bash
cp -r dist/* docs/
```

3. Commit and push to GitHub:
```bash
git add .
git commit -m "Add new animations"
git push origin main
```

## Project Setup Guide

### Initial Setup

1. Create your project directory:
```bash
mkdir my-webflow-project
cd my-webflow-project
```

2. Initialize npm:
```bash
npm init -y
```

3. Install required dependencies:
```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev @babel/core @babel/preset-env babel-loader
npm install --save-dev @babel/plugin-transform-runtime @babel/plugin-transform-modules-commonjs
npm install gsap
```

### Project Structure

Create this folder structure:
```
my-webflow-project/
├── src/
│   ├── index.js
│   ├── about.js
│   └── other-pages.js
├── docs/
├── webpack.config.js
├── .babelrc
├── .gitignore
└── package.json
```

### Configuration Files

1. Create `.gitignore`:
```
node_modules
dist
.DS_Store
```

2. Create `webpack.config.js`:
```javascript
const path = require("path");
const webpack = require('webpack');

module.exports = {
  mode: "production",
  entry: {
    "global": "./src/index.js",
    // Add other entry points as needed
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "http://localhost:3000/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-transform-modules-commonjs'
            ]
          }
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    host: 'localhost',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    static: {
      directory: path.join(__dirname, 'dist')
    }
  }
};
```

3. Create `.babelrc`:
```json
{
  "presets": [
    ["@babel/preset-env", {
      "modules": "auto",
      "targets": {
        "browsers": ["last 2 versions"]
      }
    }]
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-transform-modules-commonjs"
  ]
}
```

### GitHub Setup

1. Create a new repository on GitHub

2. Initialize your local repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [your-repo-url]
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository settings
   - Find GitHub Pages section
   - Set source to main branch and /docs folder

### Webflow Integration

In your Webflow project settings, add these scripts:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://[your-username].github.io/[repo-name]/global.js"></script>
```

## Adding New Animations

When adding new animations to your project:

1. In your source file (e.g., `src/index.js`):
```javascript
// Import required tools
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// Add your animation within the initialization function
function initializeAnimations() {
    // Example animation
    const newElements = document.querySelectorAll('.your-new-class');
    
    newElements.forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });
}
```

2. Follow the deployment steps above to push your changes

## Common Issues and Solutions

### Cross-Browser Compatibility

Always test your animations in multiple browsers, especially Safari. Some common issues and solutions:

1. **Safari Specific Issues**
   - Use HTTPS for all resources
   - Add force3D: true to animations
   - Test scrolling behavior thoroughly

2. **Performance Issues**
   - Use requestAnimationFrame for smooth animations
   - Batch similar animations together
   - Use transform instead of position properties

3. **Mobile Responsiveness**
   - Test on different screen sizes
   - Adjust animation timings for mobile
   - Consider disabling complex animations on mobile

## Best Practices

1. **Development Workflow**
   - Always test locally first
   - Use meaningful commit messages
   - Keep your GitHub repository updated

2. **Code Organization**
   - Group related animations together
   - Use clear class names
   - Comment your code thoroughly

3. **Performance**
   - Don't animate too many elements at once
   - Use ScrollTrigger's markers during development
   - Clean up animations when they're no longer needed

4. **Debugging**
   - Check browser console for errors
   - Use console.log for debugging
   - Test across different devices and browsers

Remember to always test thoroughly before deploying and keep your local development environment organized.
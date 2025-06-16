# App2 (Remote Application)

This is the second remote application in the micro-frontend architecture, providing additional functionality to the main application.

## Overview

- Port: 3002
- Role: Remote application
- Purpose: Extends main application functionality

## Features

- Module Federation remote configuration
- Independent deployment capability
- Shared component integration
- TypeScript support
- Modern development setup

## Project Structure

```
app2/
├── src/
│   ├── App.tsx        # Main application component
│   ├── index.ts       # Entry point
│   └── bootstrap.tsx  # Bootstrap file
├── public/            # Static files
├── webpack.config.js  # Webpack configuration
└── package.json       # Dependencies and scripts
```

## Module Federation Configuration

```javascript
new ModuleFederationPlugin({
  name: "app2",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.tsx",
  },
  shared: {
    react: { singleton: true, eager: true },
    "react-dom": { singleton: true, eager: true },
    "react-router-dom": { singleton: true, eager: true },
  },
})
```

## Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run serve` - Serves the production build
- `npm run clean` - Cleans the build directory

## Dependencies

- React 18
- React Router DOM
- Webpack 5
- TypeScript
- SCSS

## Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Access the application at http://localhost:3002

## Integration with Main App

The application is integrated with the main app through Module Federation, allowing for:
- Independent development and deployment
- Shared component usage
- Seamless routing integration
- State management coordination

## Development Guidelines

1. Follow TypeScript best practices
2. Maintain component isolation
3. Use shared components when appropriate
4. Keep routing configuration aligned with main app
5. Follow the established project structure 
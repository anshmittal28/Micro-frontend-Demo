# App1 (Remote Application)

This is the first remote application in the micro-frontend architecture, providing dashboard and list functionality.

## Overview

- Port: 3001
- Role: Remote application
- Purpose: Provides dashboard and list views

## Features

- Module Federation remote configuration
- Dashboard view with navigation
- List view with infinite scroll
- Redux state management
- Photo gallery integration
- Favorites functionality

## Project Structure

```
app1/
├── src/
│   ├── components/     # Reusable components
│   │   ├── NavigationButton/
│   │   ├── PhotoCard/
│   │   └── FavoritesSection/
│   ├── pages/         # Page components
│   │   ├── Dashboard/
│   │   └── List/
│   ├── store/         # Redux store configuration
│   ├── hooks/         # Custom hooks
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
  name: "app1",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App.tsx",
  },
  shared: {
    react: { singleton: true, eager: true },
    "react-dom": { singleton: true, eager: true },
    "react-router-dom": { singleton: true, eager: true },
    "react-redux": { singleton: true, eager: true },
    "@reduxjs/toolkit": { singleton: true, eager: true },
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
- Redux Toolkit
- React Redux
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

3. Access the application at http://localhost:3001

## Features in Detail

### Dashboard
- Main landing page
- Navigation to List view
- Favorites section

### List View
- Infinite scroll implementation
- Photo gallery
- Add to favorites functionality
- Back to dashboard navigation

### State Management
- Redux store for favorites
- Persistent state across views
- Optimized performance

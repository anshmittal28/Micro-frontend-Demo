# Main Application (Host)

This is the host application that integrates and manages the micro-frontends (App1 and App2).

## Overview

- Port: 3000
- Role: Host application
- Purpose: Integrates and manages micro-frontends

## Features

- Module Federation host configuration
- Shared components (Header, Footer, SideMenu)
- Integration of remote applications
- Centralized navigation
- Shared layout and styling

## Project Structure

```
main-app/
├── src/
│   ├── components/     # Shared components
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── SideMenu/
│   ├── styles/        # Global styles
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
  name: "host",
  remotes: {
    app1: "app1@http://localhost:3001/remoteEntry.js",
    app2: "app2@http://localhost:3002/remoteEntry.js",
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

3. Access the application at http://localhost:3000

## Integration with Micro-frontends

The main application integrates two micro-frontends:
- App1 (port 3001): Dashboard and List views
- App2 (port 3002): Simple placeholder application

Both applications are loaded dynamically using Module Federation and can be accessed through the side menu navigation.

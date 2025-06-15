# Micro-Frontend Demo

This is a demonstration of a micro-frontend architecture using Module Federation with Webpack 5. The project consists of a main application (host) and a remote application (app1).

## Project Structure

```
micro-frontend-demo/
├── main-app/          # Host application (port 3000)
├── app1/             # Remote application (port 3001)
├── package.json      # Root package.json for managing all applications
└── README.md         # This file
```

## Technologies Used

- React 18
- TypeScript
- Webpack 5 with Module Federation
- React Router DOM
- Redux Toolkit
- SCSS for styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Install dependencies for all applications:
```bash
npm run install:all
```

This will install dependencies for:
- Root project
- Main application
- App1

### Running the Applications

To start both applications simultaneously:

```bash
npm start
```

This will start:
- Main application on http://localhost:3000
- App1 on http://localhost:3001

### Available Scripts

- `npm start` - Starts both applications concurrently
- `npm run install:all` - Installs dependencies for all applications
- `npm run build` - Builds all applications
- `npm run build:main` - Builds only the main application
- `npm run build:app1` - Builds only app1

## Application Details

### Main Application (Host)

- Port: 3000
- Entry point: `main-app/src/index.ts`
- Features:
  - Module Federation host configuration
  - Shared components (Header, Footer, SideMenu)
  - Integration of remote applications

### App1 (Remote)

- Port: 3001
- Entry point: `app1/src/index.ts`
- Features:
  - Module Federation remote configuration
  - Dashboard and List views
  - Redux state management
  - Infinite scroll implementation

## Module Federation Configuration

The project uses Webpack 5's Module Federation to share code between applications. Key configurations:

### Main App (Host)
```javascript
new ModuleFederationPlugin({
  name: "host",
  remotes: {
    app1: "app1@http://localhost:3001/remoteEntry.js",
  },
  shared: {
    react: { singleton: true, eager: true },
    "react-dom": { singleton: true, eager: true },
    "react-router-dom": { singleton: true, eager: true },
    // ... other shared dependencies
  },
})
```

### App1 (Remote)
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
    // ... other shared dependencies
  },
})
```

## Development

### Adding New Features

1. For the main application:
   - Add new components in `main-app/src/components`
   - Update routes in `main-app/src/App.tsx`

2. For App1:
   - Add new components in `app1/src/components`
   - Add new pages in `app1/src/pages`
   - Update routes in `app1/src/App.tsx`

### Best Practices

1. Keep shared dependencies in sync between applications
2. Use TypeScript for better type safety
3. Follow the established project structure
4. Use SCSS modules for component-specific styling

## Troubleshooting

If you encounter issues:

1. Clear node_modules and reinstall:
```bash
rm -rf node_modules
npm run install:all
```

2. Check if both applications are running on correct ports
3. Ensure all shared dependencies are properly configured in webpack.config.js
4. Check browser console for any Module Federation related errors

## License

This project is licensed under the MIT License.

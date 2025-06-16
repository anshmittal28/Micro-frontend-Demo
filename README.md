# Micro-Frontend Demo

A demonstration of a micro-frontend architecture using Module Federation with Webpack 5.

## Project Overview

This project demonstrates a micro-frontend architecture with three applications:
- Main App (Host) - Port 3000
- App1 (Remote) - Port 3001
- App2 (Remote) - Port 3002

## Architecture

```
micro-frontend-demo/
├── main-app/          # Host application
├── app1/             # Remote application 1
└── app2/             # Remote application 2
```

### Main App (Host)
- Serves as the container application
- Manages routing and navigation
- Integrates remote applications
- Provides shared components and utilities

### App1 (Remote)
- Provides dashboard and list functionality
- Implements infinite scroll
- Manages photo gallery
- Handles favorites functionality

### App2 (Remote)
- Extends main application functionality
- Independent deployment capability
- Shared component integration

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd micro-frontend-demo
```

2. Install dependencies for all applications:
```bash
npm install
cd main-app && npm install
cd ../app1 && npm install
cd ../app2 && npm install
```

3. Start all applications:
```bash
# From root directory
npm start
```

This will start:
- Main App on http://localhost:3000
- App1 on http://localhost:3001
- App2 on http://localhost:3002

## Development

Each application can be developed independently:

### Main App
```bash
cd main-app
npm start
```

### App1
```bash
cd app1
npm start
```

### App2
```bash
cd app2
npm start
```

## Technology Stack

- React 18
- TypeScript
- Webpack 5
- Module Federation
- React Router DOM
- Redux Toolkit (App1)
- SCSS

## Key Features

- Independent deployment of micro-frontends
- Shared component library
- Consistent routing across applications
- State management integration
- TypeScript support throughout
- Modern development tooling

## Project Structure

Each application follows a similar structure:
```
app/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── App.tsx        # Main application component
│   ├── index.ts       # Entry point
│   └── bootstrap.tsx  # Bootstrap file
├── public/            # Static files
├── webpack.config.js  # Webpack configuration
└── package.json       # Dependencies and scripts
```

## Module Federation

The project uses Webpack 5's Module Federation to:
- Share components between applications
- Enable independent deployment
- Maintain consistent routing
- Share common dependencies

## Available Scripts

From the root directory:
- `npm start` - Starts all applications
- `npm run build` - Builds all applications
- `npm run serve` - Serves all production builds

## Contributing

1. Follow the established project structure
2. Maintain TypeScript best practices
3. Keep components isolated and reusable
4. Update documentation as needed
5. Follow the development guidelines in each application's README

## License

[Your License Here]

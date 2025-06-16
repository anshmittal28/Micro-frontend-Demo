# Micro-Frontend Demo

This project demonstrates a micro-frontend architecture using Module Federation with Webpack 5. The application consists of a main container application and two micro-frontends (App1 and App2).

## Project Structure

```
micro-frontend-demo/
├── main-app/          # Container application (port 3000)
├── app1/             # First micro-frontend (port 3001)
└── app2/             # Second micro-frontend (port 3002)
```

## Getting Started

1. Install dependencies for all applications:
```bash
npm install
cd app1 && npm install
cd ../app2 && npm install
cd ..
```

2. Start all applications:
```bash
npm start
```

This will start:
- Main app on http://localhost:3000
- App1 on http://localhost:3001
- App2 on http://localhost:3002

## Testing

### App1 Tests
App1 includes comprehensive test coverage for its components and features:

1. Dashboard Tests:
   - Navigation functionality
   - Favorites section rendering
   - Component integration

2. List Tests:
   - Data fetching and rendering
   - Empty state handling
   - Error state handling
   - Navigation between views

3. Navigation Tests:
   - Link functionality
   - Route handling
   - Component rendering

To run App1 tests:
```bash
cd app1
npm test
```

### App2 Tests
App2 includes tests for its core functionality:

1. Home Page Tests:
   - Component rendering
   - Navigation functionality
   - State management

2. Navigation Tests:
   - Link functionality
   - Route handling
   - Component rendering

To run App2 tests:
```bash
cd app2
npm test
```

## Available Scripts

In the root directory:

- `npm start` - Starts all applications concurrently
- `npm run start:main` - Starts only the main application
- `npm run start:app1` - Starts only App1
- `npm run start:app2` - Starts only App2

## Technology Stack

- React 18
- TypeScript
- Webpack 5 with Module Federation
- React Router v7
- Jest & React Testing Library for testing
- SASS for styling

## Module Federation Configuration

The project uses Webpack 5's Module Federation to share components and functionality between applications:

- Main App exposes:
  - Shared components
  - Common utilities
  - Global state management

- App1 exposes:
  - Dashboard component
  - List component
  - Navigation components

- App2 exposes:
  - Home component
  - Navigation components
  - Feature components

## Development

1. Each application can be developed independently
2. Changes in shared components will be reflected across all applications
3. Hot Module Replacement (HMR) is enabled for all applications
4. TypeScript is configured for type safety across all applications

## Testing Strategy

The project follows a comprehensive testing strategy:

1. Unit Tests:
   - Component rendering
   - State management
   - Utility functions

2. Integration Tests:
   - Component interactions
   - Navigation flows
   - Data fetching

3. Test Coverage:
   - App1: Comprehensive coverage of all components
   - App2: Core functionality coverage
   - Main App: Focus on integration and routing

## Contributing

1. Create a feature branch
2. Make your changes
3. Add tests for new functionality
4. Submit a pull request


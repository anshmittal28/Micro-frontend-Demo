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

## Testing

The application uses Jest and React Testing Library for comprehensive testing.

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure

```
src/
├── __tests__/           # Test files
│   ├── components/      # Component tests
│   │   ├── NavigationButton/
│   │   ├── PhotoCard/
│   │   └── FavoritesSection/
│   └── pages/          # Page component tests
│       ├── Dashboard/
│       └── List/
└── setupTests.ts       # Test setup configuration
```

### Test Configuration

- Jest is configured to handle TypeScript, SCSS modules, and React components
- React Testing Library is used for component testing
- Redux store is mocked for component testing
- Router context is provided for navigation testing

### Writing Tests

Example test structure with Redux and Router:

```typescript
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

const createMockStore = () => {
  return configureStore({
    reducer: {
      favorites: favoritesReducer
    }
  });
};

const renderWithProviders = (component: React.ReactElement) => {
  const store = createMockStore();
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );
};

describe('Component', () => {
  it('renders correctly', () => {
    renderWithProviders(<Component />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### Test Coverage

The test suite includes:
- Component rendering tests
- Redux state management tests
- Navigation and routing tests
- User interaction tests
- API integration tests

To generate a coverage report:
```bash
npm run test:coverage
```

This will show:
- Statement coverage
- Branch coverage
- Function coverage
- Line coverage

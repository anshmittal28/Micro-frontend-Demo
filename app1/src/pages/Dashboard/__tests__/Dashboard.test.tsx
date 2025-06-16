import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Dashboard from '../Dashboard';
import favoritesReducer from '../../../store/favoritesSlice';

const createMockStore = () => {
  return configureStore({
    reducer: {
      favorites: favoritesReducer,
    },
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

describe('Dashboard Component', () => {
  it('renders dashboard title', () => {
    renderWithProviders(<Dashboard />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders navigation link to list', () => {
    renderWithProviders(<Dashboard />);
    const listLink = screen.getByText('Go to List');
    expect(listLink).toBeInTheDocument();
    expect(listLink).toHaveAttribute('href', '/app1/list');
  });

  it('renders favorites section', () => {
    renderWithProviders(<Dashboard />);
    expect(screen.getByTestId('favorites-section')).toBeInTheDocument();
  });
}); 
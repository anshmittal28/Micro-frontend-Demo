import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import List from '../List';
import favoritesReducer from '../../../store/favoritesSlice';

// Mock the fetch function
const mockPhotos = [
  {
    id: 1,
    title: 'Test Photo',
    thumbnailUrl: 'test-thumbnail.jpg',
    url: 'test-photo.jpg',
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockPhotos),
  })
) as jest.Mock;

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

describe('List Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders list title', () => {
    renderWithProviders(<List />);
    expect(screen.getByText('Photo List')).toBeInTheDocument();
  });

  it('renders back to dashboard button', () => {
    renderWithProviders(<List />);
    const backButton = screen.getByText('Back to Dashboard');
    expect(backButton).toBeInTheDocument();
    expect(backButton.closest('a')).toHaveAttribute('href', '/app1');
  });

  it('fetches and displays photos', async () => {
    renderWithProviders(<List />);
    
    // Initially shows loading
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    
    // Wait for photos to load
    await waitFor(() => {
      expect(screen.getByText('Test Photo')).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&_limit=10'
    );
  });

  it('shows no more photos message when no more data', async () => {
    // Mock empty response
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    renderWithProviders(<List />);
    
    await waitFor(() => {
      expect(screen.getByText('No more photos to load')).toBeInTheDocument();
    });
  });
}); 
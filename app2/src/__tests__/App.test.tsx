import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('App2 Component', () => {
  it('renders App2 content', () => {
    renderWithRouter(<App />);
    expect(screen.getByText('This is app2')).toBeInTheDocument();
  });
}); 
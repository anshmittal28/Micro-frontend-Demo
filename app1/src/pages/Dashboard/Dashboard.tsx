import React from 'react';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import FavoritesSection from '../../components/FavoritesSection/FavoritesSection';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <NavigationButton to="/app1/list" label="Go to List" />
      <div data-testid="favorites-section">
        <FavoritesSection />
      </div>
    </div>
  );
};

export default Dashboard; 
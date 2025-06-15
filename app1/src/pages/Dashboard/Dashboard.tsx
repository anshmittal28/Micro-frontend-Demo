import React from 'react';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import FavoritesSection from '../../components/FavoritesSection/FavoritesSection';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <NavigationButton to="/list" label="Go to List" />
      <FavoritesSection />
    </div>
  );
};

export default Dashboard; 
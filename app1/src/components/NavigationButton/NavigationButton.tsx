import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationButton.scss';

interface NavigationButtonProps {
  to: string;
  label: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ to, label }) => {
  return (
    <Link to={to} className="navigation-button">
      {label}
    </Link>
  );
};

export default NavigationButton;
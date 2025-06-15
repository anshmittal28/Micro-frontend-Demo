import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigationButton.scss';

interface NavigationButtonProps {
  to: string;
  label: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ to, label }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)} className="navigation-button">
      {label}
    </button>
  );
};

export default NavigationButton; 
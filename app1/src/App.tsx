import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Dashboard from './pages/Dashboard/Dashboard';
import List from './pages/List/List';
import './App.scss';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;

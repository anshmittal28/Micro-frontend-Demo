import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SideMenu from './components/SideMenu/SideMenu';
import './App.scss';

const App1 = lazy(() => import('app1/App').catch(() => {
  console.error('Error loading App1');
  return { default: () => <div>Error loading App1</div> };
}));

const App2 = lazy(() => import('app2/App').catch(() => {
  console.error('Error loading App2');
  return { default: () => <div>Error loading App2</div> };
}));

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <SideMenu />
          <div className="content">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/app1/*" element={<App1 />} />
                <Route path="/app2/*" element={<App2 />} />
                <Route path="/" element={<App1 />} />
              </Routes>
            </Suspense>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
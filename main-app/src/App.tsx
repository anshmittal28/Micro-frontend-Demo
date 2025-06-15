import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SideMenu from './components/SideMenu/SideMenu';
import './App.scss';

// Lazy load the micro-frontends
// const PhotoGallery = React.lazy(() => import('photo-gallery/App'));
// const Placeholder = React.lazy(() => import('placeholder/App'));

const App1 = lazy(() => import('app1/App').catch(() => {
  console.error('Error loading App1');
  return { default: () => <div>Error loading App1</div> };
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
                <Route path="/*" element={<App1 />} />
                <Route path="/app2" element={<div>This is app2</div>} />
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
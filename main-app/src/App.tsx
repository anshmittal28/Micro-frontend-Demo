import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SideMenu from './components/SideMenu/SideMenu';
import './App.scss';

// Lazy load the micro-frontends
// const PhotoGallery = React.lazy(() => import('photo-gallery/App'));
// const Placeholder = React.lazy(() => import('placeholder/App'));
const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <SideMenu />
          <main className="content">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {/* <Route path="/" element={<PhotoGallery />} />
                <Route path="/placeholder" element={<Placeholder />} /> */}
              </Routes>
            </Suspense>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
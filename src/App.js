import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Gameplay from './components/Gameplay/Gameplay';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
        <div className="gameplay">
          <Gameplay />
        </div>
      <Footer />
    </div>
  );
}

export default App;

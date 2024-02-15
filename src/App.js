import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Fieldgoal from './components/Fieldgoal/Fieldgoal';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
        <div className="gameplay">
          <Fieldgoal />
        </div>
      <Footer />
    </div>
  );
}

export default App;

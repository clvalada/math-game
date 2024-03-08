import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Simple from './components/Simple/Simple';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Simple />
      <Footer />
    </div>
  );
}

export default App;

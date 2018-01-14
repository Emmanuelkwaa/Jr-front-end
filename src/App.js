import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import './owlcarousel/owl.carousel.css';
import './owlcarousel/owl.carousel.min.css';
import './owlcarousel/owl.theme.default.css';

const App = () => (
  <div className="App">
      <Navbar />
      <Main />
      <Footer />
  </div>
);

export default App;

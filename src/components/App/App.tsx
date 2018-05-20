import * as React from 'react';
import { hot } from 'react-hot-loader';
import ImageList from '../ImageList';
import Header from '../Header';
import Footer from '../Footer';
import './App.scss';

const App = () => {
  const images: string[] = [];
  return (
    <div className="app">
      <Header />
      <ImageList images={images} />
      <Footer />
    </div>
  );
};

export default hot(module)(App);

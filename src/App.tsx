import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header/>
      <div>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default App;

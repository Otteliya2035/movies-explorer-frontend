import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../../index.css';
import Header from '../../components/Header/Header';
import Footer from '../Footer/Footer';
import NoResults from '../NoResults/NoResults';
import React, { useState } from 'react';
import '../App/App.css';
import {routes} from "../../contstrains/routes";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
      <div className="page">
      <Header isLoggedIn={isLoggedIn}/>
        <Routes>
          {routes.map(item => <Route key={item.path} path={item.path} element={item.component} /> )}
          <Route path="*" element={<NoResults/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import '../../index.css';
import Header from '../../components/Header/Header';
import Footer from '../Footer/Footer';
import React from 'react';
import '../App/App.css';
import {UserProvider} from "../../contexts/user";
import RouterComponent from "./RoutesComponent/RouterComponent";


function App() {
  return (
    <Router>
        <div className="page">
          <UserProvider>
            <Header />
              <RouterComponent />
            <Footer />
          </UserProvider>
        </div>
    </Router>
  );
}

export default App;

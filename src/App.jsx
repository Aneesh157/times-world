import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { lazy } from 'react';

import './App.css';
const Home = lazy(() => import('./Modules/Home/components/Home'));
const Login = lazy(() => import('./Modules/Login/components/Login'));

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Narbar';
import './index.css';
import Aleatory from './pages/Aleatory/Aleatory';
import App from './pages/App';
import UserList from './pages/User/UserList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<App />} />
        <Route path='user-list' element={<UserList />} />
        <Route path='aleatory' element={<Aleatory />} />
      </Route>
    </Routes>
  </HashRouter>
);
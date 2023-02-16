import React from 'react';
import "./App.css";
import "./login.css";
import MainHeader from "./Component/MainHeader";
import Login from './Component/Login';

function App() {
  return (
    <div className = "App">
      <MainHeader />
      <Login />
    </div>
  );
}

export default App;
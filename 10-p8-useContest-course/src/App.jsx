import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login"
import Profile from "./components/Profile"
import { UserProvider } from './Context/UserContext'; // Updated import for UserProvider

function App() {
  return (
 
      <UserProvider>  
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </UserProvider>
  
  );
}

export default App;

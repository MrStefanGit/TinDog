import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import Landing from "./Landing"
import Matching from './Matching';
import Chat from "./Chat"
import Profile from './Profile';
import UpdateProfile from './UpdateProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/matching" element={<Matching />} />
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from "./Header";
import Cards from "./Cards"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Cards />
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      
    </div>
  );
}

function Chat() {
  return (
    <div className="chat">
      <h1>This is Chat!</h1>
    </div>
  );
}

function Profile() {
  return (
    <div className="profile">
      <h1>This is Profile!</h1>
    </div>
  );
}

export default App;

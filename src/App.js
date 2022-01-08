import React from 'react';
import './App.css';
import Header from "./Header";
import Cards from "./Cards";
import Signup from "./Signup";
import home from "./Home"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Cards />
    </div>
  );
}

function Home() {
  return <Home />;
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

function Signup() {
  return (
    <Container className='d-flex align-items-center' style={{minHeight: "100vh"}}>
<div className='w-100' style={{maxWidth: '400px'}}>
<Signup />
</div>
  </Container>
    )
}

export default App;

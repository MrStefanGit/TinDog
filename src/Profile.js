import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth, logout } from "./firebase";
import database from "./firebase";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./Header.css";
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import PetsIcon from '@mui/icons-material/Pets';
import "./Profile.css";

function Profile() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
          const query = await database
            .collection("users")
            .where("uid", "==", user?.uid)
            .get();
          const data = await query.docs[0].data();
          console.log(data);
          setName(data.name);
          setAge(data.age);
          setBreed(data.breed);
        } catch (err) {
          console.error(err);
          alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login", { replace: true });
    
        fetchUserName();
    }, [user, loading]);

    return (
        <div className="Profile">
            <div className="header">
              <IconButton disabled={true}>
                <AccountCircleOutlinedIcon fontSize="large" className="header__icon" />
              </IconButton>  
              <IconButton href="/matching">
                <PetsIcon fontSize="large" className="header__logo" />
              </IconButton>
              <IconButton href="/Chat">
                <ChatIcon fontSize="large" className="header__icon" />
              </IconButton>
            </div>
            <center>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      className="card-img-top"
                      src='https://images.squarespace-cdn.com/content/v1/5c4b082589c17260ae0ce08f/1567241592550-S9YMTCCN1MVGBDVUHFEV/animal-cute-dog-61372.jpg'
                    />
                  </div>
                  <h5 className="card-title">
                  Hello, my name is <b>{name}</b>!
                  </h5>
                  <p className="card-text">
                    <b>Breed:</b> {breed}
                    <br />
                    <span className="phone"><b>Age:</b> {age}</span>
                  </p>
                  <p className="card-text"> 
                    <br />
                    <b>Bio:</b><br />
                    I am a very cute dog and i want to make some friends on this website. Maybe my owner can find someone special too.... 
                  </p>
                </div>
              </div>
            </center>
            
            
            <button className="dashboard__btn" onClick={logout}>Logout</button>
        </div>
    )
}

export default Profile

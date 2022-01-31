import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth, logout } from "./firebase";
import database from "./firebase";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import PetsIcon from '@mui/icons-material/Pets';
import "./UpdateProfile.css";
import { doc, updateDoc, update } from "firebase/firestore";

function UpdateProfile() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState("");

    const update = async () => {
      try {
        const usr = database.collection('users').doc('sgzsa0NRqKqdCFLOAWGw')
        const kkt = usr.get()
        return kkt.update({
          breed: breed,
          age: age,
          name: name,
        })
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    }

    const fetchUserName = async () => {
        try {
          const query = await database
            .collection("users")
            .where("uid", "==", user?.uid)
            .get();
          const data = await query.docs[0].data();
          console.log(data)
          setName(data.name);
          setAge(data.age)
          setBreed(data.breed)
          console.log(name)
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
        <div class="updateProfile">
          <div className='header'>
            <IconButton href='/profile'>
              <AccountCircleIcon fontSize="large" className="header__icon" />
            </IconButton>  
            <IconButton href="/matching">
              <PetsIcon fontSize="large" className="header__logo" />
            </IconButton>
            <IconButton href="/Chat">
              <ChatIcon fontSize="large" className="header__icon" />
            </IconButton>
          </div>
          <div className="register">
          <div className="register__container">
                <label className='textlabel'>Name:</label>
                <input
                    type="text"
                    className="register__textBox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={name}
                />
                <label className='textlabel'>Breed:</label>
                <input
                    type="text"
                    className="register__textBox"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    placeholder={breed}
                />
                <label className='textlabel'>Age:</label>
                <input
                    type="text"
                    className="register__textBox"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder={age}
                />
                <button className="register__btn" onClick={update}>
                Update Profile
                </button>
            </div>
          </div>
          
        </div>
    );
}

export default UpdateProfile;
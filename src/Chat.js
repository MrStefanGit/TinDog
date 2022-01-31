import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth, logout } from "./firebase";
import database from "./firebase";
import Header from "./Header";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Header.css";
import IconButton from '@mui/material/IconButton';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PetsIcon from '@mui/icons-material/Pets';


function Chat() {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
          const query = await database
            .collection("users")
            .where("uid", "==", user?.uid)
            .get();
          const data = await query.docs[0].data();
          console.log(data)
          setName(data.name);
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
        <div className="Chat">
            <div className="header">
              <IconButton href='/profile'>
                <AccountCircleIcon fontSize="large" className="header__icon" />
              </IconButton>  
              <IconButton href="/matching">
                <PetsIcon fontSize="large" className="header__logo" />
              </IconButton>
              <IconButton disabled={true} href="/Chat">
                <ChatOutlinedIcon fontSize="large" className="header__icon" />
              </IconButton>
            </div>
            <h1>This is Chat!</h1>
        </div>
    )
}

export default Chat

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth, logout } from "./firebase";
import database from "./firebase";
import "./App.css"
import Header from "./Header";

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
            <Header />
            <h1>This is Chat!</h1>
        </div>
    )
}

export default Chat

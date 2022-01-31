import React from "react";
import "./Header.css";
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import PetsIcon from '@mui/icons-material/Pets';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    return (
        <div className="header">
            <IconButton href="/profile">
                <AccountCircleIcon fontSize="large" className="header__icon" />
            </IconButton>
            <IconButton href="/matching">
                <PetsIcon fontSize="large" className="header__logo" />
            </IconButton>
            <IconButton href="/Chat">
                <ChatIcon fontSize="large" className="header__icon" />
            </IconButton>

        </div>
    );
}

export default Header;
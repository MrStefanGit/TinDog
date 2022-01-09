import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from '@material-ui/icons/Forum';
import PetsIcon from '@mui/icons-material/Pets';

function Header() {
    return (
        <div className="header">
            <IconButton href="/profile">
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <IconButton href="/matching">
                <PetsIcon fontSize="large" className="header__logo" />
            </IconButton>
            <IconButton href="/Chat">
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>

        </div>
    );
}

export default Header;
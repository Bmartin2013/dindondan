import React from 'react';
import { AppBar, Typography, Toolbar, IconButton, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default ({ appName }) => {

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                    {appName}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
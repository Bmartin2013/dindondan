import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

export default ({ appName }) => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" >
                    {appName}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
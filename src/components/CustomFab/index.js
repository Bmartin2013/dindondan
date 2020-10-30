import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styles from './styles';


export default ( {openFormDialog}) => {
    const classes = styles();

    return (
            <Fab color="secondary"
                className={classes.fab} 
                aria-label="add"
                onClick={openFormDialog}>
                <AddIcon />
            </Fab>
    )
}
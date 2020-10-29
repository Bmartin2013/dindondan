import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core';
import styles from './styles';

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);
    const classes = styles();

    return (
        <Button variant="outlined" className={classes.button}
            onClick={toggle}>{playing ? "Pause" : "Play"}</Button>
    );
};

export default Player;
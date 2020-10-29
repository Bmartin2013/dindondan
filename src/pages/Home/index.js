import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import Player from '../../components/Player';

export default () => {



	return (
		<Container>
			<Player url="https://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg"></Player>
		</Container>
	)
}
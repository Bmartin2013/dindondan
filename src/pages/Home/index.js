import React, { useEffect, useState } from 'react';
import { Button, Container } from '@material-ui/core';

import FormikForm from '../../components/FormikForm';
import Player from '../../components/Player';

export default () => {

	const [buttons, setButtons] = useState([]);

	const initialValues = {
		name: "",
		soundUrl: ""
	};

	const fieldValues = [{
		name: "name",
		id: "name",
		label:"Button Name"
	},{
		name: "soundUrl",
		id: "soundUrl",
		label:"Sound URL"
	}];

	useEffect(() => {
		if (buttons) {
			console.log("CURRENT BUTTONS", buttons);
		}

	}, [buttons])

	const onSubmit = (values) => {
		setButtons([...buttons, { ...values }]);
	}

	return (
		<Container>
			{buttons.map((button,index) => <Player 
			key={index}
			name={button.name} 
			url={button.soundUrl}></Player>)}
			<FormikForm fieldValues={fieldValues}
						initialValues={initialValues} 
						onSubmit={onSubmit}>
			</FormikForm>
		</Container>
	)
}
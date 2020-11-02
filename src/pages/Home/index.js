import React, { useEffect, useState, useCallback } from 'react';
import { Button, Container } from '@material-ui/core';

import FormikForm from '../../components/FormikForm';
import Player from '../../components/Player';

export default () => {

	const [buttons, setButtons] = useState([]);
	const mockButton = [{ name: "Alarm button", soundUrl: 'https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg' }];


	const initialValues = {
		name: "",
		soundUrl: ""
	};

	const fieldValues = [{
		name: "name",
		id: "name",
		label: "Button Name"
	}, {
		name: "soundUrl",
		id: "soundUrl",
		label: "Sound URL"
	}];

	const saveButton = () => {
		console.log("CURRENT BUTTONS", buttons);
		localStorage.setItem(`buttons`, JSON.stringify(buttons));
		console.log(localStorage);
	}

	const loadButtons = useCallback(() => {
		setButtons([...buttons, ...mockButton]);
	}, [buttons]);

	const onSubmit = (values) => {
		setButtons([...buttons, { ...values }]);
		saveButton();
	}

	useEffect(() => {
		buttons.length < 1 && loadButtons();
	}, [])

	return (
		<Container>
			{buttons.map((button, index) => <Player
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
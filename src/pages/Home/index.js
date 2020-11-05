import React, { useEffect, useState, useCallback } from 'react';
import { Button, Container } from '@material-ui/core';

import FormikForm from '../../components/FormikForm';
import Player from '../../components/Player';

export default () => {
	const [buttons, setButtons] = useState([]);
	const savedButtons = JSON.parse(localStorage.getItem(`buttons`));

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
		localStorage.setItem(`buttons`, JSON.stringify(buttons));
	}

	const loadButtons = useCallback(() => {
		savedButtons && setButtons([...buttons, ...savedButtons]);
	}, [buttons]);

	const onSubmit = (values, {resetForm}) => {
		setButtons([...buttons, { ...values }]);
		resetForm({values:''})
	}

	useEffect(() => {
		buttons.length < 1 && loadButtons();
	}, [])

	useEffect(() => saveButton(), [buttons])

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
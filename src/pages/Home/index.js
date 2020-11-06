import React, { useEffect, useState, useCallback } from 'react';
import { Container } from '@material-ui/core';
import * as Yup from 'yup';

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

	const validationSchema= Yup.object().shape({
                    
        name: Yup.string()
            .required('Please enter a button name'),
		soundUrl: Yup.string()
			.matches(/([a-zA-Z0-9\s_\\.\-\(\):])+(.wav|.ogg|.mp3)$/, {
				message:'select a sound URL with .mp3, .ogg or .wav extension',
				excludeEmptyString: true
			})
            .required('Please enter a valid sound URL')
    });

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
				url={button.soundUrl}>
			</Player>)}

			<FormikForm 
				fieldValues={fieldValues}
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}>
			</FormikForm>
		</Container>
	)
}
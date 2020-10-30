import React, { useState } from 'react';
import { Container} from '@material-ui/core';
import Player from '../../components/Player';
import FormikForm from '../../components/FormikForm';

export default () => {

	const initialValues = {
		name: "",
		songurl: ""
	};

	const onSubmit = (values) => {
		// Do stuff here...
		console.log(values);
		alert(JSON.stringify(values, null, 2));
	}

	return (
		<Container>
			<Player url="https://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg"></Player>
			<FormikForm initialValues={initialValues} onSubmit={onSubmit}></FormikForm>
		</Container>
	)
}
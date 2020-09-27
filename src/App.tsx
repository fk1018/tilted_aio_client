import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import { LOAD_INITIAL_DATA } from 'tilted_aio_shared';
import { loadInitialData } from './actions';
import { Store } from './Store';

export default function App(props: any): JSX.Element {
	const { state, dispatch } = React.useContext(Store);
	useEffect(() => {
		console.log('Only Once');
		ipcRenderer.once(LOAD_INITIAL_DATA, (event, message) => {
			const initialData = JSON.parse(message);
			loadInitialData(dispatch, state, initialData);
		});
	}, []);
	return (
		<React.Fragment>
			<Router>
			</Router>
		</React.Fragment>
	);
}

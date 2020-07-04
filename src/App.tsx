import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccountPage from './pages/AccountPage';
import AddressPage from './pages/AddressPage';
import BrowserPage from './pages/BrowserPage';
import CreditCardPage from './pages/CreditCardPage';
import ProfilePage from './pages/ProfilePage';
import ProxiePage from './pages/ProxyPage';
import TaskPage from './pages/TaskPage';
import NavBar from './components/NavBar';
import { Container, Grid } from 'semantic-ui-react';
import { ipcRenderer } from 'electron';
import { LOAD_INITIAL_DATA } from '../../tilted_aio_shared/strings';
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
				<Grid>
					<Grid.Row>
						<NavBar />
					</Grid.Row>
					<Grid.Row>
						<Switch>
							<Route path="/creditcards">
								<Container>
									<CreditCardPage />
								</Container>
							</Route>
							<Route path="/accounts">
								<Container>
									<AccountPage />
								</Container>
							</Route>
							<Route path="/addresses">
								<Container>
									<AddressPage />
								</Container>
							</Route>
							<Route path="/profiles">
								<Container>
									<ProfilePage />
								</Container>
							</Route>
							<Route path="/proxies">
								<Container>
									<ProxiePage />
								</Container>
							</Route>
							<Route path="/browsers">
								<Container>
									<BrowserPage />
								</Container>
							</Route>
							<Route path="/">
								<Container>
									<TaskPage />
								</Container>
							</Route>
						</Switch>
					</Grid.Row>
				</Grid>
			</Router>
		</React.Fragment>
	);
}

import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Store } from '../Store';
import { updateNavigationActiveIndex } from '../actions';
import { Link } from 'react-router-dom';

export default function NavBar(props: any): JSX.Element {
	const { state, dispatch } = React.useContext(Store);
	const { activeIndex } = state.navigation;
	return (
		<React.Fragment>
			<Menu size={'tiny'} fluid pointing defaultActiveIndex={0} inverted>
				<Link
					className={`${activeIndex === 0 ? 'active' : ''} item`}
					to="/"
					onClick={() => {
						updateNavigationActiveIndex(dispatch, state, 0);
					}}
				>
					Tasks
				</Link>
				<Link
					className={`${activeIndex === 1 ? 'active' : ''} item`}
					to="/browsers"
					onClick={() => {
						updateNavigationActiveIndex(dispatch, state, 1);
					}}
				>
					Browsers
				</Link>
				<Link
					className={`${activeIndex === 2 ? 'active' : ''} item`}
					to="/proxies"
					onClick={() => {
						updateNavigationActiveIndex(dispatch, state, 2);
					}}
				>
					Proxies
				</Link>
				<Link
					className={`${activeIndex === 3 ? 'active' : ''} item`}
					to="/profiles"
					onClick={() => {
						updateNavigationActiveIndex(dispatch, state, 3);
					}}
				>
					Profiles
				</Link>
				<Link
					className={`${activeIndex === 4 ? 'active' : ''} item`}
					to="/addresses"
					onClick={() => {
						updateNavigationActiveIndex(dispatch, state, 4);
					}}
				>
					Addresses
				</Link>
				<Link
					className={`${activeIndex === 5 ? 'active' : ''} item`}
					to="/accounts"
					onClick={() => {
						updateNavigationActiveIndex(dispatch, state, 5);
					}}
				>
					Accounts
				</Link>
				<Link
					className={`${activeIndex === 6 ? 'active' : ''} item`}
					to="/creditcards"
					onClick={() => {
						updateNavigationActiveIndex(dispatch, state, 6);
					}}
				>
					Credit Cards
				</Link>
			</Menu>
		</React.Fragment>
	);
}

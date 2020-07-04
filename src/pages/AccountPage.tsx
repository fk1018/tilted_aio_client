import React from 'react';
import { Store } from '../Store';
import { Grid, Button, Form, Segment, Header, List, Modal } from 'semantic-ui-react';
import { IAccount, ISite } from '../../../tilted_aio_shared/interfaces';
import { submitCreateAccountForm, updateAccountForm } from '../actions';
import RudList from '../components/RudList';

export default function ProfilePage(): JSX.Element {
	const { state, dispatch } = React.useContext(Store);
	const accounts: Array<IAccount> = state.accounts;
	const sites: Array<ISite> = state.sites;
	return (
		<React.Fragment>
			<Segment>
				<Grid divided="vertically">
					<Grid.Row>
						<Header as={'h1'} textAlign={'center'} style={{ width: '100%' }}>
							Accounts
						</Header>
					</Grid.Row>
					<Grid.Row>
						<Modal trigger={<Button>Create Account</Button>} closeIcon>
							<Modal.Header>Create Account</Modal.Header>
							<Modal.Content>
								<Modal.Description>
									<Form
										onSubmit={() => {
											submitCreateAccountForm(dispatch, state, state.accountForm as IAccount);
										}}
									>
										<Form.Group widths="equal">
											<Form.Select
												name="siteId"
												fluid
												label="Site"
												options={sites.map((site: ISite) => {
													return { text: site.name, value: site.id };
												})}
												onChange={(e, { name, value }) =>
													updateAccountForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="userName"
												fluid
												label="User Name"
												placeholder="guapdad@dreamville.com"
												onChange={(e, { name, value }) =>
													updateAccountForm(dispatch, state, { [name]: value })}
											/>
											<Form.Input
												name="password"
												fluid
												label="Password"
												type={'password'}
												placeholder="1uv&1ucky^cH4rmz"
												onChange={(e, { name, value }) =>
													updateAccountForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Button type="submit">Submit</Button>
									</Form>
								</Modal.Description>
							</Modal.Content>
						</Modal>
					</Grid.Row>
					<Grid.Row>{RudList({ items: accounts, itemDisplayKey: 'userName' })}</Grid.Row>
				</Grid>
			</Segment>
		</React.Fragment>
	);
}

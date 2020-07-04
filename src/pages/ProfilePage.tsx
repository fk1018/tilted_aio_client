import React from 'react';
import { Store } from '../Store';
import { Grid, Button, Form, Segment, Header, List, Divider, Modal } from 'semantic-ui-react';
import { IProfile } from '../../../tilted_aio_shared/interfaces';
import { submitCreateProfileForm, updateProfileForm } from '../actions';

export default function ProfilePage(): JSX.Element {
	const { state, dispatch } = React.useContext(Store);
	const profiles: Array<IProfile> = state.profiles;
	return (
		<React.Fragment>
			<Segment>
				<Grid divided="vertically">
					<Grid.Row>
						<Header as={'h1'} textAlign={'center'} style={{ width: '100%' }}>
							Profile
						</Header>
					</Grid.Row>
					<Grid.Row>
						<Modal trigger={<Button>Create Profile</Button>} closeIcon>
							<Modal.Header>Create Profile</Modal.Header>
							<Modal.Content>
								<Modal.Description>
									<Form
										onSubmit={() => {
											submitCreateProfileForm(dispatch, state, state.profileForm as IProfile);
										}}
									>
										<Form.Group widths="equal">
											<Form.Input
												name="profileName"
												fluid
												label="Profile name"
												placeholder="Profile name"
												onChange={(e, { name, value }) =>
													updateProfileForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="firstName"
												fluid
												label="First name"
												placeholder="First name"
												onChange={(e, { name, value }) =>
													updateProfileForm(dispatch, state, { [name]: value })}
											/>
											<Form.Input
												name="lastName"
												fluid
												label="Last name"
												placeholder="Last name"
												onChange={(e, { name, value }) =>
													updateProfileForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="email"
												fluid
												label="Email Address"
												placeholder="Email Address"
												onChange={(e, { name, value }) =>
													updateProfileForm(dispatch, state, { [name]: value })}
											/>
											<Form.Input
												name="phone"
												fluid
												label="Phone Number"
												placeholder="Phone Number"
												onChange={(e, { name, value }) =>
													updateProfileForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="id"
												fluid
												label="id"
												placeholder="123-41-231"
												onChange={(e, { name, value }) =>
													updateProfileForm(dispatch, state, { [name]: value })}
												// style={{ display: 'none' }}
											/>
										</Form.Group>
										<Button type="submit">Submit</Button>
									</Form>
								</Modal.Description>
							</Modal.Content>
						</Modal>
					</Grid.Row>
					<Grid.Row>
						<Header as={'h2'}>Profiles</Header>
						<List>
							{profiles.map((profile) => <List.Item key={profile.id}>{profile.profileName}</List.Item>)}
						</List>
					</Grid.Row>
				</Grid>
			</Segment>
		</React.Fragment>
	);
}

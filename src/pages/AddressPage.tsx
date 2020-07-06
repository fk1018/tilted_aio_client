import React from 'react';
import { Store } from '../Store';
import { Grid, Button, Form, Segment, Header, List, Divider, Modal } from 'semantic-ui-react';
import { IAddress } from 'tilted_aio_shared';
import { submitCreateAddressForm, updateAddressForm } from '../actions';
import RudList from '../components/RudList';

export default function ProfilePage(): JSX.Element {
	const { state, dispatch } = React.useContext(Store);
	const addresses: Array<IAddress> = state.addresses;
	return (
		<React.Fragment>
			<Segment>
				<Grid divided="vertically">
					<Grid.Row>
						<Header as={'h1'} textAlign={'center'} style={{ width: '100%' }}>
							Address
						</Header>
					</Grid.Row>
					<Grid.Row>
						<Modal trigger={<Button>Create Address</Button>} closeIcon>
							<Modal.Header>Create Address</Modal.Header>
							<Modal.Content>
								<Modal.Description>
									<Form
										onSubmit={() => {
											submitCreateAddressForm(dispatch, state, state.addressForm as IAddress);
										}}
									>
										<Form.Group widths="equal">
											<Form.Input
												name="addressName"
												fluid
												label="Address Name"
												placeholder="Trap House 1"
												onChange={(e, { name, value }) =>
													updateAddressForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="address"
												fluid
												label="Address"
												placeholder="123 sesame st"
												onChange={(e, { name, value }) =>
													updateAddressForm(dispatch, state, { [name]: value })}
											/>
											<Form.Input
												name="addressAdditionalInfo"
												fluid
												label="Address2"
												placeholder="Apt 3"
												onChange={(e, { name, value }) =>
													updateAddressForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="city"
												fluid
												label="City"
												placeholder="Charlotte"
												onChange={(e, { name, value }) =>
													updateAddressForm(dispatch, state, { [name]: value })}
											/>
											<Form.Input
												name="state"
												fluid
												label="State"
												placeholder="North Carolina"
												onChange={(e, { name, value }) =>
													updateAddressForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="zip"
												fluid
												label="Zip Code"
												placeholder="28117"
												onChange={(e, { name, value }) =>
													updateAddressForm(dispatch, state, { [name]: value })}
											/>
											<Form.Input
												name="country"
												fluid
												label="Country"
												placeholder="United States of America"
												onChange={(e, { name, value }) =>
													updateAddressForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="16">
											<Form.Input
												name="isPrivacyAddress"
												fluid
												label="Privacy Address?"
												type="checkbox"
												onChange={(e, { name, value }) =>
													updateAddressForm(dispatch, state, { [name]: e.target.checked })}
											/>
										</Form.Group>
										<Form.Group widths="equal" style={{ display: 'none' }}>
											<Form.Input
												name="id"
												fluid
												label="id"
												placeholder="123-41-as-12"
												onChange={(e, { name, value }) =>
													updateAddressForm(dispatch, state, { [name]: value })}
												// style={{ display: 'none' }}
											/>
										</Form.Group>
										<Button type="submit">Submit</Button>
									</Form>
								</Modal.Description>
							</Modal.Content>
						</Modal>
					</Grid.Row>
					<Grid.Row>{RudList({ items: addresses, itemDisplayKey: 'addressName' })}</Grid.Row>
				</Grid>
			</Segment>
		</React.Fragment>
	);
}

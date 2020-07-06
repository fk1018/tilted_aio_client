import React from 'react';
import { Store } from '../Store';
import { Grid, Button, Form, Segment, Header, List, Divider, Modal } from 'semantic-ui-react';
import { ICreditCard } from 'tilted_aio_shared';
import { submitCreditCardForm, updateCreditCardForm } from '../actions';
import RudList from '../components/RudList';

export default function ProfilePage(): JSX.Element {
	const { state, dispatch } = React.useContext(Store);
	const creditCards: Array<ICreditCard> = state.creditCards;
	return (
		<React.Fragment>
			<Segment>
				<Grid divided="vertically">
					<Grid.Row>
						<Header as={'h1'} textAlign={'center'} style={{ width: '100%' }}>
							Credit Cards
						</Header>
					</Grid.Row>
					<Grid.Row>
						<Modal trigger={<Button>Create Credit Card</Button>} closeIcon>
							<Modal.Header>Create Credit Card</Modal.Header>
							<Modal.Content>
								<Modal.Description>
									<Form
										onSubmit={() => {
											submitCreditCardForm(dispatch, state, state.creditCardForm as ICreditCard);
										}}
									>
										<Form.Group widths="equal">
											<Form.Input
												name="name"
												fluid
												label="Card Name"
												placeholder="Privacy Nike 1"
												onChange={(e, { name, value }) =>
													updateCreditCardForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="number"
												fluid
												label="Card Number"
												placeholder="1324 9830 0000 3473"
												onChange={(e, { name, value }) =>
													updateCreditCardForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="nameOnCard"
												fluid
												label="Name On Card"
												placeholder="Dildo Saggins"
												onChange={(e, { name, value }) =>
													updateCreditCardForm(dispatch, state, { [name]: value })}
											/>
											<Form.Input
												name="CVV"
												fluid
												label="CVV"
												placeholder="024"
												onChange={(e, { name, value }) =>
													updateCreditCardForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="expirationMonth"
												fluid
												label="Expiration Month"
												placeholder="02"
												onChange={(e, { name, value }) =>
													updateCreditCardForm(dispatch, state, { [name]: value })}
											/>
											<Form.Input
												name="expirationYear"
												fluid
												label="Expiration Year"
												placeholder="24"
												onChange={(e, { name, value }) =>
													updateCreditCardForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="16">
											<Form.Input
												name="isPrivacyCard"
												fluid
												label="Privacy Card?"
												type="checkbox"
												onChange={(e, { name, value }) =>
													updateCreditCardForm(dispatch, state, { [name]: e.target.checked })}
											/>
										</Form.Group>
										<Button type="submit">Submit</Button>
									</Form>
								</Modal.Description>
							</Modal.Content>
						</Modal>
					</Grid.Row>
					<Grid.Row>{RudList({ items: creditCards, itemDisplayKey: 'name' })}</Grid.Row>
				</Grid>
			</Segment>
		</React.Fragment>
	);
}

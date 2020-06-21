import React from 'react';
import { Store } from '../Store';
import { Grid, Button, Form, Segment, Header, List, Divider, Modal } from 'semantic-ui-react';
import {
	IAccount,
	ISite,
	IProfile,
	ITask,
	ITaskForm,
	ITaskType,
	IAddress,
	ICreditCard,
	IProxyGroup
} from '../interfaces';
import { updateTaskForm, submitTaskForm } from '../actions';
import RudList from '../components/RudList';

export default function TaskPage(): JSX.Element {
	const { state, dispatch } = React.useContext(Store);
	const accounts: Array<IAccount> = state.accounts;
	const addresses: Array<IAddress> = state.addresses;
	const creditCards: Array<ICreditCard> = state.creditCards;
	const profiles: Array<IProfile> = state.profiles;
	const proxyGroups: Array<IProxyGroup> = state.proxyGroups;
	const sites: Array<ISite> = state.sites;
	const tasks: Array<ITask> = state.tasks;
	const taskForm: ITaskForm = state.taskForm;
	const taskTypes: Array<ITaskType> = state.taskTypes;
	return (
		<React.Fragment>
			<Segment>
				<Grid divided="vertically">
					<Grid.Row>
						<Header as={'h1'} textAlign={'center'} style={{ width: '100%' }}>
							Tasks
						</Header>
					</Grid.Row>
					<Grid.Row>
						<Modal trigger={<Button>Create Task</Button>} closeIcon>
							<Modal.Header>Create Task</Modal.Header>
							<Modal.Content>
								<Modal.Description>
									<Form
										onSubmit={() => {
											submitTaskForm(dispatch, state, state.taskForm as ITask);
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
													updateTaskForm(dispatch, state, { [name]: value })}
											/>
											<Form.Select
												name="profileId"
												fluid
												label="Task Profile"
												options={profiles.map((profile) => {
													return { text: profile.profileName, value: profile.id };
												})}
												onChange={(e, { name, value }) =>
													updateTaskForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="name"
												fluid
												label="Task Name"
												onChange={(e, { name, value }) =>
													updateTaskForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="requiresLogin"
												fluid
												label="Task requires account login?"
												type="checkbox"
												onChange={(e, { name, value }) =>
													updateTaskForm(dispatch, state, { [name]: e.target.checked })}
											/>
											<Form.Select
												name="accountId"
												fluid
												label="Account"
												disabled={!taskForm.requiresLogin}
												options={accounts.map((account) => {
													return { text: account.userName, value: account.id };
												})}
												onChange={(e, { name, value }) =>
													updateTaskForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="privacyCardMode"
												fluid
												label="Use PrivacyCard Mode?"
												type="checkbox"
												onChange={(e, { name, value }) =>
													updateTaskForm(dispatch, state, { [name]: e.target.checked })}
											/>
											<Form.Select
												name="taskTypeId"
												fluid
												label="Task Type"
												options={taskTypes.map((taskType) => {
													return { text: taskType.name, value: taskType.id };
												})}
												onChange={(e, { name, value }) =>
													updateTaskForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Select
												name="addressId"
												fluid
												label="Address"
												disabled={taskForm.privacyCardMode}
												options={addresses.map((address: IAddress) => {
													return { text: address.address, value: address.id };
												})}
												onChange={(e, { name, value }) =>
													updateTaskForm(dispatch, state, { [name]: value })}
											/>
											<Form.Select
												name="creditCardId"
												fluid
												label="Credit Card"
												disabled={taskForm.privacyCardMode}
												options={creditCards.map((card: ICreditCard) => {
													return { text: card.name, value: card.id };
												})}
												onChange={(e, { name, value }) =>
													updateTaskForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="useProxyGroup"
												fluid
												label="Use a Proxy Group?"
												type="checkbox"
												onChange={(e, { name, value }) =>
													updateTaskForm(dispatch, state, { [name]: e.target.checked })}
											/>
											<Form.Select
												name="proxyGroupId"
												fluid
												label="Proxy Group"
												disabled={!taskForm.useProxyGroup}
												options={proxyGroups.map((group: IProxyGroup) => {
													return { text: group.proxyGroupName, value: group.id };
												})}
												onChange={(e, { name, value }) =>
													updateTaskForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Button type="submit">Submit</Button>
									</Form>
								</Modal.Description>
							</Modal.Content>
						</Modal>
					</Grid.Row>
					<Grid.Row columns={2}>{RudList({ items: tasks, itemDisplayKey: 'name' })}</Grid.Row>
				</Grid>
			</Segment>
		</React.Fragment>
	);
}

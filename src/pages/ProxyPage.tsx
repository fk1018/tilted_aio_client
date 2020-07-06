import React from 'react';
import { Store } from '../Store';
import { Form, Grid, Segment, Header, Divider, Button, List, Modal, Icon } from 'semantic-ui-react';
import {
	updateProxyGroupForm,
	submitCreateProxyGroupForm,
	submitCreateProxiesForm,
	updateProxiesForm
} from '../actions';
import { IProxyGroup, IProxiesForm, IProxy } from 'tilted_aio_shared';
import RudList from '../components/RudList';
import { deleteProxy } from '../actions/proxy/delete-proxy';
import { deleteProxyGroup } from '../actions/proxy-group/delete-proxy-group';
export default function ProxyPage(): JSX.Element {
	const { state, dispatch } = React.useContext(Store);
	const proxyGroups: Array<IProxyGroup> = state.proxyGroups;
	const proxies: Array<IProxy> = state.proxies;
	const proxiesForm: IProxiesForm = state.proxiesForm;
	console.log('proxyGroups on render are:', proxyGroups);
	return (
		<React.Fragment>
			<Segment>
				<Grid divided={'vertically'}>
					<Grid.Row>
						<Header as={'h1'} textAlign={'center'} style={{ width: '100%' }}>
							Proxy
						</Header>
					</Grid.Row>
					<Grid.Row>
						<Modal trigger={<Button>Create Proxy Group</Button>} closeIcon>
							<Modal.Header>Create Proxy Group</Modal.Header>
							<Modal.Content>
								<Modal.Description>
									<Form
										onSubmit={() => {
											submitCreateProxyGroupForm(dispatch, state, state.proxyGroupForm);
										}}
									>
										<Form.Group widths="equal">
											<Form.Input
												name="proxyGroupName"
												fluid
												label="Proxy Group Name"
												placeholder="US DC N Viginia"
												onChange={(e, { name, value }) =>
													updateProxyGroupForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Button type="submit">Submit</Button>
									</Form>
								</Modal.Description>
							</Modal.Content>
						</Modal>
						<Modal trigger={<Button>Create Proxies</Button>} closeIcon>
							<Modal.Header>Create Proxies</Modal.Header>
							<Modal.Content>
								<Modal.Description>
									<Form
										onSubmit={() => {
											submitCreateProxiesForm(dispatch, state, state.proxiesForm);
										}}
									>
										<Form.Group widths={'equal'}>
											<Form.TextArea
												label="Proxies"
												name="proxies"
												placeholder={`121.42.11.659:32148:5AB2D36!ax2:yujuXjW
				441.43.37.399:34150:5ABas36!3n7u:idlaPwX`}
												onChange={(e, { name, value }) =>
													updateProxiesForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												type="checkbox"
												name="putInProxyGroup"
												fluid
												label="Put In a ProxyGroup?"
												onChange={(e, { name, value }) =>
													updateProxiesForm(dispatch, state, { [name]: e.target.checked })}
											/>
											<Form.Select
												name="proxyGroup"
												fluid
												disabled={!proxiesForm.putInProxyGroup}
												label="Proxy Group"
												options={proxyGroups.map((group: IProxyGroup) => {
													return { text: group.proxyGroupName, value: group.id };
												})}
												onChange={(e, { name, value }) =>
													updateProxiesForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths={'equal'} style={{ display: 'none' }}>
											<Form.Input
												name="id"
												fluid
												label="id"
												placeholder="123-41-as-12"
												onChange={(e, { name, value }) =>
													updateProxiesForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Button type="submit">Submit</Button>
									</Form>
								</Modal.Description>
							</Modal.Content>
						</Modal>
					</Grid.Row>
					<Grid.Row>{RudList({ deleteAction: deleteProxy, items: proxies, itemDisplayKey: 'ip' })}</Grid.Row>
					<Grid.Row>
						{RudList({
							deleteAction: deleteProxyGroup,
							items: proxyGroups,
							itemDisplayKey: 'proxyGroupName'
						})}
					</Grid.Row>
				</Grid>
			</Segment>
		</React.Fragment>
	);
}

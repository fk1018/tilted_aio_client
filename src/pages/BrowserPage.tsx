import React from 'react';
import { Store } from '../Store';
import { Grid, Button, Form, Segment, Header, List, Modal } from 'semantic-ui-react';
import {
	submitCreateBrowserForm,
	updateBrowserForm,
	submitCreateBrowserGroupForm,
	updateBrowserGroupForm
} from '../actions';
import { IProxyGroup, IBrowser, IBrowserForm, IBrowserGroup } from 'tilted_aio_shared';
import { openAllBrowsers, openBrowser, openBrowserGroup } from '../services';
import RudList from '../components/RudList';
import { deleteBrowser } from '../actions/browser/delete-browser';
import { deleteBrowserGroup } from '../actions/browser-group/delete-browser-group';

export default function BrowserPage(): JSX.Element {
	const { state, dispatch } = React.useContext(Store);
	const proxyGroups: Array<IProxyGroup> = state.proxyGroups;
	const browserProfiles: Array<string> = state.browserProfiles;
	const browsers: Array<IBrowser> = state.browsers;
	const browserGroups: Array<IBrowserGroup> = state.browserGroups;
	const browserForm: IBrowserForm = state.browserForm;
	return (
		<React.Fragment>
			<Segment>
				<Grid divided="vertically">
					<Grid.Row>
						<Header as={'h1'} textAlign={'center'} style={{ width: '100%' }}>
							Browser Spoofer
						</Header>
					</Grid.Row>
					<Grid.Row>
						<Modal trigger={<Button>Create Browser Group</Button>} closeIcon>
							<Modal.Header>Create a Browser Group</Modal.Header>
							<Modal.Content>
								<Modal.Description>
									<Form
										onSubmit={() => {
											submitCreateBrowserGroupForm(dispatch, state, state.browserGroupForm);
										}}
									>
										<Form.Group widths="equal">
											<Form.Input
												name="browserGroupName"
												fluid
												label="Browser Group Name"
												placeholder="YS stoned rat dc us"
												onChange={(e, { name, value }) =>
													updateBrowserGroupForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Button type="submit">Submit</Button>
									</Form>
								</Modal.Description>
							</Modal.Content>
						</Modal>{' '}
						<Modal trigger={<Button>Create Browser(s)</Button>} closeIcon>
							<Modal.Header>Create Browser(s)</Modal.Header>
							<Modal.Content>
								<Modal.Description>
									<Form
										onSubmit={() => {
											submitCreateBrowserForm(dispatch, state);
										}}
									>
										<Form.Group widths="equal">
											<Form.Input
												name="name"
												fluid
												label="Browser name"
												placeholder="YS stoned rat dc us"
												onChange={(e, { name, value }) =>
													updateBrowserForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="browserURL"
												fluid
												label="Browser URL"
												placeholder="https://yeezysupply.com/product/zz42069L"
												onChange={(e, { name, value }) =>
													updateBrowserForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												type="checkbox"
												name="pullFromProxyGroup"
												fluid
												label="Pull From Proxy Group?"
												onChange={(e, { name, value }) =>
													updateBrowserForm(dispatch, state, { [name]: e.target.checked })}
											/>
											<Form.Select
												name="proxyGroupId"
												fluid
												disabled={!browserForm.pullFromProxyGroup}
												label="Proxy Group"
												options={proxyGroups.map((group: IProxyGroup) => {
													return { text: group.proxyGroupName, value: group.id };
												})}
												onChange={(e, { name, value }) =>
													updateBrowserForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												type="checkbox"
												name="useBrowserProfile"
												fluid
												label="Use a Browser Profile?"
												onChange={(e, { name, value }) =>
													updateBrowserForm(dispatch, state, { [name]: e.target.checked })}
											/>
											<Form.Select
												name="browserProfile"
												disabled={!browserForm.useBrowserProfile}
												fluid
												label="Browser Profile"
												options={browserProfiles.map((profile: string) => {
													return { text: profile, value: profile };
												})}
												onChange={(e, { name, value }) =>
													updateBrowserForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												type="checkbox"
												name="inBrowserGroup"
												fluid
												label="Put In a Browser Group?"
												onChange={(e, { name, value }) =>
													updateBrowserForm(dispatch, state, { [name]: e.target.checked })}
											/>
											<Form.Select
												name="browserGroupId"
												fluid
												disabled={!browserForm.inBrowserGroup}
												label="Browser Group"
												options={browserGroups.map((group: IBrowserGroup) => {
													return { text: group.browserGroupName, value: group.id };
												})}
												onChange={(e, { name, value }) =>
													updateBrowserForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												type="checkbox"
												name="isAdidas"
												fluid
												label="For Adidas?"
												onChange={(e, { name, value }) =>
													updateBrowserForm(dispatch, state, { [name]: e.target.checked })}
											/>
											<Form.Input
												type="checkbox"
												name="isYeezySupply"
												fluid
												label="For YeezySupply?"
												onChange={(e, { name, value }) =>
													updateBrowserForm(dispatch, state, { [name]: e.target.checked })}
											/>
										</Form.Group>
										<Form.Group widths="equal">
											<Form.Input
												name="amtToCreate"
												type={'number'}
												fluid
												label="Amt to Create"
												defaultValue={1}
												onChange={(e, { name, value }) =>
													updateBrowserForm(dispatch, state, { [name]: value })}
											/>
										</Form.Group>
										<Button type="submit">Submit</Button>
									</Form>
								</Modal.Description>
							</Modal.Content>
						</Modal>
					</Grid.Row>
					<Grid.Row>
						<Button
							size={'mini'}
							onClick={(event, props) => {
								openAllBrowsers();
							}}
						>
							Open All Browsers
						</Button>
						{browserGroups.map((group) => {
							return (
								<Button
									key={group.id}
									size={'mini'}
									onClick={(events, props) => {
										openBrowserGroup(state, group.id);
									}}
								>
									Open {group.browserGroupName}
								</Button>
							);
						})}
					</Grid.Row>
				</Grid>
				<Grid.Row>{RudList({ deleteAction: deleteBrowser, items: browsers, itemDisplayKey: 'name' })}</Grid.Row>
				<Grid.Row>
					{RudList({
						deleteAction: deleteBrowserGroup,
						items: browserGroups,
						itemDisplayKey: 'browserGroupName'
					})}
				</Grid.Row>
			</Segment>
		</React.Fragment>
	);
}

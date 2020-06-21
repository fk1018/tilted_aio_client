import React from 'react';
import { Form, Grid, Segment, Header, Divider, Button, List, Modal, Icon } from 'semantic-ui-react';
import { Store } from '../Store';
export default function RudList(props: ICrudList): JSX.Element {
	const { state, dispatch } = React.useContext(Store);
	const { deleteAction, items, updateAction, viewAction } = props;
	return (
		<React.Fragment>
			<List>
				{items.map((item: any, index: number) => {
					return (
						<List.Item key={index}>
							{item[props.itemDisplayKey]}
							<Button icon>
								<Icon color={'blue'} style={{ display: 'inline-block' }} link name="eye" />
							</Button>
							<Button icon>
								<Icon color={'green'} style={{ display: 'inline-block' }} link name="edit" />
							</Button>
							<Button
								icon
								onClick={() => {
									console.log('delete icon clicked');
									deleteAction(dispatch, state, item.id);
								}}
							>
								<Icon color={'red'} style={{ display: 'inline-block' }} link name="delete" />
							</Button>
						</List.Item>
					);
				})}
			</List>
		</React.Fragment>
	);
}
interface ICrudList {
	deleteAction?: any;
	items?: any;
	itemDisplayKey?: any;
	updateAction?: any;
	viewAction?: any;
}

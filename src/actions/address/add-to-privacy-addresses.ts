import { IAddressGroup, IState, IAction } from '../../interfaces';
import { ipcRenderer } from 'electron';
import { SAVE_DATA, UPDATE_ADDRESS_GROUPS } from '../../strings';

export const addToPrivacyAddresses = (dispatch: any, state: IState, addressId: string): void => {
	const newPrivacyGroups: Array<IAddressGroup> = state.addressGroups.map((pg: IAddressGroup) => {
		if (pg.id === 'privacy') {
			pg.addresses.push(addressId);
		}
		return pg;
	});

	const dispatchObj: IAction<IAddressGroup[]> = {
		type: UPDATE_ADDRESS_GROUPS,
		payload: newPrivacyGroups
	};
	dispatch(dispatchObj);
	ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
};

import { IAddressGroup, IState, IAction } from 'tilted_aio_shared';
import { ipcRenderer } from 'electron';
import { SAVE_DATA, UPDATE_ADDRESS_GROUPS } from 'tilted_aio_shared';

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

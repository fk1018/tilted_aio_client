import { IAddress, IState, IAction } from '../../interfaces';
import { CREATE_NEW_ADDRESS, SAVE_DATA } from '../../strings';
import { ipcRenderer } from 'electron';
import { addToPrivacyAddresses } from './add-to-privacy-addresses';
const uuidv4 = require('uuid/v4');
export const submitCreateAddressForm = (dispatch: any, state: IState, address: IAddress): void => {
	address.id = uuidv4();
	const dispatchObj: IAction<IAddress> = {
		type: CREATE_NEW_ADDRESS,
		payload: address
	};
	dispatch(dispatchObj);
	ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
	if (address.isPrivacyAddress) {
		addToPrivacyAddresses(dispatch, state, address.id);
	}
};

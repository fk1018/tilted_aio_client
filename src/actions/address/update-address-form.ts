import { UPDATE_ADDRESS_FORM } from 'tilted_aio_shared';
import { IAction, IState } from 'tilted_aio_shared';

export const updateAddressForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_ADDRESS_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

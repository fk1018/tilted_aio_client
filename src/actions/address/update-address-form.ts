import { UPDATE_ADDRESS_FORM } from '../../strings';
import { IAction, IState } from '../../interfaces';

export const updateAddressForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_ADDRESS_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

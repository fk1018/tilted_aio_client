import { UPDATE_ACCOUNT_FORM } from 'tilted_aio_shared';
import { IAction, IState } from 'tilted_aio_shared';

export const updateAccountForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_ACCOUNT_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

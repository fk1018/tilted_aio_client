import { UPDATE_ACCOUNT_FORM } from '../../strings';
import { IAction, IState } from '../../interfaces';

export const updateAccountForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_ACCOUNT_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

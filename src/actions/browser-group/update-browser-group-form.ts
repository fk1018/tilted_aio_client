import { IState, IAction } from 'tilted_aio_shared';
import { UPDATE_BROWSER_GROUPS_FORM } from 'tilted_aio_shared';

export const updateBrowserGroupForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_BROWSER_GROUPS_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

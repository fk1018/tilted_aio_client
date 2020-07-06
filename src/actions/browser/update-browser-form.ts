import { UPDATE_BROWSER_FORM } from 'tilted_aio_shared';
import { IState, IAction } from 'tilted_aio_shared';

export const updateBrowserForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_BROWSER_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

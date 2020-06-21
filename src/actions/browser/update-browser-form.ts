import { UPDATE_BROWSER_FORM } from '../../strings';
import { IState, IAction } from '../../interfaces';

export const updateBrowserForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_BROWSER_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

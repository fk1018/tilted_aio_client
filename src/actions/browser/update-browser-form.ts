import { UPDATE_BROWSER_FORM } from '../../../../tilted_aio_shared/strings';
import { IState, IAction } from '../../../../tilted_aio_shared/interfaces';

export const updateBrowserForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_BROWSER_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

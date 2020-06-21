import { IState, IAction } from '../../interfaces';
import { UPDATE_PROXY_GROUPS_FORM } from '../../strings';

export const updateProxyGroupForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_PROXY_GROUPS_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

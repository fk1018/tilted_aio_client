import { IState, IAction } from '../../../../tilted_aio_shared/interfaces';
import { UPDATE_PROXY_GROUPS_FORM } from '../../../../tilted_aio_shared/strings';

export const updateProxyGroupForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_PROXY_GROUPS_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

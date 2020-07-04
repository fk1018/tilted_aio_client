import { IState, IAction } from '../../../../tilted_aio_shared/interfaces';
import { UPDATE_PROXIES_FORM } from '../../../../tilted_aio_shared/strings';

export const updateProxiesForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_PROXIES_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

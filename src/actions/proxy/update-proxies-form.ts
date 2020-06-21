import { IState, IAction } from '../../interfaces';
import { UPDATE_PROXIES_FORM } from '../../strings';

export const updateProxiesForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_PROXIES_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

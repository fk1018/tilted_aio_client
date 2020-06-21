import { UPDATE_PROFILE_FORM } from '../../strings';
import { IState, IAction } from '../../interfaces';

export const updateProfileForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_PROFILE_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

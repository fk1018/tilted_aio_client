import { IState, IAction } from '../../interfaces';
import { UPDATE_TASK_FORM } from '../../strings';

export const updateTaskForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_TASK_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

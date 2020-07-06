import { IState, IAction } from 'tilted_aio_shared';
import { UPDATE_TASK_FORM } from 'tilted_aio_shared';

export const updateTaskForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_TASK_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

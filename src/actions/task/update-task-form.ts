import { IState, IAction } from '../../../../tilted_aio_shared/interfaces';
import { UPDATE_TASK_FORM } from '../../../../tilted_aio_shared/strings';

export const updateTaskForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_TASK_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

import { IState, IAction, ITask } from 'tilted_aio_shared';
import { UPDATE_TASKS, SAVE_DATA } from 'tilted_aio_shared';
import { ipcRenderer } from 'electron';
const uuidv4 = require('uuid/v4');
export const submitTaskForm = (dispatch: any, state: IState, task: ITask): void => {
	task.id = uuidv4();
	task.name = `${task.name}#${state.tasks.length}`;
	const newTasks: Array<ITask> = [...state.tasks, task];
	const dispatchObj: IAction<any> = {
		type: UPDATE_TASKS,
		payload: newTasks
	};
	dispatch(dispatchObj);
	ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
};

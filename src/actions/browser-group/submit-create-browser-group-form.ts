import { IState, IBrowserGroupForm, IBrowserGroup, IAction } from 'tilted_aio_shared';
import { CREATE_NEW_BROWSER_GROUP, SAVE_DATA } from 'tilted_aio_shared';
import { ipcRenderer } from 'electron';
const uuidv4 = require('uuid/v4');
export const submitCreateBrowserGroupForm = (
	dispatch: any,
	state: IState,
	browserGroupForm: IBrowserGroupForm
): void => {
	const browserGroup: IBrowserGroup = {
		browserGroupName: browserGroupForm.browserGroupName,
		id: uuidv4()
	};
	const dispatchObj: IAction<IBrowserGroup> = {
		type: CREATE_NEW_BROWSER_GROUP,
		payload: browserGroup
	};
	dispatch(dispatchObj);
	ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
};

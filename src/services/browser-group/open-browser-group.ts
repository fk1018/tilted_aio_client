import { IState, IAction } from 'tilted_aio_shared';
import { OPEN_BROWSER_GROUP } from 'tilted_aio_shared';
import { ipcRenderer } from 'electron';

export const openBrowserGroup = (state: IState, browserGroupId: string) => {
	const dispatchObj: IAction<string> = {
		type: OPEN_BROWSER_GROUP,
		payload: browserGroupId
	};
	ipcRenderer.send(OPEN_BROWSER_GROUP, JSON.stringify(dispatchObj));
};

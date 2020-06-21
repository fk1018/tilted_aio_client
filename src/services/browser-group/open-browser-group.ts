import { IState, IAction } from '../../interfaces';
import { OPEN_BROWSER_GROUP } from '../../strings';
import { ipcRenderer } from 'electron';

export const openBrowserGroup = (state: IState, browserGroupId: string) => {
	const dispatchObj: IAction<string> = {
		type: OPEN_BROWSER_GROUP,
		payload: browserGroupId
	};
	ipcRenderer.send(OPEN_BROWSER_GROUP, JSON.stringify(dispatchObj));
};

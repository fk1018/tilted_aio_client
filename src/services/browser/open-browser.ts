import { IAction } from '../../interfaces';
import { OPEN_BROWSER } from '../../strings';
import { ipcRenderer } from 'electron';

export const openBrowser = (browserId: string) => {
	const dispatchObj: IAction<string> = {
		type: OPEN_BROWSER,
		payload: browserId
	};
	ipcRenderer.send(OPEN_BROWSER, JSON.stringify(dispatchObj));
};

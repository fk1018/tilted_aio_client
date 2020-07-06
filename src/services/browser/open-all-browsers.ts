import { IAction } from 'tilted_aio_shared';
import { OPEN_ALL_BROWSERS } from 'tilted_aio_shared';
import { ipcRenderer } from 'electron';

export const openAllBrowsers = () => {
	const dispatchObj: IAction<string> = {
		type: OPEN_ALL_BROWSERS,
		payload: ''
	};
	ipcRenderer.send(OPEN_ALL_BROWSERS, JSON.stringify(dispatchObj));
};

import { IAction } from '../../../../tilted_aio_shared/interfaces';
import { OPEN_ALL_BROWSERS } from '../../../../tilted_aio_shared/strings';
import { ipcRenderer } from 'electron';

export const openAllBrowsers = () => {
	const dispatchObj: IAction<string> = {
		type: OPEN_ALL_BROWSERS,
		payload: ''
	};
	ipcRenderer.send(OPEN_ALL_BROWSERS, JSON.stringify(dispatchObj));
};

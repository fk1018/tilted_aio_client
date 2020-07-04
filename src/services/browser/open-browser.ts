import { IAction } from '../../../../tilted_aio_shared/interfaces';
import { OPEN_BROWSER } from '../../../../tilted_aio_shared/strings';
import { ipcRenderer } from 'electron';

export const openBrowser = (browserId: string) => {
	const dispatchObj: IAction<string> = {
		type: OPEN_BROWSER,
		payload: browserId
	};
	ipcRenderer.send(OPEN_BROWSER, JSON.stringify(dispatchObj));
};

import { IState, IProxyGroupForm, IProxyGroup, IAction } from '../../../../tilted_aio_shared/interfaces';
import { CREATE_NEW_PROXY_GROUP, SAVE_DATA } from '../../../../tilted_aio_shared/strings';
import { ipcRenderer } from 'electron';
const uuidv4 = require('uuid/v4');
export const submitCreateProxyGroupForm = (dispatch: any, state: IState, proxyGroupForm: IProxyGroupForm): void => {
	const proxyGroup: IProxyGroup = {
		proxyGroupName: proxyGroupForm.proxyGroupName || '',
		id: uuidv4(),
		proxies: []
	};
	const dispatchObj: IAction<IProxyGroup> = {
		type: CREATE_NEW_PROXY_GROUP,
		payload: proxyGroup
	};
	dispatch(dispatchObj);
	ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
};

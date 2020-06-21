import { IState, IProxy, IAction } from '../../interfaces';
import { UPDATE_PROXIES, SAVE_DATA } from '../../strings';
import { ipcRenderer } from 'electron';

export const updateProxy = (dispatch: any, state: IState, proxy: IProxy): void => {
	const newProxies = state.proxies.map((p: IProxy) => {
		return proxy.id !== p.id ? p : proxy;
	});
	const dispatchObj: IAction<IProxy[]> = {
		type: UPDATE_PROXIES,
		payload: newProxies
	};
	dispatch(dispatchObj);
	ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
};

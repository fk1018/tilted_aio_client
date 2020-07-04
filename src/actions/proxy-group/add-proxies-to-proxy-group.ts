import { IProxyGroup, IState, IUpdateProxiesGroup, IAction } from '../../../../tilted_aio_shared/interfaces';
import { UPDATE_PROXY_GROUPS, SAVE_DATA } from '../../../../tilted_aio_shared/strings';
import { ipcRenderer } from 'electron';

export const addProxiesToProxiesGroup = (
	dispatch: any,
	state: IState,
	proxyGroupToUpdate: IUpdateProxiesGroup
): void => {
	const newProxyGroups = state.proxyGroups.map((proxyGroup: IProxyGroup) => {
		return proxyGroup.id !== proxyGroupToUpdate.proxyGroupId
			? proxyGroup
			: {
				...proxyGroup,
				proxies: [...proxyGroup.proxies, ...proxyGroupToUpdate.proxies]
			} as IProxyGroup;
	});
	const dispatchObj: IAction<IProxyGroup[]> = {
		type: UPDATE_PROXY_GROUPS,
		payload: newProxyGroups
	};
	dispatch(dispatchObj);
	ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
};

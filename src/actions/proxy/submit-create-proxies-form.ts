import { IState, IProxiesForm, IProxy, IAction, IUpdateProxiesGroup } from '../../../../tilted_aio_shared/interfaces';
import { CREATE_NEW_PROXIES, SAVE_DATA } from '../../../../tilted_aio_shared/strings';
import { ipcRenderer } from 'electron';
import { addProxiesToProxiesGroup } from '../../actions';
const uuidv4 = require('uuid/v4');
export const submitCreateProxiesForm = (dispatch: any, state: IState, proxyForm: IProxiesForm): void => {
	//convert IProxyGroupForm to IProxyGroup
	const proxiesString = proxyForm.proxies || '';
	let proxies: Array<IProxy> = [];
	let proxyIds: Array<string> = [];
	try {
		if (!!proxyForm.putInProxyGroup && !!proxyForm.proxyGroup) {
			proxies = proxiesString.split('\n').map((pString: string): IProxy => {
				const proxyPieces: Array<string> = pString.split(':');
				const proxy: IProxy = {
					id: uuidv4(),
					ip: proxyPieces[0],
					password: proxyPieces[3],
					port: proxyPieces[1],
					userName: proxyPieces[2],
					inUse: false,
					fullProxy: pString,
					proxyGroupId: proxyForm.proxyGroup
				};
				proxyIds.push(proxy.id);
				return proxy;
			});
		} else {
			proxies = proxiesString.split('\n').map((pString: string): IProxy => {
				const proxyPieces: Array<string> = pString.split(':');
				const proxy: IProxy = {
					id: uuidv4(),
					ip: proxyPieces[0],
					password: proxyPieces[3],
					port: proxyPieces[1],
					userName: proxyPieces[2],
					inUse: false,
					fullProxy: pString,
				};
				return proxy;
			});
		}
	} catch (err) {
		console.log(err);
	} finally {
		const dispatchObj: IAction<IProxy[]> = {
			type: CREATE_NEW_PROXIES,
			payload: proxies
		};
		dispatch(dispatchObj);
		ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
		debugger;
		if (!!proxyForm.putInProxyGroup && !!proxyForm.proxyGroup && !!proxyIds.length) {
			const proxiesToAdd: IUpdateProxiesGroup = { proxyGroupId: proxyForm.proxyGroup, proxies: proxyIds };
			//put the proxy ids into their proxy group
			addProxiesToProxiesGroup(dispatch, state, proxiesToAdd);
		}
	}
};

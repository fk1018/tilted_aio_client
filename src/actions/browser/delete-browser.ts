import { UPDATE_PROXIES, UPDATE_BROWSERS, SAVE_DATA } from 'tilted_aio_shared';
import { IState, IAction, IBrowser, IProxy } from 'tilted_aio_shared';
import { ipcRenderer } from 'electron';


export const deleteBrowser = (dispatch: any, state: IState, browserId: string): void => {
	const browsers: IBrowser[] = state.browsers;
	//get browser
	const browser: IBrowser | undefined = browsers.find((b: IBrowser) => b.id === browserId);
	//get proxie if ascociated
	console.log('Deleting Browser:', browser)

	if (!!browser?.proxyId) {
		const proxy: IProxy | undefined = state.proxies.find((p: IProxy) => p.id === browser.proxyId)
		if (!!proxy) {
			console.log('Browser has proxy. Updating proxy.')
			//update proxy
			const newProxy: IProxy = { ...proxy, inUse: false }
			console.log('New Proxy:', newProxy);
			const newProxies: IProxy[] = state.proxies.map((p: IProxy) => {
				if (p.id !== newProxy.id) {
					return p
				} else {
					return newProxy
				}
			})
			console.log('New Proxies:', newProxies);
			const dispatchObj: IAction<IProxy[]> = {
				type: UPDATE_PROXIES,
				payload: newProxies
			};
			dispatch(dispatchObj);
			ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
		}

	}
	//update browsers
	const newBrowsers = browsers.filter((b: IBrowser) => b.id !== browserId);
	console.log('New Browsers:', newBrowsers)
	//todo will need to close browser if open when ws implemented
	const dispatchObj: IAction<IBrowser[]> = {
		type: UPDATE_BROWSERS,
		payload: newBrowsers
	};
	dispatch(dispatchObj);
	ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
};

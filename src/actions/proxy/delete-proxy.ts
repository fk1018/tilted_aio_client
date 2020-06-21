import { SAVE_DATA, UPDATE_BROWSERS, UPDATE_PROXIES } from '../../strings';
import { IState, IAction, IProxy, IBrowser, } from '../../interfaces';
import { ipcRenderer } from 'electron';


export const deleteProxy = (dispatch: any, state: IState, proxyId: string): void => {
  console.log("Deleting Proxy:", proxyId);
  const proxies: IProxy[] = state.proxies;
  const proxy = proxies.find((proxy: IProxy) => proxy.id === proxyId)
  //update browser using proxy
  if (proxy?.inUse) {
    console.log('Proxy is in use:', proxy);
    const browsers: IBrowser[] = state.browsers;
    const newBrowsers = browsers.map((browser: IBrowser) => {
      if (browser.proxyId === proxyId) {
        console.log('Proxy found deleting proxy:', browser)
        browser.proxyId = undefined;
      }
      return browser
    })
    console.log('Browser proxy updated new browsers:', newBrowsers);
    const dispatchObj: IAction<IBrowser[]> = {
      type: UPDATE_BROWSERS,
      payload: newBrowsers
    };
    dispatch(dispatchObj);
    ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
  }
  //update proxies
  const newProxies = proxies.filter((p: IProxy) => p.id !== proxyId)
  console.log('Removed proxy, new proxies are:', newProxies)
  const dispatchObj: IAction<IProxy[]> = {
    type: UPDATE_PROXIES,
    payload: newProxies
  };
  dispatch(dispatchObj);
  ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
};

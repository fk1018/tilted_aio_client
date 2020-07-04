import { IState, IProxy, IAction, IProxyGroup, IBrowser } from "../../../../tilted_aio_shared/interfaces";
import { UPDATE_PROXIES, SAVE_DATA, UPDATE_PROXY_GROUPS, UPDATE_BROWSERS } from "../../../../tilted_aio_shared/strings";
import { ipcRenderer } from "electron";
import { start } from "repl";

export const deleteProxyGroup = (dispatch: any, state: IState, proxyGroupId: string): void => {
  console.log('Deleting Proxy Group:', proxyGroupId)
  //get all proxies with this as their id 
  const newProxies: IProxy[] = [];
  const proxiesBeingRemoved: string[] = [];
  state.proxies.map((proxy: IProxy) => {
    if (proxy.proxyGroupId === proxyGroupId) {
      proxiesBeingRemoved.push(proxy.id);
    } else {
      newProxies.push(proxy);
    }
  })

  console.log('Updated proxies are:', newProxies)
  //dispatch update proxies
  const newBrowsers: IBrowser[] = state.browsers.map((browser: IBrowser) => {
    if (!!browser.proxyId && proxiesBeingRemoved.includes(browser.proxyId)) {
      browser.proxyId = undefined;
    }
    return browser
  })
  const proxyDispatchObj: IAction<IProxy[]> = {
    type: UPDATE_PROXIES,
    payload: newProxies
  };
  dispatch(proxyDispatchObj)
  ipcRenderer.send(SAVE_DATA, JSON.stringify(proxyDispatchObj));
  // update browsers
  const browsersDispatchObj: IAction<IBrowser[]> = {
    type: UPDATE_BROWSERS,
    payload: newBrowsers
  };
  dispatch(browsersDispatchObj)
  ipcRenderer.send(SAVE_DATA, JSON.stringify(browsersDispatchObj));
  // remove proxy group from proxy groups
  const newProxyGroups = state.proxyGroups.filter((pg: IProxyGroup) => pg.id !== proxyGroupId)
  console.log('Here are updated proxyGroups:', newProxyGroups)
  //dispatch remove proxy groups
  const proxyGroupDispatchObj: IAction<IProxyGroup[]> = {
    type: UPDATE_PROXY_GROUPS,
    payload: newProxyGroups
  };
  dispatch(proxyGroupDispatchObj)
  ipcRenderer.send(SAVE_DATA, JSON.stringify(proxyGroupDispatchObj));
}
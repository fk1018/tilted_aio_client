import { IState, IBrowser, IAction, IBrowserGroup, IProxy } from "../../../../tilted_aio_shared/interfaces";
import { UPDATE_BROWSERS, SAVE_DATA, UPDATE_BROWSER_GROUPS, UPDATE_PROXIES } from "../../../../tilted_aio_shared/strings";
import { ipcRenderer } from "electron";

export const deleteBrowserGroup = (dispatch: any, state: IState, browserGroupId: string): void => {
  //remove browserGroupId from browsers
  const newBrowsers: IBrowser[] = []
  const proxiesToUpdate: string[] = [];
  state.browsers.forEach((browser: IBrowser) => {
    if (browser.browserGroupId === browserGroupId) {
      if (!!browser.proxyId) {
        // if its using a proxy set to not in use and update proxies
        //add id to proxies to update
        proxiesToUpdate.push(browser.proxyId)
      }
    } else {
      newBrowsers.push(browser);
    }
  })
  const browsersDispatchObj: IAction<IBrowser[]> = {
    type: UPDATE_BROWSERS,
    payload: newBrowsers
  };
  dispatch(browsersDispatchObj)
  ipcRenderer.send(SAVE_DATA, JSON.stringify(browsersDispatchObj));
  const newProxies: IProxy[] = state.proxies.map((proxy: IProxy) => {
    if (proxiesToUpdate.includes(proxy.id)) {
      proxy.inUse = false;
    }
    return proxy;
  })
  //update proxies
  const proxiesDispatchObj: IAction<IProxy[]> = {
    type: UPDATE_PROXIES,
    payload: newProxies
  };
  dispatch(proxiesDispatchObj)
  ipcRenderer.send(SAVE_DATA, JSON.stringify(proxiesDispatchObj));
  //remove browser group
  const newBrowserGroups = state.browserGroups.filter((bg: IBrowserGroup) => bg.id !== browserGroupId)
  const browserGroupsDispatchObj: IAction<IBrowserGroup[]> = {
    type: UPDATE_BROWSER_GROUPS,
    payload: newBrowserGroups
  };
  dispatch(browserGroupsDispatchObj)
  ipcRenderer.send(SAVE_DATA, JSON.stringify(browserGroupsDispatchObj));
}
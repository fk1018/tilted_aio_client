import { IState, IBrowser, IAction, IBrowserForm, IProxyGroup } from 'tilted_aio_shared'
import { updateProxy } from '../../actions'
import { CREATE_NEW_BROWSER, SAVE_DATA } from 'tilted_aio_shared'
import { ipcRenderer } from 'electron'
const uuidv4 = require('uuid/v4')
export const submitCreateBrowserForm = (dispatch: any, state: IState): void => {
  const browserForm: IBrowserForm = state.browserForm;
  console.log('submitting create browser form')
  for (let i = 0; i < (browserForm.amtToCreate || 0); i++) {
    const browser: IBrowser = {
      useBrowserProfile: !!browserForm.useBrowserProfile,
      browserProfile: browserForm.browserProfile,
      id: uuidv4(),
      name: `${browserForm.name} #${i}`,
      pullFromProxyGroup: !!browserForm.pullFromProxyGroup,
      proxyGroup: browserForm.proxyGroupId,
      cookies: [],
      browserGroupId: browserForm.browserGroupId,
      inBrowserGroup: !!browserForm.inBrowserGroup,
      browserURL: browserForm.browserURL || '',
      isAdidas: browserForm.isAdidas || false,
      isYeezySupply: browserForm.isYeezySupply || false
    }
    if (browser.pullFromProxyGroup && !!browser.proxyGroup) {
      //check if proxy group is selected
      const proxyGroup: IProxyGroup | undefined = state.proxyGroups.find(
        group => group.id === browser.proxyGroup
      )
      if (proxyGroup) {
        const proxies = state.proxies.filter(proxy =>
          proxyGroup.proxies.includes(proxy.id)
        )
        const proxyToUse = proxies.find(proxy => !proxy.inUse)
        if (proxyToUse) {
          proxyToUse.inUse = true
          updateProxy(dispatch, state, proxyToUse)
          browser.proxyId = proxyToUse.id
        }
      }
    }
    const dispatchObj: IAction<IBrowser> = {
      type: CREATE_NEW_BROWSER,
      payload: browser
    }
    dispatch(dispatchObj)
    ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj))
  }
}

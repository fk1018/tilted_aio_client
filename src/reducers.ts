import { IState, IAction } from 'tilted_aio_shared'
import {
  UPDATE_NAVIGATION_ACTIVE_INDEX,
  CREATE_NEW_PROFILE,
  UPDATE_PROFILE_FORM,
  LOAD_INITIAL_DATA,
  UPDATE_ADDRESS_FORM,
  CREATE_NEW_ADDRESS,
  UPDATE_PROXY_GROUPS_FORM,
  CREATE_NEW_PROXY_GROUP,
  UPDATE_BROWSER_FORM,
  CREATE_NEW_BROWSER,
  UPDATE_BROWSER_GROUPS_FORM,
  CREATE_NEW_BROWSER_GROUP,
  CREATE_NEW_PROXIES,
  UPDATE_PROXIES_FORM,
  UPDATE_PROXY_GROUPS,
  UPDATE_BROWSER_GROUPS,
  UPDATE_PROXIES,
  CREATE_NEW_ACCOUNT,
  UPDATE_ACCOUNT_FORM,
  UPDATE_CREDIT_CARD_FORM,
  CREATE_NEW_CREDIT_CARD,
  UPDATE_ADDRESS_GROUPS,
  UPDATE_CREDIT_CARD_GROUPS,
  UPDATE_TASK_FORM,
  UPDATE_TASKS,
  UPDATE_BROWSERS
} from 'tilted_aio_shared'
export function reducer(state: IState, action: IAction<any>): IState {
  switch (action.type) {
    case CREATE_NEW_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, action.payload]
      }
    case CREATE_NEW_BROWSER:
      return {
        ...state,
        browsers: [...state.browsers, action.payload]
      }
    case CREATE_NEW_BROWSER_GROUP:
      return {
        ...state,
        browserGroups: [...state.browserGroups, action.payload]
      }
    case CREATE_NEW_CREDIT_CARD:
      return {
        ...state,
        creditCards: [...state.creditCards, action.payload]
      }
    case CREATE_NEW_ADDRESS:
      return {
        ...state,
        addresses: [...state.addresses, action.payload]
      }
    case CREATE_NEW_PROFILE:
      return {
        ...state,
        profiles: [...state.profiles, action.payload]
      }
    case CREATE_NEW_PROXIES:
      return {
        ...state,
        proxies: [...state.proxies, ...action.payload]
      }
    case CREATE_NEW_PROXY_GROUP:
      return {
        ...state,
        proxyGroups: [...state.proxyGroups, action.payload]
      }
    case LOAD_INITIAL_DATA:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_ACCOUNT_FORM:
      return {
        ...state,
        accountForm: { ...state.accountForm, ...action.payload }
      }
    case UPDATE_ADDRESS_FORM:
      return {
        ...state,
        addressForm: { ...state.addressForm, ...action.payload }
      }
    case UPDATE_BROWSER_FORM:
      return {
        ...state,
        browserForm: { ...state.browserForm, ...action.payload }
      }
    case UPDATE_BROWSER_GROUPS:
      return {
        ...state,
        browserGroups: action.payload
      }
    case UPDATE_BROWSER_GROUPS_FORM:
      return {
        ...state,
        browserGroupForm: { ...state.browserGroupForm, ...action.payload }
      }
    case UPDATE_BROWSERS:
      return {
        ...state,
        browsers: action.payload
      }
    case UPDATE_CREDIT_CARD_FORM:
      return {
        ...state,
        creditCardForm: { ...state.creditCardForm, ...action.payload }
      }
    case UPDATE_CREDIT_CARD_GROUPS:
      return {
        ...state,
        creditCardGroups: action.payload
      }
    case UPDATE_NAVIGATION_ACTIVE_INDEX:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          activeIndex: action.payload
        }
      }
    case UPDATE_ADDRESS_GROUPS:
      return {
        ...state,
        addressGroups: action.payload
      }
    case UPDATE_PROFILE_FORM:
      return {
        ...state,
        profileForm: { ...state.profileForm, ...action.payload }
      }
    case UPDATE_PROXIES:
      return {
        ...state,
        proxies: action.payload
      }
    case UPDATE_PROXIES_FORM:
      return {
        ...state,
        proxiesForm: { ...state.proxiesForm, ...action.payload }
      }
    case UPDATE_PROXY_GROUPS:
      return {
        ...state,
        proxyGroups: action.payload
      }
    case UPDATE_PROXY_GROUPS_FORM:
      return {
        ...state,
        proxyGroupForm: { ...state.proxyGroupForm, ...action.payload }
      }
    case UPDATE_TASKS:
      return {
        ...state,
        tasks: action.payload
      }
    case UPDATE_TASK_FORM:
      return {
        ...state,
        taskForm: { ...state.taskForm, ...action.payload }
      }
    default:
      return state
  }
}

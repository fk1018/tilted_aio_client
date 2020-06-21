import React from 'react';
import { IState } from './interfaces';
import { reducer } from './reducers';

const initialState: IState = {
	accounts: [],
	accountForm: {},
	addresses: [],
	addressForm: { isPrivacyAddress: false },
	addressGroups: [],
	browserForm: { amtToCreate: 1 },
	browserGroupForm: {},
	browserGroups: [],
	browserProfiles: [],
	browsers: [],
	creditCardForm: { isPrivacyCard: false },
	creditCardGroups: [],
	creditCards: [],
	navigation: {
		activeIndex: 0
	},
	profiles: [],
	profileForm: {},
	proxies: [],
	proxiesForm: {},
	proxyGroupForm: {},
	proxyGroups: [],
	sites: [],
	tasks: [],
	taskForm: { privacyCardMode: false, useProxyGroup: false },
	taskTypes: []
};

export const Store = React.createContext<IState | any>(initialState); //the any here is fix for return of store provider

export function StoreProvider({ children }: JSX.ElementChildrenAttribute): JSX.Element {
	const [ state, dispatch ] = React.useReducer(reducer, initialState);
	return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
}

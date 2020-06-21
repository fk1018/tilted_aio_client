import { ACTIONS_ACCOUNT } from './account/index';
import { ACTIONS_ADDRESS } from './address/index';
import { ACTIONS_BROWSER } from './browser/index';
import { ACTIONS_BROWSER_GROUP } from './browser-group/index';
import { ACTIONS_CREDIT_CARD } from './credit-card/index';
import { ACTIONS_INITIAL_DATA } from './initial-data/index';
import { ACTIONS_NAVIGATION } from './navigation/index';
import { ACTIONS_PROFILE } from './profile/index';
import { ACTIONS_PROXY } from './proxy/index';
import { ACTIONS_PROXY_GROUP } from './proxy-group/index';
import { ACTIONS_TASK } from './task/index';
export const actions = {
	...ACTIONS_ACCOUNT,
	...ACTIONS_ADDRESS,
	...ACTIONS_BROWSER,
	...ACTIONS_BROWSER_GROUP,
	...ACTIONS_CREDIT_CARD,
	...ACTIONS_INITIAL_DATA,
	...ACTIONS_NAVIGATION,
	...ACTIONS_PROFILE,
	...ACTIONS_PROXY,
	...ACTIONS_PROXY_GROUP,
	...ACTIONS_TASK
};

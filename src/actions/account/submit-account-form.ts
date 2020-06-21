import { IAccount, IState, IAction } from '../../interfaces';
import { CREATE_NEW_ACCOUNT, SAVE_DATA } from '../../strings';
import { ipcRenderer } from 'electron';
const uuidv4 = require('uuid/v4');
export const submitCreateAccountForm = (dispatch: any, state: IState, account: IAccount): void => {
	account.id = uuidv4();
	const dispatchObj: IAction<IAccount> = {
		type: CREATE_NEW_ACCOUNT,
		payload: account
	};
	dispatch(dispatchObj);
	ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
};

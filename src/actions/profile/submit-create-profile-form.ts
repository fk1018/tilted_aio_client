import { CREATE_NEW_PROFILE, SAVE_DATA } from '../../strings';
import { IState, IProfile, IAction } from '../../interfaces';
import { ipcRenderer } from 'electron';
const uuidv4 = require('uuid/v4');

export const submitCreateProfileForm = (dispatch: any, state: IState, profile: IProfile): void => {
	profile.id = uuidv4();
	const dispatchObj: IAction<IProfile> = {
		type: CREATE_NEW_PROFILE,
		payload: profile
	};
	dispatch(dispatchObj);
	ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
};

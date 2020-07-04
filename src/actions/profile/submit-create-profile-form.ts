import { CREATE_NEW_PROFILE, SAVE_DATA } from '../../../../tilted_aio_shared/strings';
import { IState, IProfile, IAction } from '../../../../tilted_aio_shared/interfaces';
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

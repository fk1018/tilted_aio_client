import { IState, IAction } from '../../interfaces';
import { UPDATE_NAVIGATION_ACTIVE_INDEX } from '../../strings';

export const updateNavigationActiveIndex = (dispatch: any, state: IState, index: number): void => {
	const dispatchObj: IAction<number> = {
		type: UPDATE_NAVIGATION_ACTIVE_INDEX,
		payload: index
	};
	dispatch(dispatchObj);
};

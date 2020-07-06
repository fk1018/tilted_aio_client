import { IState, IAction } from 'tilted_aio_shared';
import { UPDATE_NAVIGATION_ACTIVE_INDEX } from 'tilted_aio_shared';

export const updateNavigationActiveIndex = (dispatch: any, state: IState, index: number): void => {
	const dispatchObj: IAction<number> = {
		type: UPDATE_NAVIGATION_ACTIVE_INDEX,
		payload: index
	};
	dispatch(dispatchObj);
};

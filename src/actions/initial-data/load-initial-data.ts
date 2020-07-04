import { IState, IAction } from '../../../../tilted_aio_shared/interfaces';
import { LOAD_INITIAL_DATA } from '../../../../tilted_aio_shared/strings';

export const loadInitialData = (dispatch: any, state: IState, initialState: any): void => {
	const dispatchObj: IAction<IState> = {
		type: LOAD_INITIAL_DATA,
		payload: initialState
	};
	dispatch(dispatchObj);
};

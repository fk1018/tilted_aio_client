import { IState, IAction } from '../../interfaces';
import { LOAD_INITIAL_DATA } from '../../strings';

export const loadInitialData = (dispatch: any, state: IState, initialState: any): void => {
	const dispatchObj: IAction<IState> = {
		type: LOAD_INITIAL_DATA,
		payload: initialState
	};
	dispatch(dispatchObj);
};

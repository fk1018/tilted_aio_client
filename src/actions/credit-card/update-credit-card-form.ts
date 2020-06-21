import { UPDATE_CREDIT_CARD_FORM } from '../../strings';
import { IAction, IState } from '../../interfaces';

export const updateCreditCardForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_CREDIT_CARD_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

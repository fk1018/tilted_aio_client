import { UPDATE_CREDIT_CARD_FORM } from 'tilted_aio_shared';
import { IAction, IState } from 'tilted_aio_shared';

export const updateCreditCardForm = (dispatch: any, state: IState, keyValuePair: any): void => {
	const dispatchObj: IAction<any> = {
		type: UPDATE_CREDIT_CARD_FORM,
		payload: keyValuePair
	};
	dispatch(dispatchObj);
};

import { IState, IAction, ICreditCard } from '../../../../tilted_aio_shared/interfaces';
import { CREATE_NEW_CREDIT_CARD, SAVE_DATA } from '../../../../tilted_aio_shared/strings';
import { ipcRenderer } from 'electron';
import { addToPrivacyCards } from './add-to-privacy-cards';
const uuidv4 = require('uuid/v4');
export const submitCreditCardForm = (dispatch: any, state: IState, creditCard: ICreditCard): void => {
	creditCard.id = uuidv4();
	const dispatchObj: IAction<ICreditCard> = {
		type: CREATE_NEW_CREDIT_CARD,
		payload: creditCard
	};
	dispatch(dispatchObj);
	ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
	if (creditCard.isPrivacyCard) {
		addToPrivacyCards(dispatch, state, creditCard.id);
	}
};

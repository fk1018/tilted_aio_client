import { IState, IAction, ICreditCardGroup } from '../../interfaces';
import { UPDATE_CREDIT_CARD_GROUPS, SAVE_DATA } from '../../strings';
import { ipcRenderer } from 'electron';
export const addToPrivacyCards = (dispatch: any, state: IState, creditCardId: string): void => {
	const newCreditCardGroups = state.creditCardGroups.map((group: ICreditCardGroup) => {
		if (group.id === 'privacy') {
			group.creditCards.push(creditCardId);
		}
		return group;
	});
	const dispatchObj: IAction<ICreditCardGroup[]> = {
		type: UPDATE_CREDIT_CARD_GROUPS,
		payload: newCreditCardGroups
	};
	dispatch(dispatchObj);
	ipcRenderer.send(SAVE_DATA, JSON.stringify(dispatchObj));
};
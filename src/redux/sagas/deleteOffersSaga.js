import axios from "axios";
import { put } from "redux-saga/effects";

function* deleteOffers(action) {
	try {
		yield axios.delete(`/api/offers/${action.payload.offerId}`);
		yield put({
			type: "GET_OFFERS",
			payload: action.payload.offerId,
		});
	} catch (err) {
		console.warn(err);
	}
}

export default deleteOffers;

import axios from "axios";
import { put } from "redux-saga/effects";

function* putOffers(action) {
	try {
		const offerId = action.payload.id;
		yield axios.put(`/api/offers/edit/${offerId}`, action.payload);
		yield put({
			type: "GET_OFFER",
			payload: offerId,
		});
		yield put({
			type: "GET_OFFER",
			payload: offerId,
		});
	} catch (err) {
		console.warn(err);
	}
}

export default putOffers;

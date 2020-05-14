import { put } from "redux-saga/effects";
import axios from "axios";

function* postOffers(action) {
	try {
		yield axios.post(`/api/offers`, action.payload);
		yield put({
			type: "GET_OFFERS",
		});
	} catch (error) {
		console.log("postOffers request failed", error);
	}
}

export default postOffers;

import { put } from "redux-saga/effects";
import axios from "axios";

function* getOffers(action) {
	try {
		const response = yield axios.get("/api/offers");

		yield put({
			type: "SET_OFFERS",
			payload: response.data,
		});
	} catch (error) {
		console.log("getOffers request failed", error);
	}
}
export default getOffers;

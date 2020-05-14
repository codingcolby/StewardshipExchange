import axios from "axios";
import { put } from "redux-saga/effects";

function* getUsersOffers(action) {
	try {
		const user_id = action.payload;
		const response = yield axios.get(`/api/offers/${user_id}`);
		yield put({
			type: "SET_USERSOFFERS",
			payload: response.data,
		});
	} catch (err) {
		console.warn(err);
	}
}

export default getUsersOffers;

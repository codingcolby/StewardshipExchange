import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getOffers(action) {
	try {
		const response = yield axios.get("/api/offers");

		yield put({
			type: "SHOW_OFFERS",
			payload: response.data,
		});
	} catch (error) {
		console.log("getOffers request failed", error);
	}
}

function* getUsersOffers(action) {
	try {
		const user_id = action.payload;
		const response = yield axios.get(`/api/offers/${user_id}`);
		yield put({
			type: "SHOW_USERSOFFERS",
			payload: response.data,
		});
	} catch (err) {
		console.warn(err);
	}
}

function* addOffers(action) {
	try {
		yield axios.post(`/api/offers`, action.payload);
		yield put({
			type: "SHOW_OFFERS",
		});
	} catch (error) {
		console.log("addOffers request failed", error);
	}
}

function* editOffers(action) {
	try {
		const offerId = action.payload.offer_id;
		yield axios.put(`/api/offers`, action.payload);
		yield put({
			type: "SHOW_OFFERS",
			payload: offerId,
		});
	} catch (error) {
		console.log("editOffers request failed", error);
	}
}

function* removeOffers(action) {
	try {
		yield axios.delete(`/api/offers/${action.payload.offerId}`);
		yield put({
			type: "SHOW_OFFERS",
			payload: action.payload.offerId,
		});
	} catch (error) {
		console.log("removeOffers request failed", error);
	}
}

function* offersSaga() {
	yield takeLatest("GET_OFFERS", getOffers);
	yield takeLatest("GET_USERSOFFERS", getUsersOffers);
	yield takeLatest("ADD_OFFERS", addOffers);
	yield takeLatest("EDIT_OFFERS", editOffers);
	yield takeLatest("REMOVE_OFFERS", removeOffers);
}

export default offersSaga;

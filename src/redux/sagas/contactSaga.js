import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getContact(action) {
	try {
		const response = yield axios.get("/api/contact");

		yield put({ type: "SHOW_CONTACT", payload: response.data });
	} catch (error) {
		console.log("getContact request failed", error);
	}
}

function* addContact(action) {
	try {
		yield axios.post(`/api/contact`, action.payload);
		yield put({
			type: "SHOW_CONTACT",
			payload: "",
		});
	} catch (error) {
		console.log("addContact request failed", error);
	}
}

function* contactSaga() {
	yield takeLatest("GET_CONTACT", getContact);
	yield takeLatest("ADD_CONTACT", addContact);
}

export default contactSaga;

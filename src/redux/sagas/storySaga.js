import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getStory(action) {
	try {
		const response = yield axios.get("/api/stories");

		yield put({ type: "SHOW_STORY", payload: response.data });
	} catch (error) {
		console.log("getStory request failed", error);
	}
}

function* addStory(action) {
	try {
		yield axios.post(`/api/stories`, action.payload);
		yield put({
			type: "SHOW_STORY",
		});
	} catch (error) {
		console.log("addStory request failed", error);
	}
}

function* storySaga() {
	yield takeLatest("GET_STORY", getStory);
	yield takeLatest("ADD_STORY", addStory);
}

export default storySaga;

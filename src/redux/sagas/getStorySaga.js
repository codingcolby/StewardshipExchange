import { put } from "redux-saga/effects";
import axios from "axios";

function* getStory(action) {
	try {
		const response = yield axios.get("/api/stories");

		yield put({ type: "SET_STORY", payload: response.data });
	} catch (error) {
		console.log("getStory request failed", error);
	}
}

export default getStory;

import { put } from "redux-saga/effects";
import axios from "axios";

function* postStory(action) {
	try {
		yield axios.post(`/api/stories`, action.payload);
		yield put({
			type: "GET_STORY",
		});
	} catch (error) {
		console.log("postStory request failed", error);
	}
}

export default postStory;

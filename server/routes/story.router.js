const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// ----- GET ALL stories
router.get("/", (req, res) => {
	const queryText = `SELECT * FROM "stories" ORDER BY "story_date" DESC;`;

	pool
		.query(queryText)
		.then((responseDb) => {
			res.send(responseDb.rows);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

// ----- POST NEW story
router.post("/", (req, res) => {
	const newstoryData = req.body;
	const queryText = `INSERT INTO "stories" (
    "submit_story_user_id",
    "off_agency",
    "received_agency",
    "title",
    "narrative",
    "photo_file")
				VALUES ($1, $2, $3, $4, $5, $6);`;
	pool
		.query(queryText, [
			newstoryData.submit_story_user_id,
			newstoryData.off_agency,
			newstoryData.received_agency,
			newstoryData.title,
			newstoryData.narrative,
			newstoryData.photo_file,
		])
		.then((responseDb) => {
			res.sendStatus(201);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

module.exports = router;

const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// ----- ADD CONTACT INQUIRES
router.post("/", (req, res) => {
	const newContactData = req.body;
	const queryText = `INSERT INTO "site_contact" (
"person_name",
"person_contact",
"contact_msg")
VALUES ($1, $2, $3);`;
	pool
		.query(queryText, [
			newContactData.person_name,
			newContactData.person_contact,
			newContactData.contact_msg,
		])
		.then((responseDb) => {
			res.sendStatus(201);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

// ----- GET ALL CONTACTS
router.get("/", (req, res) => {
	const queryText = `SELECT * FROM "site_contact" ORDER BY "msg_received" DESC;`;

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
/**
 * POST route template
 */
router.post("/", (req, res) => {});

module.exports = router;

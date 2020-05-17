const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// ----- GET ALL OFFERS
router.get("/", (req, res) => {
	const queryText = `SELECT * FROM "offers" ORDER BY "submit_date" DESC;`;

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

// ----- POST NEW OFFER
router.post("/", (req, res) => {
	const newOffersData = req.body;
	const queryText = `INSERT INTO "offers" (
  
        "agency",
        "contact_name",
        "contact_email",
        "ten_digit_dash_phone1",
        "ship_options",
        "state",
        "city",
        "off_cat",
        "off_detail")
				VALUES ($1,$2, $3, $4, $5, $6, $7, $8, $9);`;

	pool
		.query(queryText, [
			newOffersData.agency,
			newOffersData.contact_name,
			newOffersData.contact_email,
			newOffersData.ten_digit_dash_phone1,
			newOffersData.ship_options,
			newOffersData.state,
			newOffersData.city,
			newOffersData.off_cat,
			newOffersData.off_detail,
		])
		.then((responseDb) => {
			res.sendStatus(201);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

// ----- UPDATE OFFER
router.put("/", (req, res) => {
	const queryText = `UPDATE "offers"
			SET 
			"offer_id" = $1,
			"submitting_user_id" = $2,
			"agency" = $3,
			"contact_name" = $4,
			"contact_email" = $5,
			"ten_digit_dash_phone1" = $6,
			"phone1_ext" = $7,
			"ship_options" = $8,
			"state" = $9,
			"city" = $10,
			"off_cat" = $11,
			"off_detail" = $12,
			"offer_status" = $13
			"edit_date" = $14
			WHERE "offer_id" = $1;`;

	const editOffersData = req.body;

	pool
		.query(queryText, [
			editOffersData.offer_id,
			editOffersData.submitting_user_id,
			editOffersData.agency,
			editOffersData.contact_name,
			editOffersData.contact_email,
			editOffersData.ten_digit_dash_phone1,
			editOffersData.phone1_ext,
			editOffersData.ship_options,
			editOffersData.state,
			editOffersData.city,
			editOffersData.off_cat,
			editOffersData.off_detail,
			editOffersData.offer_status,
			editOffersData.edit_date,
		])
		.then((responseDb) => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

// ----- DELETE OFFER
router.delete("/:id", (req, res) => {
	const offerId = req.params.id;
	const queryString = `DELETE FROM "offers" WHERE "offer_id" = $1;`;
	pool
		.query(queryString, [offerId])
		.then((responseDb) => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.warn(err);
			res.sendStatus(500);
		});
});

module.exports = router;
